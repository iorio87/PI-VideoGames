import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../store/actions'
import './agregar.css'

export function validate(input) {
    let errors = {};
    if (input.name === '') {
        errors.name = 'Nombre requerido';
    }

    if (!input.rating) {
        errors.rating = 'Rating requerido!'
    } else if (input.rating < 1 || input.rating > 5) {
        errors.rating = 'Rating debe ser un valor entre 1 y 5!'
    }

    if (!input.released) {
        errors.released = 'Fecha de lanzamiento requerida!'
    }

    if (!input.description) {
        errors.description = 'Descripcion requerida!'
    }

    if (!input.genres.length) {
        errors.genres = 'Debe seleccionar al menos 1 genero!'
    }

    if (!input.platforms.length) {
        errors.platforms = 'Debe seleccionar al menos 1 plataforma!'
    }

    return errors;
};

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
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getGenres())
    }, [])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }
    const selectedGenre = (e) => {
        const opcion = e.target.value
        if (!input.genres.includes(opcion)) setInput({ ...input, genres: [...input.genres, opcion] })
    }

    const selectedplatform = (e) => {
        const opcion = e.target.value
        if (!input.platforms.includes(opcion)) setInput({ ...input, platforms: [...input.platforms, opcion] })
    }

    const handleDelete = (el) => {
        setInput({
            ...input,
            genres: input.genres.filter(e => e !== el),
            platforms: input.platforms.filter(e => e !== el)
        })


    }

    return (
        <div className='agregar-container'>

            <form action="" className='agregar-form'>
                <h1 className='agregar-h1'>DATOS DEL JUEGO:</h1>
                <div className='agregar-div'>
                    <label htmlFor="nombre" className='agregar-label'>Nombre: </label>
                    <input type="text" id='nombre' name='name' className='agregar-input' value={input.name} onChange={handleChange} />
                    {errors.name && (
                        <p className="danger">{errors.name}</p>
                    )}
                </div>

                <div className='agregar-div'>
                    <label htmlFor="rating" className='agregar-label'>Rating: </label>
                    <input type="text" id="rating" name='rating' className='agregar-input' value={input.rating} onChange={handleChange} />
                    {errors.rating && (
                        <p className="danger">{errors.rating}</p>
                    )}
                </div>

                <div className='agregar-div'>
                    <label htmlFor="released" className='agregar-label'>Fecha de Lanzamiento: </label>
                    <input type="date" id="released" name='released' className='agregar-input' value={input.released} onChange={handleChange} />
                    {errors.released && (
                        <p className="danger">{errors.released}</p>
                    )}
                </div>

                <div className='agregar-div'>
                    <label htmlFor="image" className='agregar-label'>Imagen: </label>
                    <input type="file" id="image" name='image' value={input.image} onChange={handleChange} />
                </div>

                <div className='agregar-div agregar-descripcion'>
                    <label htmlFor="description" className='agregar-label'>Descripcion: </label>
                    <textarea id="description" name='description' cols="30" rows="3" className='agregar-input' value={input.description} onChange={handleChange}></textarea>
                    {errors.description && (
                        <p className="danger">{errors.description}</p>
                    )}
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
                    {errors.genres && (
                        <p className="danger">{errors.genres}</p>
                    )}
                </div>

                {input.genres.length ?
                    <div>
                        <span className='agregar-span'>Seleccionados:</span>  {input.genres.map(e => {
                            return (<>
                                <p className='agregar-list' key={e}>{e}</p>
                                <button onClick={() => handleDelete(e)} className='btn-del' >X</button>
                            </>)
                        }
                        )}
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
                    {errors.platforms && (
                        <p className="danger">{errors.platforms}</p>
                    )}
                </div>

                {input.platforms.length ?
                    <div>
                        <span className='agregar-span'>Seleccionadas:</span> {input.platforms.map(e => {
                            return (
                                <>
                                    <p className='agregar-list' key={e}>{e} </p>
                                    <button onClick={() => handleDelete(e)} className='btn-del'>X</button>
                                </>
                            )
                        }
                        )}
                    </div> : null
                }

                <button className='agregar-btn' type='submit'>AGREGAR</button>
            </form>
        </div>
    )
}

export default Agregar