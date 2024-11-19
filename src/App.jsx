import React from'react'
import './App.css'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'
import PatentPage from './pages/PatentPage'
function App() {
  return (
    <>
    <div>
      <Navbar />
      <PatentPage />
    </div>
    </>
  )
}

export default App
