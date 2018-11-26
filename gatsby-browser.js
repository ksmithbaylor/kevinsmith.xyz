import WebFont from 'webfontloader'
import 'normalize.css'
import './src/index.css'

export function onInitialClientRender() {
  // Declare the fonts we are waiting for
  WebFont.load({
    custom: {
      families: ['Overlock:400,700', 'Nanum Gothic:400,700']
    }
  })

  // Load the fonts!
  require('typeface-overlock')
  require('typeface-nanum-gothic')
}
