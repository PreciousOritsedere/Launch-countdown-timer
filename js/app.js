const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const countdown = '22 july 2022'

function countdownApp() {
  const countdownDate = new Date(countdown)
  const currentDate = new Date()

  const totalseconds = (countdownDate - currentDate) / 1000
  const daysEl = Math.round(totalseconds / (60 * 60 * 24))
  const hoursEl = Math.round(totalseconds / (60 * 60)) % 24
  const minsEl = Math.round(totalseconds / 60) % 60
  const secondsEl = Math.round(totalseconds) % 60

  days.innerHTML = format(daysEl)
  hours.innerHTML = format(hoursEl)
  minutes.innerHTML = format(minsEl)
  seconds.innerHTML = format(secondsEl)
}

countdownApp()
setInterval(countdownApp, 1000)

function format(value) {
  return value < 10 ? `0${value}` : value
}

