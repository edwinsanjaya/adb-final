import {
  GET_ARTICLE,
  GET_ARTICLES,
  ADD_ARTICLE,
  LOADING_ARTICLE,
} from '../actions/types'

const initialState = {
  content: 'Nothing',
  article: {},
  articles: [],
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
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles,
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