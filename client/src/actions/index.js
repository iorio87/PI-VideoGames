

const cargarJuegos = async() =>{
    const response = await fetch(`https://api.rawg.io/api/games?key=fe468bbaf1df47e49f303405a20941cf`)
    const juegos = await response.json()
    console.log(juegos.results);
    return juegos.results
    
}

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`https://api.rawg.io/api/games?key=fe468bbaf1df47e49f303405a20941cf`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }