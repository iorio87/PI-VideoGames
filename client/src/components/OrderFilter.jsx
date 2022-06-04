import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getGenres, FilterByGenre, FilterSource} from '../store/actions/index'
import './orderfilter.css'

function OrderFilter() {
    const {genres} = useSelector(state => state)
    let dispatch = useDispatch()

    useEffect(() => {
      dispatch(getGenres())       
    }, [])


    // const Alfabetico = (e) => {
    //   const opcion = e.target.value

    //   if(opcion === 'ascendente') {
    //     games.sort((a, b)=> {
    //       return a.name < b.name ? -1 : 1
    //     })
    //   }

    //   dispatch(Order(opcion))
    // }

    const HandleFIlterByGenre = (e) => {
      const opcion = e.target.value 
      dispatch(FilterByGenre(opcion))     
    }

    const HandleFilterSource = (e) => {
      const opcion = e.target.value      
      dispatch(FilterSource(opcion))
      
    }
        
  return (
    <div className='option'>
        <label htmlFor="ordenar">ORDENAR</label>
          <select name="ordenar">
            <option value="">Selecciona</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>

          </select>
          
          <label htmlFor="genero">GENERO</label>
          <select name="genero" onChange={e => HandleFIlterByGenre(e)}>
              <option value="">Selecciona</option>
            {/* Me traigo los generos del back y los inyecto */}
            {genres.map(genre =>{
                return <option value={genre.name} key={genre.id}>{genre.name}</option>
            })}

          </select>

          <label htmlFor="rating">RATING</label>
          <select name="rating" id="">
            <option value="">Selecciona</option>
            <option value="mayor">Mayor a Menor</option>
            <option value="menor">Menor a Mayor</option>

          </select>

          <label htmlFor="fuente">FUENTE</label>
          <select name="fuente" onChange={e => HandleFilterSource(e)}>
              <option value="todos">Todos</option>
              <option value="api">API</option>
              <option value="agregado">Agregados</option>
            
          </select>
    </div>
  )
}

export default OrderFilter