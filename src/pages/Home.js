import React, { lazy } from 'react'

const About = lazy(() => import('../components/About'))
const Skills = lazy(() => import('../components/Skills'))

export default function Home() {
    return (
        <div className='home'>
            <About />
            {/* <Skills /> */}
        </div>
    )
}
