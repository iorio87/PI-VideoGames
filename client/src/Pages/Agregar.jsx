import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AddGame, getGames, getGenres } from '../store/actions'
import { toast } from 'react-toastify';
import './agregar.css'
import '../components/buttons.css'

var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragmen

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

    if(!urlPattern.test(input.image)){
        errors.image = 'Debe ingresar una URL valida!'
    }

    return errors;
};

function Agregar() {
    const navigate = useNavigate()
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
    }, [dispatch])

    
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
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    const selectedplatform = (e) => {
        const opcion = e.target.value
        if (!input.platforms.includes(opcion)) setInput({ ...input, platforms: [...input.platforms, opcion] })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    const handleDeleteGenre = (el) => {
        setInput({
            ...input,
            genres: input.genres.filter(e => e !== el)            
        })              
     
        if (input.genres.length < 2)  setErrors({...errors, genres: 'Debe seleccionar al menos 1 genero!'})    
    }

    const handleDeletePlatform = (el) => {
        setInput({
            ...input,            
            platforms: input.platforms.filter(e => e !== el)
        })
        if (input.platforms.length < 2)  setErrors({...errors, platforms: 'Debe seleccionar al menos 1 plataforma!'})    
    }
    

    const handleSubmit = (e) => { 
        e.preventDefault()
        if(input.name !== '' ) {

            dispatch(AddGame(input))
            dispatch(getGames())            
            toast.success('Juego agregado con exito!')
            navigate('/home')
        }  else{
            toast.error('No puede enviar el formulario vacio!')            
        }

    }

    return (
        <div className='agregar-container'>            

            <form onSubmit={e => handleSubmit(e)} className='agregar-form'>
                <h1 className='agregar-h1 font'>DATOS DEL JUEGO:</h1>
                
                <div className='agregar-div'>
                    <label htmlFor="nombre" className='agregar-label font'>Nombre: </label>
                    <input type="text" id='nombre' name='name' className='agregar-input font' value={input.name} onChange={handleChange} />
                    {errors.name && (
                        <p className="danger">{errors.name}</p>
                    )}
                </div>

                <div className='agregar-div'>
                    <label htmlFor="rating" className='agregar-label font'>Rating: </label>
                    <input type="number" id="rating" name='rating' className='agregar-input font' value={input.rating} onChange={handleChange} />
                    {errors.rating && (
                        <p className="danger">{errors.rating}</p>
                    )}
                </div>

                <div className='agregar-div'>
                    <label htmlFor="released" className='agregar-label font'>Fecha de Lanzamiento: </label>
                    <input type="date" id="released" name='released' className='agregar-input font' value={input.released} onChange={handleChange} />
                    {errors.released && (
                        <p className="danger">{errors.released}</p>
                    )}
                </div>

                <div className='agregar-div'>
                    <label htmlFor="image" className='agregar-label font'>Imagen: </label>
                    <input type="text" id="image" name='image' className='agregar-input font' value={input.image} onChange={handleChange} />
                    {errors.image && (
                        <p className="danger">{errors.image}</p>
                    )}
                </div>

                <div className='agregar-div agregar-descripcion'>
                    <label htmlFor="description" className='agregar-label font'>Descripcion: </label>
                    <textarea id="description" name='description' cols="30" rows="3" className='agregar-input font' value={input.description} onChange={handleChange}></textarea>
                    {errors.description && (
                        <p className="danger">{errors.description}</p>
                    )}
                </div>

                <div className='agregar-div'>
                    <label htmlFor="genres" className='agregar-label font'>Generos:</label>
                    <select className='font' name="genres" id='genres' onChange={e => selectedGenre(e)}>
                        <option selected disabled className='font'>Seleccionar</option>
                        {/* Me traigo los generos del back y los inyecto */}
                        {genres.map(genre => {
                            return <option className='font' value={genre.name} key={genre.id}>{genre.name}</option>
                        })}
                    </select>
                    {errors.genres && (
                        <p className="danger">{errors.genres}</p>
                    )}
                </div>
                        
                {input.genres.length ?
                    <div>
                        <span className='agregar-span'>Seleccionados:</span>  {input.genres.map(e => {
                            return (<Fragment key={e}>
                                <p className='agregar-list'>{e}</p>
                                <button onClick={() => handleDeleteGenre(e)} className='btn-del' >X</button>
                            </Fragment>)
                        }
                        )}
                    </div> : null
                }


                <div className='agregar-div'>
                    <label htmlFor="platforms" className='agregar-label font'>Plataformas:</label>
                    <select className='font' name="platforms" id='platforms' onChange={e => selectedplatform(e)}>
                        <option selected disabled className='font'>Seleccionar</option>
                        <option className='font' value="Playstation 3">Playstation 3</option>
                        <option className='font' value="Playstation 4">Playstation 4</option>
                        <option className='font' value="Playstation 5">Playstation 5</option>
                        <option className='font' value="X box 360">X box 360</option>
                        <option className='font' value="X box One">X box One</option>
                        <option className='font' value="X box Series S">X box Series S</option>
                        <option className='font' value="Nintendo Switch">Nintendo Switch</option>
                        <option className='font' value="PC">PC</option>
                    </select>
                    {errors.platforms && (
                        <p className="danger">{errors.platforms}</p>
                    )}
                </div>

                {input.platforms.length ?
                    <div>
                        <span className='agregar-span'>Seleccionadas:</span> {input.platforms.map(e => {
                            return (
                                <Fragment key={e}>
                                    <p className='agregar-list'>{e} </p>
                                    <button onClick={() => handleDeletePlatform(e)} className='btn-del'>X</button>
                                </Fragment>
                            )
                        }
                        )}
                    </div> : null
                }

                <button className='eightbit-btn font btn-position' type='submit' disabled={Object.keys(errors).length !== 0}>AGREGAR</button>
            </form>
        </div>
    )
}

export default Agregar