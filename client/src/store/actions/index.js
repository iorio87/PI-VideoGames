import axios from "axios"
export const GET_GAMES = 'GET_GAMES'
export const SEARCH_GAMES = 'SEARCH_GAMES'
export const GET_GENRES = 'GET_GENRES'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const FILTER_SOURCE = 'FILTER_SOURCE'
export const ORDER = 'ORDER'
export const ADD_GAME = 'ADD_GAME'

export function getGames() {
  return function (dispatch) {
    dispatch({ type: SHOW_LOADER })
    axios.get(`http://localhost:3001/videogames`)
      .then(games => {
        dispatch({ type: GET_GAMES, payload: games })
        dispatch({ type: HIDE_LOADER })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function searchGames(name) {
  return function (dispatch) {
    dispatch({ type: SHOW_LOADER })
    axios.get(`http://localhost:3001/videogames?name=${name}`)
      .then(games => {
        dispatch({ type: SEARCH_GAMES, payload: games })
        dispatch({ type: HIDE_LOADER })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function getGenres() {
  return function (dispatch) {
    axios.get(`http://localhost:3001/genres`)
      .then(genres => {
        dispatch({ type: GET_GENRES, payload: genres })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function FilterByGenre(genre) {
  return {
    type: FILTER_BY_GENRE,
    payload: genre
  }
}

export function FilterSource(source) {
  return{
    type: FILTER_SOURCE,
    payload: source
  }
}

export function Order(order) {
  return {
    type: ORDER,
    payload: order
  }

}

export function AddGame (game){
  return function (dispatch) {    
    axios.post('http://localhost:3001/videogame', game)
      .then(response => {          
          return response
      })
      .catch(err => {
        console.log(err)
      })
  }
}


