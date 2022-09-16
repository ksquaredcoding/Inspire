import { appState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawWeather() {
  let weather = appState.currentWeather
  setHTML('weather', weather.Template)
}

export class WeathersController {
  constructor() {
    this.getWeather()
    appState.on('currentWeather', _drawWeather)
  }
  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error('[GETTING WEATHER]', error)
      Pop.error(error)
    }
  }
  changeWeather() {
    let F = appState.currentWeather.celsius * 1.8 + 32
    let newTemp = `${F}`
    setText('changeCF', newTemp)
    setText('weather-type', 'F')
  }
}