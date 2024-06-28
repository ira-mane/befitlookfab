import React from 'react'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Faq from './sections/Faq'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Booking from './components/Booking'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Recipe from './components/Recipe'
import Bmi from './components/Bmi'
import FormfacadeEmbed from "@formfacade/embed-react";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/recipe' element={<Recipe />}></Route>
        <Route path='/bmi' element={<Bmi />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/booking' element={<Booking />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App