import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames } from '../store/actions/index'
import Game from './Game'
import './games.css'
import Pagination from './Pagination'


function Games() {
  const { games } = useSelector(state => state)
  let dispatch = useDispatch()

  // Paginado 
  const [currentPage, setCurrentPage] = useState(1)
  const [gamesPerPage, setGamesPerPage] = useState(15)
  const LastGameForPage = currentPage * gamesPerPage
  const FirtGameForPage = LastGameForPage - gamesPerPage
  const currentGames = games.slice(FirtGameForPage, LastGameForPage)

  const paginado = (pageNumber) => {
    return setCurrentPage(pageNumber)
  }

  //console.log('la pagina actual es: ' + currentPage);

  useEffect(() => {
    dispatch(getGames())

  }, [])

  

  return (
    <div>
      <div className='pagination'>
        <Pagination gamesPerPage={gamesPerPage} games={games.length} paginado={paginado} />
      </div>
      <div className='contenedor'>
        {currentGames.map(e => {
          
          return <Game name={e.name} image={e.image} key={e.id} id={e.id} genres={e.genres} rating={e.rating}/>
        })}
      </div>
    </div>
  )
}

export default Games