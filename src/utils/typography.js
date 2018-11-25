import Typography from 'typography'

// Stolen shamelessly from Github.com
const systemStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol'
]

const typography = new Typography({
  baseFontSize: '16px',
  headerFontFamily: ['Overlock', ...systemStack],
  headerWeight: 700,
  bodyFontFamily: ['Nanum Gothic', ...systemStack],
  bodyWeight: 400,
  scaleRatio: 2.5
})

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
