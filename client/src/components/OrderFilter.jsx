import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, FilterByGenre, FilterSource, Order } from '../store/actions/index'
import './orderfilter.css'
import './buttons.css'

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
        <label className='font' htmlFor="ordenar">ORDENAR:</label>
        <select className='font' name="ordenar" onChange={e => HandleOrder(e)}>
          <option className='font' value="">Selecciona</option>
          <option className='font' value="az">A-Z</option>
          <option className='font' value="za">Z-A</option>

        </select>
      </div>

      <div className='filter'>
        <label className='font' htmlFor="genero font">GENERO:</label>
        <select className='font' name="genero" onChange={e => HandleFIlterByGenre(e)}>
          <option className='font' value="todos">Todos</option>
          {/* Me traigo los generos del back y los inyecto */}
          {genres.map(genre => {
            return <option className='font' value={genre.name} key={genre.id}>{genre.name}</option>
          })}

        </select>
      </div>

      <div className='filter'>
        <label className='font' htmlFor="rating">RATING:</label>
        <select className='font' name="rating" onChange={e => HandleOrder(e)}>
          <option className='font' value="">Selecciona</option>
          <option className='font' value="ascendente">Menor a Mayor</option>
          <option className='font' value="descendente">Mayor a Menor</option>

        </select>
      </div>

      <div className='filter'>
        <label className='font' htmlFor="fuente">FUENTE:</label>
        <select className='font' name="fuente" onChange={e => HandleFilterSource(e)}>
          <option className='font' value="todos">Todos</option>
          <option className='font' value="api">API</option>
          <option className='font' value="agregado">Agregados</option>

        </select>
      </div>
    </div>
  )
}

export default OrderFilter