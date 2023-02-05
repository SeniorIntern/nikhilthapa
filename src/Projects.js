import React from 'react'
import ProjectItem from './ProjectItem'
import './assets/styles/Projects.css'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'get-deals',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
            date: 'Created on 2023-01-21',
        },
        {
            id: 2,
            title: 'icecream-builder',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
            date: 'Created on 2023-01-30',
        },
        {
            id: 3,
            title: 'icecream-builder',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
            date: 'Created on 2023-01-30',
        },
        {
            id: 4,
            title: 'stock-analytics',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
            date: 'Created on 2023-01-30',
        },
        {
            id: 5,
            title: 'LMS',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
            date: 'Created on 2023-01-30',
        },
        {
            id: 6,
            title: 'blog-app',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
            date: 'Created on 2023-01-30',
        },
    ]

    return (
        <div className='projects'>
            <div className='project__listing'>
                {projects.map((project, id) => {
                    return <ProjectItem key={id} {...project} />
                })}
            </div>
            <h2 className='btn'>
                <a
                    href='https://github.com/nikhilDOTts'
                    target={'_blank'}
                    rel='noreferrer'
                >
                    More Projects
                </a>
            </h2>
        </div>
    )
}
