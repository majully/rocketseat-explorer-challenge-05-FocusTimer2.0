import Timer from './functions.js'
import Sounds from './sounds.js'
import { elements } from './elements.js'

const { 
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
} = elements

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  $html,
  bttnPause,
  bttnPlay
})

const sound = Sounds({
  sliderRain,
  sliderHouse,
  sliderFire,
  bttnNature,
  bttnRain,
  bttnHouse,
  bttnFire,
})

bttnUpTime.addEventListener('click', () => {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
  minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, '0')
  sound.pressButton()
  if (minutesDisplay.textContent >= 100) { 
    minutesDisplay.textContent = 95
    alert('Limite é até 95 minutos')
  }
})

bttnDownTime.addEventListener('click', () => {
  minutesDisplay.textContent = String(minutesDisplay.textContent - 5).padStart(2, '0')
  sound.pressButton()
  if (minutesDisplay.textContent <= 0) { 
    minutesDisplay.textContent = 25
    alert('Não é aceito menor a zero!')
  }
})

bttnPlay.addEventListener('click', function() {
  timer.countdown()
  timer.play()
  sound.pressButton()
})

bttnStop.addEventListener('click', function() { 
  timer.resetTimer()
  sound.pressButton()
})

bttnPause.addEventListener('click', function() { 
  timer.hold()
  timer.pause()
  sound.pressButton()
})

bttnRain.addEventListener('click', function() {
  sound.pressRain()
})

bttnNature.addEventListener('click', function() {
  sound.pressNature()
})

bttnHouse.addEventListener('click', function() {
  sound.pressHouse()
})

bttnFire.addEventListener('click', function() {
  sound.pressFire()
})