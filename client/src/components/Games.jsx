import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getGames} from '../store/actions/index'
import Game from './Game'
import './games.css'

function Games() {
const {games} = useSelector(state => state)
let dispatch = useDispatch()

useEffect(() => {
  dispatch(getGames())  
}, [])

  return (
    <div className='contenedor'>
        {games.map(e => {
            return <Game name={e.name} image={e.image} key={e.id}/>
        })}
    </div>
  )
}

export default Games