import React from 'react'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Pricing/>
    <Faq/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App