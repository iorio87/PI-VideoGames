import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, FilterByGenre, FilterSource, Order } from '../store/actions/index'
import './orderfilter.css'

function OrderFilter() {
  const { genres } = useSelector(state => state)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])


  const HandleOrder = (e) => {
    const opcion = e.target.value
    dispatch(Order(opcion))
  }

  const HandleFIlterByGenre = (e) => {
    const opcion = e.target.value
    dispatch(FilterByGenre(opcion))
  }

  const HandleFilterSource = (e) => {
    const opcion = e.target.value
    dispatch(FilterSource(opcion))

  }

  return (
    <div className='select'>
      <div className='filter'>
        <label htmlFor="ordenar">ORDENAR:</label>
        <select name="ordenar" onChange={e => HandleOrder(e)}>
          <option value="">Selecciona</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>

        </select>
      </div>

      <div className='filter'>
        <label htmlFor="genero">GENERO:</label>
        <select name="genero" onChange={e => HandleFIlterByGenre(e)}>
          <option value="todos">Todos</option>
          {/* Me traigo los generos del back y los inyecto */}
          {genres.map(genre => {
            return <option value={genre.name} key={genre.id}>{genre.name}</option>
          })}

        </select>
      </div>

      <div className='filter'>
        <label htmlFor="rating">RATING:</label>
        <select name="rating" onChange={e => HandleOrder(e)}>
          <option value="">Selecciona</option>
          <option value="ascendente">Menor a Mayor</option>
          <option value="descendente">Mayor a Menor</option>

        </select>
      </div>

      <div className='filter'>
        <label htmlFor="fuente">FUENTE:</label>
        <select name="fuente" onChange={e => HandleFilterSource(e)}>
          <option value="todos">Todos</option>
          <option value="api">API</option>
          <option value="agregado">Agregados</option>

        </select>
      </div>
    </div>
  )
}

export default OrderFilter