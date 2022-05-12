export default function Sound({ 
  sliderRain,
  sliderHouse,
  sliderFire,
  bttnNature,
  bttnRain,
  bttnHouse,
  bttnFire,
}) {
  
  const buttonPressAudio = new Audio("../sounds/button-press.wav");
  const kitchenTimer = new Audio("../sounds/kichen-timer.mp3");
  const bttnPressNature = new Audio("../sounds/floresta.wav")
  const bttnPressRain = new Audio("../sounds/chuva.wav")
  const bttnPressHouse = new Audio("../sounds/cafeteria.wav")
  const bttnPressFire = new Audio("../sounds/lareira.wav")

  function pressButton() { 
    buttonPressAudio.play()
  }
  
  function timeEnd() {
    kitchenTimer.play()
  }
  
  function stopSound(nowSound, stopOne, stopTwo, stopThree) {
    nowSound.play()
    stopOne.pause()
    stopTwo.pause()
    stopThree.pause()
  }

  function backVolume(value1, value2, value3) { 
    value1.value = 0
    value2.value = 0
    value3.value = 0
  }

  function backColor(cor1, cor2, cor3) {
    cor1.style.background = 'var(--bg-card-primary)'
    cor2.style.background = 'var(--bg-card-primary)'
    cor3.style.background = 'var(--bg-card-primary)'
  }
  
  function pressNature() {
    bttnPressNature.loop = true
    bttnNature.style.background = 'var(--bg-card-secondary)'
    stopSound(bttnPressNature, bttnPressFire, bttnPressHouse, bttnPressRain)
    backColor(bttnFire, bttnHouse, bttnRain)
    backVolume(sliderHouse, sliderRain)
  }

  function pressFire() {
    bttnPressFire.loop = true
    bttnFire.style.background = 'var(--bg-card-secondary)'
    stopSound(bttnPressFire, bttnPressNature, bttnPressHouse, bttnPressRain)
    backColor(bttnNature, bttnHouse, bttnRain)
    backVolume(sliderHouse, sliderRain)
  }

  function pressHouse() {
    bttnPressHouse.loop = true
    bttnHouse.style.background = 'var(--bg-card-secondary)'
    stopSound(bttnPressHouse, bttnPressNature, bttnPressFire, bttnPressRain)
    backColor(bttnFire, bttnNature, bttnRain)
    backVolume(sliderFire, sliderRain)
  }

  function pressRain() {
    bttnPressRain.loop = true
    bttnRain.style.background = 'var(--bg-card-secondary)'
    stopSound(bttnPressRain, bttnPressNature, bttnPressFire, bttnPressHouse )
    backColor(bttnFire, bttnHouse, bttnNature)
    backVolume(sliderHouse, sliderFire)
  }
  
  return {
    pressButton, 
    timeEnd,
    pressNature,
    pressFire,
    pressHouse,
    pressRain,
  }
}