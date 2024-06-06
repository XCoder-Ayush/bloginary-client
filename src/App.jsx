import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Jumpotron from './components/Slider/Jumpotron'
import Box from './components/Cards/Box'
import './index.css'

function App() {

  return (
    <>
    <Navbar/>
    <Jumpotron/>
    <Box/>
    </>
  )
}

export default App
