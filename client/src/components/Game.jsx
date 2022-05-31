import React from 'react'
import './game.css'

function Game({name, image}) {
  return (
    <div className='card'>
        <h2> {name} </h2>
        <img src={image} alt="" width={200} height={200}/>
    </div>
  )
}

export default Game