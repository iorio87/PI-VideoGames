import { GET_GAMES, GET_GENRES, SEARCH_GAMES, SHOW_LOADER, HIDE_LOADER } from "../actions";

const initialState = {
  games: [],
  genres: [],
  loading: false
};

export function reducer(state = initialState, action) {
  if (action.type === GET_GAMES) {
    return {
      ...state,
      games: action.payload.data
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

  return state
}