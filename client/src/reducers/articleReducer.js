import {
  GET_ARTICLE,
  ADD_ARTICLE,
  LOADING_ARTICLE
} from '../actions/types'

const initialState = {
  content: 'Nothing',
  article: {},
  loading: false
}

export default function (state = initialState, action){
  switch(action.type){
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
        loading: false
      }
    case ADD_ARTICLE:
    case LOADING_ARTICLE:
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