import React from 'react'
import '../assets/styles/Skills.css'
import SkillsDescription from './SkillsDescription'

export default function Skills() {
    return (
        <div className='skills'>
            <p
                style={{
                    fontSize: '2.6rem',
                    fontWeight: 'bolder',
                    textAlign: 'center',
                }}
            >
                What I do?
            </p>
            <div className='list__skills'>
                <SkillsDescription />
            </div>
        </div>
    )
}
