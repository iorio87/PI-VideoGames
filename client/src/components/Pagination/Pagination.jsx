import React from "react";
import "./pagination.css";

function Pagination({ gamesPerPage, games, paginado, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(games / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.length > 1 &&
          pageNumbers.map((number) => {
            return (
              <li key={number} className={`btn-page`}>
                <a
                  onClick={() => paginado(number)}
                  href="#/"
                  className={`page-link font ${currentPage === number? "btn-current" : ""}`}
                >
                  {number}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default Pagination;
