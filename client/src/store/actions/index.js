import axios from "axios"
export const GET_GAMES = 'GET_GAMES'

export function getGames() {
  return function (dispatch)  {
    axios.get(`http://localhost:3001/videogames`)
      .then( games => {
        dispatch({ type: GET_GAMES, payload: games })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

