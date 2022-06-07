import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../store/actions'
import './agregar.css'

function Agregar() {
    const { genres } = useSelector(state => state)
    const [generos, setGeneros] = useState([])
    const [plataformas, setplataformas] = useState([])
    let dispatch = useDispatch()


    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const selectedGenre = (e) => {
        const opcion = e.target.value
        if(!generos.includes(opcion)) setGeneros([...generos, opcion])
    }

    const selectedplatform = (e) => {
        const opcion = e.target.value
        if(!plataformas.includes(opcion)) setplataformas([...plataformas, opcion])
    }
    
    return (
        <div className='agregar-container'>

            <form action="" className='agregar-form'>
                <h1>DATOS DEL JUEGO:</h1>
                <div className='agregar-div'>
                    <label htmlFor="nombre" className='agregar-label'>Nombre: </label>
                    <input type="text" id='nombre' className='agregar-input' />
                </div>

                <div className='agregar-div'>
                    <label htmlFor="rating" className='agregar-label'>Rating: </label>
                    <input type="text" id="rating" className='agregar-input' />
                </div>

                <div className='agregar-div'>
                    <label htmlFor="fecha" className='agregar-label'>Fecha de Lanzamiento: </label>
                    <input type="text" id="fecha" className='agregar-input' />
                </div>

                <div className='agregar-div'>
                    <label htmlFor="img" className='agregar-label'>Imagen: </label>
                    <input type="file" id="img" />
                </div>

                <div className='agregar-div'>
                    <label htmlFor="descripcion" className='agregar-label'>Descripcion: </label>
                    <textarea id="descripcion" cols="30" rows="3" className='agregar-input'></textarea>
                </div>

                <div className='agregar-div'>
                    <label htmlFor="generos" className='agregar-label'>Generos:</label>
                    <select name="generos" onChange={e => selectedGenre(e)}>
                        <option value="-">Seleccionar</option>
                        {/* Me traigo los generos del back y los inyecto */}
                        {genres.map(genre => {
                            return <option value={genre.name} key={genre.id}>{genre.name}</option>
                        })}
                    </select>
                </div>

                <div className="agregar-div">
                    {generos && generos.map(e => <p className='agregar-list'>{e}</p>)}
                </div>

                <div className='agregar-div'>
                    <label htmlFor="plataformas" className='agregar-label'>Plataformas:</label>
                    <select name="plataformas" onChange={e => selectedplatform(e)}>
                        <option value="-">Seleccionar</option>
                        <option value="Playstation 3">Playstation 3</option>
                        <option value="Playstation 4">Playstation 4</option>
                        <option value="Playstation 5">Playstation 5</option>
                        <option value="X box 360">X box 360</option>
                        <option value="X box One">X box One</option>
                        <option value="X box Series S">X box Series S</option>
                        <option value="Nintendo Switch">Nintendo Switch</option>
                        <option value="PC">PC</option>
                    </select>
                </div>

                <div className="agregar-div">
                    {plataformas && plataformas.map(e => <p className='agregar-list'>{e}</p>)}
                </div>

                <button className='agregar-btn'>AGREGAR</button>
            </form>
        </div>
    )
}

export default Agregar