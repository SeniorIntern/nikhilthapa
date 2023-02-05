import React from 'react'
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './Projects'

export default function App() {
    return (
        <div className='app'>
            <nav>
                <Header />
            </nav>
            <main>
                {/*
                <Banner />
                <Projects />
                 */}

                <About />
                <Skills />
                {/*
                 */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
