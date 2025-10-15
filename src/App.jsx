import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headersection from './Components/Headersection'
import Mainbodytwo from './Components/Mainbodytwo'
import Mainbodyone from './Components/Mainbodyone'
import { Route, Routes } from 'react-router-dom'
import Mainbodythree from './Components/Mainbodythree'


function App() {
  

  return (
    <>
     <Headersection/>
      <Routes>
        <Route path="/" element={
          <>
            <Mainbodyone/>
            <Mainbodytwo/>
          </>
        } />
        <Route path="/main" element={<Mainbodythree/>} />
      </Routes>
    </>
  )
}

export default App
