import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { searchGames } from '../store/actions'


function Header() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    return (
        <div>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/detalles'}>Detalles</NavLink>
            <form className=""
                onSubmit={(e) => {
                    e.preventDefault();   
                    dispatch(searchGames(search))                 
                    setSearch('')
                }}>
                <input
                    className=""
                    type="text"
                    placeholder="Buscar juego..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <input className="" type="submit" value="Buscar" />
            </form>

        </div>

    )
}

export default Header