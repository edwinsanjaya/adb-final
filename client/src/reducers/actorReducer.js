import { GET_ACTORS, ADD_ACTOR, DELETE_ACTOR, LOADING_ACTOR } from "../actions/types"

const initialState = {
  actors: [],
  loading: false
};

//test
export default function foo(state = initialState, action) {
  switch (action.type) {
    case GET_ACTORS:
      return {
        ...state,
        actors: action.payload,
        //reset LOADING_ACTOR
        loading: false,
      };
    case ADD_ACTOR:
      return{
        ...state,
        actors: [action.payload, ...state.actors]
      };
    case DELETE_ACTOR:
      return {
        ...state,
        actors: state.actors.filter(actor => actor.actor_id !== action.payload)
      };
    case LOADING_ACTOR:
      return {
        ...state,
        loading: true
      }
    default:
      return {
        ...state
      }
  }
} 
