import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Games from '../components/Games'
import Header from '../components/Header'
import Loader from '../components/Loader'
import OrderFilter from '../components/OrderFilter'
import './home.css'

function Home() {
  const {loading}= useSelector(state => state) 
  const [show, setShow] = useState(false)
  

  return (
    <div className='bg'>
      
      <Header />
      <div>
        
        <div>
          <OrderFilter/>          
        </div>
        <div className='loader'>
          {loading ? <Loader/>: <Games />}

          {/* {loading && <Loader/>}
          <Games /> */}
        </div>
        

      </div>


    </div>
  )
}

export default Home