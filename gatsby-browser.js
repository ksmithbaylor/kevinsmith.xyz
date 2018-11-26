import FontFaceObserver from 'fontfaceobserver'
import 'normalize.css'
import './src/typography/fonts.css'
import './src/index.css'

const fonts = [
  new FontFaceObserver('Overlock', { weight: 400 }),
  new FontFaceObserver('Overlock', { weight: 700 }),
  new FontFaceObserver('Nanum Gothic', { weight: 400 }),
  new FontFaceObserver('Nanum Gothic', { weight: 700 })
]

export function onInitialClientRender() {
  Promise.all(fonts.map(font => font.load()))
    .then(() => {
      document.documentElement.className += ' fonts-loaded'
    })
    .catch(err => {
      console.error(err)
    })
}
