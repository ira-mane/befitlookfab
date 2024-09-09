import React from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
// import Faq from './sections/Faq';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booking from './components/Booking';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Bmi from './components/Bmi';
import SingleBlog from './components/SingleBlog';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/bmi' element={<Bmi />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          {/* <Route path='/faq' element={<Faq />}></Route> */}
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/blog/:id' element={<SingleBlog/>}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='*' element={<h1>Page Not Found</h1>}></Route>
        </Routes>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;