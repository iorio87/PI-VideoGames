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
            
            <form className=""
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

            <NavLink to={'/agregar'} className='agregar' >Agregar Juego</NavLink>

        </div>

    )
}

export default Header