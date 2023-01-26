import React from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Skills from './components/Skills'

export default function App() {
    return (
        <div className='app'>
            <nav>
                <Header />
            </nav>
            <main>
                <About />
                <Skills />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
