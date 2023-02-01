import React from 'react'
import '../assets/styles/SkillsDescription.css'
import webStack from '../assets/img/web-stack.svg'
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import js from '../assets/img/js.svg'
import ts from '../assets/img/typescript.svg'
import react from '../assets/img/react.svg'
import node from '../assets/img/node.svg'
import express from '../assets/img/express.svg'
import socket from '../assets/img/socket.svg'
import graphql from '../assets/img/graphql.svg'

export default function SkillsDescription() {
    return (
        <section>
            <div className='section__left'>
                <img src={webStack} alt='full stack web dev' />
            </div>
            <div className='section__right'>
                <p className='skill__title'>Full Stack Development</p>
                <div className='stack__items'>
                    <ul className='skills__imgs'>
                        <li className='skills__img'>
                            <img src={html} alt='html svg' />
                        </li>
                        <li className='skills__img'>
                            <img src={css} alt='html svg' />
                        </li>
                        <li className='skills__img'>
                            <img src={js} alt='html svg' />
                        </li>
                        <li className='skills__img'>
                            <img src={ts} alt='html svg' />
                        </li>
                        <li className='skills__img'>
                            <img src={react} alt='html svg' />
                        </li>
                        <li className='skills__img'>
                            <img src={node} alt='html svg' />
                        </li>
                        <li className='skills__img'>
                            <img src={express} alt='html svg' />
                        </li>
                        <li className='skills__img'>
                            <img src={socket} alt='html svg' />
                        </li>
                        <li className='skills__img'>
                            <img src={graphql} alt='html svg' />
                        </li>
                    </ul>
                </div>
                <div className='about__skill'>
                    <p>
                        🥇Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                    <p>
                        🏅Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                    <p>
                        🏆Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                </div>
            </div>
        </section>
    )
}
