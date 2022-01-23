import { GET_ACTORS, ADD_ACTOR, DELETE_ACTOR, LOADING_ACTOR, UPDATE_ACTOR, TOGGLE_MODAL } from "../actions/types"

const initialState = {
  actors: [],
  loading: false,
  modal: {
    open: false,
    firstName: '',
    lastName: ''
  }
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
      return {
        ...state,
        actors: [action.payload, ...state.actors]
      };
    case DELETE_ACTOR:
      return {
        ...state,
        actors: state.actors.filter(actor => actor.actor_id !== action.payload)
      };
    case UPDATE_ACTOR:
      return {
        ...state,
        actors: [action.payload, ...state.actors.filter(actor => actor.actor_id !== action.payload.actor_id)]
      }
    case LOADING_ACTOR:
      return {
        ...state,
        loading: true
      }
    case TOGGLE_MODAL:
      console.log(state)
      return {
        ...state,
        modal: {
          open: !state.modal.open,
          firstName: action.firstName,
          lastName: action.lastName
        },
        actorId: action.actorId
      }
    default:
      return {
        ...state
      }
  }
} 
