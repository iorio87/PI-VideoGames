import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { searchGames } from '../store/actions'
import './header.css'


function Header() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    return (
        <div className='header-container'>
            <NavLink to={'/agregar'} className='agregar' >Agregar Juego</NavLink>

            <h1 className='header-titulo'>
                <span className='header-letra'>G</span>
                A
                <span className='header-letra'>M</span>
                E
                <span className='header-letra'>S </span>

                A
                <span className='header-letra'>P</span>
                P
            </h1>

            <form className="buscar-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(searchGames(search))
                    setSearch('')
                }}>
                <input
                    className="buscar"
                    type="text"
                    placeholder="Buscar juego..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <input className="btn-buscar" type="submit" value="Buscar" />
            </form>

        </div>

    )
}

export default Header