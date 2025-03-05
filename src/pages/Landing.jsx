import React from 'react'
import Header from '../components/header/Header'
import HeroSection from '../components/Hero-section/HeroSection'
import Skills from '../components/skills/Skills'
import About from '../components/about/About'
import Projects from '../components/project/Project'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'


export default function Landing() {
    return (
        <div>
            <Header />
            <HeroSection/>
            <Skills />
            <About />
            <Projects />
            <Contact/>
            <Footer />
        </div>
    )
}
