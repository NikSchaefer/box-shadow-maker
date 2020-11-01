import React, { useState } from 'react'



const Home = () => {

    const [xOffset, setXOffset] = useState(0)
    const [yOffset, setYOffset] = useState(0)
    const [blur, setBlur] = useState(50)
    const [color, setColor] = useState('black')
    const [code, setCode] = useState(null)

    const update = () => {
        const object = document.getElementById('display');
        object.style.boxShadow = `${xOffset}px ${yOffset}px ${blur}px ${color}`
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
    }

    

    return (
        <div className='main-div'>

            <div className="slidecontainer">

                <div className='slides'>

                    <p className='slider-info'>X Offset: {xOffset}</p>
                    <input onChange={handleX} type="range" min="-300" max="300" className="slider" />

                    <p className='slider-info'>Y Offset: {yOffset}</p>
                    <input onChange={handleY} type="range" min="-300" max="300" className="slider" />

                    <p className='slider-info'>Blur: {blur}</p>
                    <input onChange={handleBlur} type="range" min="1" max="100" className="slider" />

                    <p className='slider-info'>Color: {color}</p>
                    <input onChange={handleColor} className="color-input" />


                    <div className='copy-div'>
                        <p>{`box-shadow: ${code}`}</p>

                    </div>

                </div>
            </div>

            <div className='display-div'>
                <div id='display' />


            </div>





        </div>
    )
}

export default Home;


