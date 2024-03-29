import React from 'react'
import '../assets/styles/About.css'
import guy from '../assets/img/feeling-proud.svg'

export default function About() {
    const name = 'Nikhil Thapa'
    const desc =
        'I am a Full Stack Developer with experience building open source projects. I am fond of solving complex problems encountered in daily life. I love to convert my dreams into efficient code.I am an opensource advocate. I was ranked 25th amongst most active GitHub contributors from India in July 2021'

    return (
        <div className='about'>
            <div className='description'>
                <h1>{name}</h1>
                <p>{desc}</p>
                <br />
                <button>
                    <a href='localhost:3000'>My Resume</a>
                </button>
            </div>
            <div className='picture'>
                <img src={guy} alt='' />
            </div>
        </div>
    )
}
