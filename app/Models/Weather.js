


export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.desc = data.weather[0].main
    this.icon = data.weather[0].icon
    this.img = `https://openweathermap.org/img/wn/${this.icon}.png`
    this.celsius = Math.round(this.temp - 273)
    this.f = Math.round(this.celsius * 1.8 + 32)
  }

  getWeatherDesc(x) {
    let description = ''
    x = this.desc
    switch (x) {
      case 'Thunderstorm': description += 'Stormy'
        break
      case 'Drizzle': description += 'Drizzly'
        break
      case 'Rain': description += 'Rainy'
        break
      case 'Snow': description += 'Snowy'
        break
      case 'Smoke': description += 'Smoky'
        break
      case 'Mist':
      case 'Haze':
      case 'Dust':
      case 'Fog':
      case 'Sand':
      case 'Ash':
      case 'Squall':
      case 'Tornado':
        description += 'Foggy'
        break
      case 'Clear': description += 'Clear Skies'
        break
      case 'Clouds': description += 'Cloudy'
        break
    }
    return description
  }
  // TODO let me change back to Celsius
  get CelsiusTemplate() {
    return /*html*/ `
    <div id="weather" class="justify-content-end text-center weather-card"
      onclick="app.weathersController.changeWeather()">
      <div class="d-flex flex-column text-shadow">
        <p><span>${this.celsius}</span><span>&deg;</span><span>C</span></p>
        <p>${this.getWeatherDesc(this.desc)}</p>
        <img src="${this.img}" alt="${this.desc}">
      </div>
    </div>
    `
  }
  get FTemplate() {
    return /*html*/ `
    <div id="weather" class="justify-content-end text-center weather-card"
      onclick="app.weathersController.changeWeatherBack()">
      <div class="d-flex flex-column text-shadow">
        <p><span>${this.f}</span><span>&deg;</span><span>F</span></p>
        <p>${this.getWeatherDesc(this.desc)}</p>
        <img src="${this.img}" alt="${this.desc}">
      </div>
    </div>
        `
  }

}
