import React from'react'
import './App.css'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <div>
      <Navbar />
      <AboutUs />  
    </div>
    </>
  )
}

export default App
