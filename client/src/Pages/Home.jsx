import React from 'react'
import { useSelector } from 'react-redux'
import Games from '../components/Games/Games'
import Header from '../components/Header/Header'
import Loader from '../components/Loader'
import OrderFilter from '../components/OrderFilter/OrderFilter'
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
          {loading ? <Loader/>: <Games />}
          
        </div>
        

      </div>


    </div>
  )
}

export default Home