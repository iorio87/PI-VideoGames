import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../store/actions'
import './agregar.css'

function Agregar() {
    const { genres } = useSelector(state => state)
    const [input, setInput] = useState({
        name: '',
        rating: '',
        released: '',
        image: '',
        description: '',
        genres: [],
        platforms: []
    })
    let dispatch = useDispatch()


    useEffect(() => {
        dispatch(getGenres())
    }, [])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const selectedGenre = (e) => {
        const opcion = e.target.value
        if (!input.genres.includes(opcion)) setInput({ ...input, genres: [...input.genres, opcion] })
    }

    const selectedplatform = (e) => {
        const opcion = e.target.value
        if (!input.platforms.includes(opcion)) setInput({ ...input, platforms: [...input.platforms, opcion] })
    }

    return (
        <div className='agregar-container'>

            <form action="" className='agregar-form'>
                <h1 className='agregar-h1'>DATOS DEL JUEGO:</h1>
                <div className='agregar-div'>
                    <label htmlFor="nombre" className='agregar-label'>Nombre: </label>
                    <input type="text" id='nombre' name='name' className='agregar-input' value={input.name} onChange={handleChange} />
                </div>

                <div className='agregar-div'>
                    <label htmlFor="rating" className='agregar-label'>Rating: </label>
                    <input type="text" id="rating" name='rating' className='agregar-input' value={input.rating} onChange={handleChange} />
                </div>

                <div className='agregar-div'>
                    <label htmlFor="released" className='agregar-label'>Fecha de Lanzamiento: </label>
                    <input type="date" id="released" name='released' className='agregar-input' value={input.released} onChange={handleChange} />
                </div>

                <div className='agregar-div'>
                    <label htmlFor="image" className='agregar-label'>Imagen: </label>
                    <input type="file" id="image" name='image' value={input.image} onChange={handleChange} />
                </div>

                <div className='agregar-div agregar-descripcion'>
                    <label htmlFor="description" className='agregar-label'>Descripcion: </label>
                    <textarea id="description" name='description' cols="30" rows="3" className='agregar-input' value={input.description} onChange={handleChange}></textarea>
                </div>

                <div className='agregar-div'>
                    <label htmlFor="genres" className='agregar-label'>Generos:</label>
                    <select name="genres" onChange={e => selectedGenre(e)}>
                        <option value="-">Seleccionar</option>
                        {/* Me traigo los generos del back y los inyecto */}
                        {genres.map(genre => {
                            return <option value={genre.name} key={genre.id}>{genre.name}</option>
                        })}
                    </select>
                </div>

                {input.genres.length ?
                    <div>
                        <span className='agregar-span'>Seleccionados:</span>  {input.genres.map(e => <p className='agregar-list' key={e}>{e}</p>)}
                    </div> : null
                }


                <div className='agregar-div'>
                    <label htmlFor="platforms" className='agregar-label'>Plataformas:</label>
                    <select name="platforms" onChange={e => selectedplatform(e)}>
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

                {input.platforms.length?
                    <div>
                        <span className='agregar-span'>Seleccionadas:</span> {input.platforms.map(e => <p className='agregar-list' key={e}>{e} </p>)}
                    </div>: null
                }

                <button className='agregar-btn' type='submit'>AGREGAR</button>
            </form>
        </div>
    )
}

export default Agregar