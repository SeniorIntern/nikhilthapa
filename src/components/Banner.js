import React from 'react'
import '../assets/styles/Banner.css'
import projectBanner from '../assets/img/feeling-proud.svg'

export default function Banner() {
    return (
        <div className='banner'>
            <div className='banner__img'>
                <img src={projectBanner} alt='conent based on heading' />
            </div>
            <div className='banner__desc'>
                <h1 style={{ textAlign: 'center' }}>Projects</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum repellat distinctio eveniet in hic, ea ad repellendus
                    et nobis ipsa reiciendis quasi soluta ipsam voluptates,
                    cupiditate consectetur nihil exercitationem sed.
                </p>
            </div>
        </div>
    )
}
