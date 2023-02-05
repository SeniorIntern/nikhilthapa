import React from 'react'
import './assets/styles/ProjectItem.css'

export default function ProjectItem({ id, title, desc, date }) {
    return (
        <div className='project__item'>
            <h2 style={{ color: '#0a192f', fontWeight: 'bolder' }}>{title}</h2>
            <p>{desc}</p>
            <p style={{ margin: '0.6em 0', color: 'grey' }}>{date}</p>
        </div>
    )
}
