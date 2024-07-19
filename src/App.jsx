import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BlogContainer from './components/BlogContainer/BlogContainer'
import './index.css'
import Slider from './components/Slider/Slider'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Slider/>
    <br></br>
    <BlogContainer/>
    <br></br>
    <Banner/>
    <br></br>
    <Footer/>
    </>
  )
}

export default App
