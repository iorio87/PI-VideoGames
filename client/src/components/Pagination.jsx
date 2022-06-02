import React from 'react'

function Pagination({ gamesPerPage, games, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(games / gamesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number => {
                    return <li key={number}>
                                 <a onClick={() => paginado(number)}>{number}</a>
                            </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination