import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headersection from './Components/Headersection'
import Mainbodytwo from './Components/Mainbodytwo'
import Mainbodyone from './Components/Mainbodyone'
import { Route, Routes } from 'react-router-dom'
import Mainbodythree from './Components/Mainbodythree'
import Mainabout from './Components/Mainabout'
import HomePage from './Components/HomePage'
import Mainservices from './Components/Mainservices'
import Maincontact from './Components/Maincontact'


function App() {
  

  return (
    <>
     
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/main" element={<Mainbodythree/>} />
        <Route path="/about" element={<Mainabout/>} />
        <Route path="/services" element={<Mainservices/>} />
        <Route path='/contact' element={<Maincontact/>}/>
        <Route path="/home" element={
            <>
              <Headersection />
              <Mainbodyone />
              <Mainbodytwo />
              {/* <Mainbodythree /> */}
              </>
} />

      </Routes>
    </>
  )
}

export default App
