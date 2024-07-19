import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/CardContainer'
import './index.css'
import Jumpotron from './components/Slider/Jumpotron'
import Overview from './components/Overview/overview'
import Banner from './components/banner/banner'
import Footerdata from './components/Footer/fotter'

function App() {

  return (
    <>
    <Navbar/>
    <Jumpotron/>
    <br></br>
    <Cards/>
    <br></br>
    <Overview/>
    <br></br>
    <Banner/>
    <br></br>
    <Footerdata/>
    </>
  )
}

export default App
