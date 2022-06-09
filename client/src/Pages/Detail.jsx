import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import './detail.css'

function Detail() {
    const navigate = useNavigate()
    const [game, setgame] = useState(null)
    const dispatch = useDispatch()
    const { id } = useParams()
    const { loading } = useSelector(state => state)
    
    useEffect(() => {
        dispatch({ type: 'SHOW_LOADER' })
        axios.get(`http://localhost:3001/videogame/${id}`)
            .then(detail => {
                setgame(detail.data)
                dispatch({ type: 'HIDE_LOADER' })
            })
    }, [])
    
    return (
        <div className='detail-container'>
            {loading && <Loader/>}
            {game &&
                <>
                <button onClick={() => navigate('/home')} className='btn-detail'>Home</button>
                    <div className='detail'>
                        <h1>{game.name}</h1>
                        <img src={game.image} alt="" width={300} height={300} />
                        <p className='descripcion'> <span className='detail-span'>Descripcion: </span>  {game.description.replace(/(<([^>]+)>)/ig, '')}</p>
                        <p> <span className='detail-span'>Generos: </span>  {game.genres.map(e => ` ${e}` )}</p>                        
                        <p> <span className='detail-span'>Fecha de Lanzamiento: </span>  {game.released}</p>
                        <p> <span className='detail-span'>Rating: </span>  {game.rating}</p>
                        <p> <span className='detail-span'>Plataformas: </span>  {game.platforms.map(e => ` ${e}` )}</p>


                    </div>
                </>
            }
        </div>
    )
}

export default Detail