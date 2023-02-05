import React from 'react'
import '../assets/styles/Header.css'

export default function Header() {
    return (
        <nav>
            <div className='nav__left'>
                <a class='logo' tag='[object Object]' href='#/home'>
                    <span class='logo__color'> &lt;</span>
                    <span class='logo__name'>NikhilThapa</span>
                    <span class='logo__color'>/&gt;</span>
                </a>
            </div>
            <div className='nav__right'>
                <ul>
                    <li>
                        <a href='#Home'>Home</a>
                    </li>
                    <li>
                        <a href='#Education'>Education</a>
                    </li>
                    <li>
                        <a href='#Experience'>Experience</a>
                    </li>
                    <li>
                        <a href='#Projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#OpenSource'>Open Source</a>
                    </li>
                    <li>
                        <a href='#Contact'>Contact</a>
                    </li>
                    <button>Resume</button>
                </ul>
            </div>
        </nav>
    )
}
