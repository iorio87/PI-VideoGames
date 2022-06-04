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
    <div>
      
      <Header />
      <div className="container">
        
        <div>
          <OrderFilter/>          
        </div>
        <div>

          {loading && <Loader/>}
          <Games />
        </div>
        

      </div>


    </div>
  )
}

export default Home