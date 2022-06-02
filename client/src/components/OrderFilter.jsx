import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getGenres} from '../store/actions/index'



function OrderFilter() {
    const {genres, games} = useSelector(state => state)
    let dispatch = useDispatch()

    useEffect(() => {
      dispatch(getGenres())       
    }, [])


    const Alfabetico = (e) => {
      const opcion = e.target.value

      if(opcion === 'ascendente') {
        games.sort()
      }

      console.log(games);
    }
        
  return (
    <div>
        <label htmlFor="ordenar">ORDENAR</label>
          <select name="ordenar" onChange={Alfabetico}>
            <option value="">Selecciona</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>

          </select>

          <label htmlFor="genero">GENERO</label>
          <select name="genero" id="">
              <option value="">Selecciona</option>
            {/* Me traigo los generos del back y los inyecto */}
            {genres.map(genre =>{
                return <option value={genre.name} key={genre.id}>{genre.name}</option>
            })}

          </select>

          <label htmlFor="rating">RATING</label>
          <select name="rating" id="">
            <option value="">Selecciona</option>
            <option value="may">Mayor a Menor</option>
            <option value="men">Menor a Mayor</option>

          </select>
    </div>
  )
}

export default OrderFilter