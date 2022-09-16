import { appState } from "../AppState.js"
import { BackgroundImage } from "../Models/BackgroundImage.js"
import { sandboxServer } from "./AxiosService.js"



class BackgroundImagesService {
  async getBackground() {
    const res = await sandboxServer.get('/images')
    appState.backgroundPicture = new BackgroundImage(res.data)
  }
}

export const backgroundImagesService = new BackgroundImagesService()