import React from 'react'
import Header from '../components/Header'

const cargarJuegos = async() =>{
  const response = await fetch(`https://api.rawg.io/api/games?key=fe468bbaf1df47e49f303405a20941cf`)
  const juegos = await response.json()
  console.log(juegos.results);
  return juegos.results
  
}
cargarJuegos()

function Home() {
  return (
    <div>
      <Header/>
      
    </div>
  )
}

export default Home