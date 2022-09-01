import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames } from '../../store/actions/index'
import Game from '../Game/Game'
import './games.css'
import Pagination from '../Pagination/Pagination'


function Games() {
  const { games } = useSelector(state => state)
  let dispatch = useDispatch()

  // Paginado 
  const [currentPage, setCurrentPage] = useState(1)
  const gamesPerPage= 15
  const LastGameForPage = currentPage * gamesPerPage
  const FirtGameForPage = LastGameForPage - gamesPerPage
  const currentGames = games.slice(FirtGameForPage, LastGameForPage)

  const paginado = (pageNumber) => {    
    return setCurrentPage(pageNumber)
  }
  console.log(currentPage);
  
  useEffect(() => {
    if (games.length === 0){
      dispatch(getGames())
    }else{
      return games
    }    

  }, [games, dispatch])

  //vuelvo a la pagina 1, cada vez que filtro
  useEffect(() => {
    setCurrentPage(1)
  }, [games])  

  return (    
    <div>      
      <div className='pagination font'>        
        <Pagination gamesPerPage={gamesPerPage} games={games.length} paginado={paginado} currentPage={currentPage}/>
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