import React from 'react';
import NAVBAR from './components/Navbar'
import HOME2 from '../src/pages/Home'
import SERVICES from './pages/Services'
import ABOUT from '../src/pages/About'
import FOOTER from './pages/Footer'
import Appoinment2 from '../src/subPage/Appoinment1'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
    <BrowserRouter>
    <NAVBAR/>


      <Routes>
        <Route path="/" element={<HOME2 />}> </Route>
        <Route path='/about' element={<ABOUT/>}></Route>
        <Route path="/services" element={<SERVICES/>}></Route>
        <Route path="/footer" element={<FOOTER />}></Route>
        <Route path='/appoinment' element={<Appoinment2/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
