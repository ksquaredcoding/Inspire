import { Clock } from "../Models/Clock.js";
import { setHTML, setText } from "../Utils/Writer.js";
import { appState } from "../AppState.js";

const clock12Timeout = setTimeout(_draw12Clock, 1000)
function _draw12Clock() {
  let date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()
  let ref = 'AM'
  mm = checkTime(mm)
  ss = checkTime(ss)

  if (hh == 0) { hh = 12 }
  if (hh > 12) {
    hh -= 12
    ref = 'PM'
  }
  hh = checkTime(hh)

  let currentTime = `${hh}:${mm}:${ss} ${ref}`
  setHTML('clock', currentTime)
  setTimeout(_draw12Clock, 1000)
}

function checkTime(i) {
  if (i < 10) { i = "0" + i }
  return i
}

export class ClocksController {
  constructor() {
    clock12Timeout
  }
}