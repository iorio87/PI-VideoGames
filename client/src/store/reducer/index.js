import { GET_GAMES } from "../actions";

const initialState = {
    games: [],   
  };

  export function reducer (state = initialState, action){
      if (action.type === GET_GAMES){
          return {
            ...state,
            games: action.payload.data
          }
      }
      return state
  }