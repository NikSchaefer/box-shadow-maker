import React, { useState } from 'react'
import './App.css';
import github from './Images/github.svg'
import mail from './Images/mail.svg'

function App() {

  const [xOffset, setXOffset] = useState(0)
  const [yOffset, setYOffset] = useState(0)
  const [blur, setBlur] = useState(10)
  const [color, setColor] = useState('black')
  const [code, setCode] = useState(null)

  const update = () => {
    const object = document.getElementById('display');
    console.log(color)
    object.style.boxShadow = `${xOffset}px ${yOffset}px ${blur}px ${color}`
    console.log(color)
    setCode(document.getElementById('display').style.boxShadow)
  }
  window.onload = function () {
    update()
  }
  const handleX = (e) => {
    setXOffset(e.target.value)
    update()
  }
  const handleY = (e) => {
    setYOffset(e.target.value)
    update()
  }
  const handleBlur = (e) => {
    setBlur(e.target.value)
    update()
  }
  const handleColor = (e) => {
    setColor(e.target.value)
    update()
    update()
  }

  return (
    <div className='main-div'>

      <div className="slidecontainer">

        <p className='title'>Box Shadow Creator</p>

        <div className='slides'>

          <p className='slider-info'>X Offset: {xOffset}px</p>
          <input onChange={handleX} defaultValue='0' type="range" min="-400" max="400" className="slider" />

          <p className='slider-info'>Y Offset: {yOffset}px</p>
          <input onChange={handleY} defaultValue='0' type="range" min="-400" max="400" className="slider" />

          <p className='slider-info'>Blur: {blur}px</p>
          <input onChange={handleBlur} defaultValue='10' type="range" min="1" max="100" className="slider" />

          <p className='slider-info'>Color: {color}</p>
          <input onChange={handleColor} className="color-input" />

          <p>Copy the text below into your elements CSS</p>
          <p className='copy-text'>{`box-shadow: ${code};`}</p>


        </div>
      </div>

      <div className='display-div'>
        <div id='display' />
      </div>

      <div className='footer'>
        <a href='https://github.com/NikSchaefer/box-shadow-maker'><img alt='' src={github} /></a>
      </div>
    </div>
  );
}

export default App;
