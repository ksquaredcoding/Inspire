import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)
  /** @type {import('./Models/BackgroundImage').BackgroundImage} */
  backgroundPicture = null
  /** @type {import('./Models/Weather').Weather} */
  currentWeather = null
  /** @type {import('./Models/Quote').Quote} */
  quote = null
  /** @type {import('./Models/Todo').Todo} */
  todoList = null
  /** @type {import('./Models/Task').Task[]} */
  todoListTasks = []
  user = 'kevin'
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
