const $html = document.querySelector('html')
const bttnPlay = document.querySelector('.play')
const bttnPause = document.querySelector('.pause')
const bttnStop = document.querySelector('.stop')
const bttnUpTime = document.querySelector('.upTime')
const bttnDownTime = document.querySelector('.downTime')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const bttnNature = document.querySelector('.nature')
const bttnRain = document.querySelector('.rain')
const bttnHouse = document.querySelector('.house')
const bttnFire = document.querySelector('.fire')
const sliderRain = document.querySelector('#volumeRain')
const sliderHouse = document.querySelector('#volumeHouse')
const sliderFire = document.querySelector('#volumeFire')
let timerTimeOut;

export const elements = { 
  $html,
  bttnPlay,
  bttnPause,
  bttnStop,
  bttnUpTime,
  bttnDownTime,
  minutesDisplay,
  secondsDisplay,
  bttnNature,
  bttnRain,
  bttnHouse,
  bttnFire,
  sliderRain,
  sliderHouse,
  sliderFire,
  timerTimeOut
}