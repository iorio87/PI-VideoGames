import React from 'react'
import { useNavigate } from 'react-router-dom';
import './inicial.css';

function Inicial() {
    const navigate = useNavigate()
    return (

        <div className='img'>
            <button onClick={()=> {navigate('/home')}} className='btn-inicio'>INGRESAR</button>
            <p className='fuente'>VIDEO GAMES APP</p>

        </div>
    )
}

export default Inicial