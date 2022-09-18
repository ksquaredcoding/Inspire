import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { weathersService } from "../Services/WeathersService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawWeather() {
  let weather = appState.currentWeather
  setHTML('weatherTarget', weather.CelsiusTemplate)
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
    setHTML('weatherTarget', appState.currentWeather.FTemplate)
  }
  changeWeatherBack() {
    setHTML('weatherTarget', appState.currentWeather.CelsiusTemplate)
  }
}