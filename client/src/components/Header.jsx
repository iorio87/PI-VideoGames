import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    const [search, setSearch] = useState('')
    return (
        <div>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/detalles'}>Detalles</NavLink>
            <form className="form-inline chico"
                onSubmit={(e) => {
                    e.preventDefault();                    
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