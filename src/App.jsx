import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Market from './pages/Market'
const App = () => {
  return (
    <>
   <div className='bg-black h-full text-white'>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/market' element={<Market/>}/>
   </Routes>
   </div>
    </>
  )
}

export default App