import React from 'react'
import { NavLink } from 'react-router-dom'
import './game.css'

function Game({ name, image, id, genres }) {
  return (
    
      <NavLink to={`detail/${id}`} className='link'>
        <div className='card'>
        <h2> {name} </h2>
        <img src={image} alt="" width={200} height={200} />
        <p>Generos:</p>
       {genres.map(e => <li className='genre' key={e.id}>{e} </li> )}
        </div >
      </NavLink>
    
  )
}

export default Game