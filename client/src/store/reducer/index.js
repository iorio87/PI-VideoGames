import { GET_GAMES, GET_GENRES, SEARCH_GAMES, SHOW_LOADER, HIDE_LOADER, ORDER, FILTER_BY_GENRE, FILTER_SOURCE } from "../actions";

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
      games: filter
    }
  }

  if (action.type === FILTER_SOURCE) {
    const allgames = state.tofiltergames
    //const filtrados = allgames.filter(e => e.created)
    
    const gameSource = action.payload === 'agregado' ? allgames.filter(e => e.created) : allgames.filter(e => !e.created)
    
    return {
      ...state,
      games: action.payload === 'todos' ? state.tofiltergames : gameSource     
    }
  }

  if (action.type === ORDER) {
    return {
      ...state,
      games: action.payload
    }
  }

  return state
}