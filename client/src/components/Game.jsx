import React from 'react'
import { NavLink } from 'react-router-dom'
import './game.css'

function Game({ name, image, id, genres, rating }) {
  return (
    
      <NavLink to={`detail/${id}`} className='link'>
        <div className='card'>
        <h2 className='titulo'> {name} </h2>
        <img src={image} alt="" width={200} height={200} />
        <p className='genero'>Generos:</p>
       {genres.map(e => <li key={e} className='genero'>{e} </li> )}
        <p className='rating'>Rating: {rating}</p>
        </div >
      </NavLink>    
  )
}

export default Game