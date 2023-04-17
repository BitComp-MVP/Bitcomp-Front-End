import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Market from './pages/Market'
import Footer from './components/Footer'
import { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [walletBalance, setWalletBalance] = useState(0); // initialize with 0
  const [balance, setBalance] = useState(null);
  
  
  const getAddressOptions = {
    payload: {
      purposes: ['ordinals', 'payment'],
      message: 'Address for receiving Ordinals and payments',
      network: {
        type:'Mainnet'
      },
    },
    onFinish: (response) => {
      console.log(response)
      setBalance(response.balance); // set the balance state
    },
    onCancel: () => alert('Request canceled'),
  }

  const updateWalletBalance = (balance) => {
    setWalletBalance(balance);
  }
  return (
    <>
   <div className='bg-black h-full text-white'>
   <Navbar updateWalletBalance={updateWalletBalance}/>
   <Routes>
    <Route path='/' element={<Dashboard balance={balance}/>}/>
    <Route path='/market' element={<Market/>}/>
   </Routes>
   <Footer/>
   </div>
    </>
  )
}

export default App