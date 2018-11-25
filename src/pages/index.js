import React from 'react'
import styled from 'react-emotion'

import Layout from '~/components/layout'

const Thing = styled.div`
  color: blue;
`

const IndexPage = () => (
  <Layout>
    <Thing>blue</Thing>
  </Layout>
)

export default IndexPage
