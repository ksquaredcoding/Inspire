import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxServer } from "./AxiosService.js"



class WeathersService {
  async getWeather() {
    const res = await sandboxServer.get('/weather')
    console.log(res.data);
    appState.currentWeather = new Weather(res.data)
    console.log(appState.currentWeather);
  }
}

export const weathersService = new WeathersService()