import React from 'react'

import Footer from './Footer'
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Hello from './Hello';
import Contact from './Contact';


import {BrowserRouter,Route,Routes} from 'react-router-dom'


const Websitepage = () => {
  return (
    <div>
        <BrowserRouter>
          <Nav/>         
        <Routes>          
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/hello' element={<Hello/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Websitepage