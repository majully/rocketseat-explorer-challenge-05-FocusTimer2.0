export default function Sound({ 
    sliderNature,
    sliderRain,
    sliderHouse,
    sliderFire,
    bttnNature,
    bttnRain,
    bttnHouse,
    bttnFire,
  }) { 
  
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
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
  
    function backColor(value1, value2, value3) { 
      value1.style.background = 'var(--bg-card-primary)'
      value2.style.background = 'var(--bg-card-primary)'
      value3.style.background = 'var(--bg-card-primary)'
    }
    
    function pressNature() {
      bttnPressNature.loop = true
      bttnNature.style.background = 'var(--bg-card-secondary)'
      stopSound(bttnPressNature, bttnPressFire, bttnPressHouse, bttnPressRain)
      backVolume(sliderFire, sliderHouse, sliderRain)
      backColor(bttnFire, bttnHouse, bttnRain)
      bttnPressNature.volume = sliderNature.value / 100
    }
  
    function pressFire() {
      bttnPressFire.loop = true
      bttnFire.style.background = 'var(--bg-card-secondary)'
      stopSound(bttnPressFire, bttnPressNature, bttnPressHouse, bttnPressRain)
      backVolume(sliderNature, sliderHouse, sliderRain)
      backColor(bttnNature, bttnHouse, bttnRain)
      bttnPressFire.volume = sliderFire.value / 100
    }
  
    function pressHouse() {
      bttnPressHouse.loop = true
      bttnHouse.style.background = 'var(--bg-card-secondary)'
      stopSound(bttnPressHouse, bttnPressNature, bttnPressFire, bttnPressRain)
      backVolume(sliderNature, sliderFire, sliderRain)
      backColor(bttnFire, bttnNature, bttnRain)
      bttnPressHouse.volume = sliderHouse.value / 100
    }
  
    function pressRain() {
      bttnPressRain.loop = true
      bttnRain.style.background = 'var(--bg-card-secondary)'
      stopSound(bttnPressRain, bttnPressNature, bttnPressFire, bttnPressHouse )
      backVolume(sliderNature, sliderHouse, sliderFire)
      backColor(bttnFire, bttnHouse, bttnNature)
      bttnPressRain.volume = sliderRain.value / 100
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