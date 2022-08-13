import React from 'react'
import { useSelector } from 'react-redux'
import Games from '../components/Games'
import Header from '../components/Header'
import Loader from '../components/Loader'
import OrderFilter from '../components/OrderFilter'
import './home.css'

function Home() {
  const {loading}= useSelector(state => state) 
  

  return (
    <div className='bg'>
      
      <Header />
      <div>
        
        <div>
          <OrderFilter/>          
        </div>
        <div className='loader'>

          <Games />
          {loading && <Loader/>}
        </div>
        

      </div>


    </div>
  )
}

export default Home