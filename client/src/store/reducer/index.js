import { GET_GAMES, GET_GENRES, SEARCH_GAMES, SHOW_LOADER, HIDE_LOADER, ORDER, FILTER_BY_GENRE, FILTER_SOURCE, ADD_GAME } from "../actions";

const initialState = {
  games: [],
  tofiltergames: [],
  genres: [],
  loading: false
};

export function reducer(state = initialState, action) {
  if (action.type === GET_GAMES) {
    return {
      ...state,
      games: action.payload.data,
      tofiltergames: action.payload.data
    }
  }

  if (action.type === SEARCH_GAMES) {   

    return {
      ...state,
      games: action.payload.data
    }


  }

  if (action.type === GET_GENRES) {
    return {
      ...state,
      genres: action.payload.data
    }
  }

  if (action.type === SHOW_LOADER) {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === HIDE_LOADER) {
    return {
      ...state,
      loading: false
    }
  }

  if (action.type === FILTER_BY_GENRE) {
    const games = state.tofiltergames

    const filter = games.filter(e => {
      return e.genres.some(g => g === action.payload)
    })

    return {
      ...state,
      games: action.payload === 'todos' ? state.tofiltergames : filter
    }
  }

  if (action.type === FILTER_SOURCE) {
    const games = state.tofiltergames
    const gameSource = action.payload === 'agregado' ? games.filter(e => e.created) : games.filter(e => !e.created)

    return {
      ...state,
      games: action.payload === 'todos' ? state.tofiltergames : gameSource
    }
  }

  if (action.type === ORDER) {

    if (action.payload === 'az') {
      state.games.sort((a, b) => {
        return a.name < b.name ? -1 : 1
      })
    }
    if (action.payload === 'za') {
      state.games.sort((a, b) => {
        return a.name < b.name ? 1 : -1
      })
    }

    if (action.payload === 'ascendente') {
      state.games.sort((a, b) => {
        return a.rating < b.rating ? -1 : 1
      })
    }
    if (action.payload === 'descendente') {
      state.games.sort((a, b) => {
        return a.rating < b.rating ? 1 : -1
      })
    }

    return {
      ...state,
      games: state.games
    }
  }

  if (action.type === ADD_GAME) {
    return {
      ...state,
    }
  }

  return state
}