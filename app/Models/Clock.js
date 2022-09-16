


function checkTime(i) {
  if (i < 10) { i = "0" + i }
  return i
}
export class Clock {

  get Clock12Template() {
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let ref = 'AM'
    hh = checkTime(hh)
    mm = checkTime(mm)
    ss = checkTime(ss)

    if (hh == 0) { hh = 12 }
    if (hh > 12) {
      hh -= 12
      ref = 'PM'
    }

    let currentTime = `${hh}:${mm}:${ss} ${ref}`
    return currentTime
  }
  get Clock24Template() {
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let ref = 'AM'
    hh = checkTime(hh)
    mm = checkTime(mm)
    ss = checkTime(ss)

    if (hh > 12) {
      ref = 'PM'
    }

    let currentTime = `${hh}:${mm}:${ss} ${ref}`
    return currentTime
  }
}