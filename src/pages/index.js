import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

export default () => (
  <Container>
    <Name>Kevin J Smith</Name>
    <BottomBorder />
    <JBlocker />
    <Nav>
      <NavLink to="/sample">Home</NavLink>
      <NavLink to="/sample">Thoughts</NavLink>
      <NavLink to="/sample">Projects</NavLink>
      <NavLink to="/sample">Bio</NavLink>
      <NavLink to="/sample">Consulting</NavLink>
      <NavLink to="/sample">Contact</NavLink>
    </Nav>
  </Container>
)

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 1em;
  font-size: 96px;

  display: flex;
  flex-direction: column;
  align-items: center;

  user-select: none;
  cursor: default;
`

const Name = styled.div`
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
  z-index: 3;

  font-family: Overlock;
  font-weight: 400;
  font-size: inherit;
  color: rgba(0, 0, 0, 0.75);
`

const JBlocker = styled.div`
  width: 0.26em;
  height: 0.1em;
  margin-left: -0.33em;
  margin-top: -0.05em;
  background-color: white;
  z-index: 2;
`

const UNDERLINE_WIDTH = '5.08em'

const BottomBorder = styled.div`
  margin: 0 auto;
  width: ${UNDERLINE_WIDTH};
  border-top: 1px solid #777;
  margin-top: -0.16em;
  z-index: 1;
`

const Nav = styled.div`
  width: calc(${UNDERLINE_WIDTH} - 0.08em);
  display: flex;
  justify-content: space-between;
  z-index: 4;
`

const NavLink = styled(Link)`
  font-size: 16px;
  font-family: 'Nanum Gothic';
  text-decoration: none;
  color: #777;
  transition: all 150ms ease-in-out;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 95%;
    height: 1px;
    bottom: 0;
    left: 2.5%;
    background-color: #185f91;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 150ms ease-in-out;
  }

  &:hover {
    color: #185f91;
    font-weight: 700;

    &:before {
      transform: scaleX(1);
      visibility: visible;
    }
  }
`
