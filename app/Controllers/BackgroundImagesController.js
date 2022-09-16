import { appState } from "../AppState.js";
import { backgroundImagesService } from "../Services/BackgroundImagesService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";


function _drawBackground() {
  let backgroundPicture = appState.backgroundPicture
  document.querySelector('body').style.backgroundImage = `url(${backgroundPicture.url})`
  setText('copyright', backgroundPicture.copyright)
}

export class BackgroundImagesController {
  constructor() {
    this.getBackground()
    appState.on('backgroundPicture', _drawBackground)
  }

  async getBackground() {
    try {
      await backgroundImagesService.getBackground()
    } catch (error) {
      console.error('[GETTING BACKGROUND IMAGE', error)
      Pop.error(error)
    }
  }
}