import axios from 'axios'
import { GET_ARTICLE, ADD_ARTICLE, LOADING_ARTICLE } from './types'

export const getArticle = (id) => dispatch => {
  dispatch(setLoadingArticle());
  axios.get(`/api/articles/${id}`).then(res => dispatch({
    type: GET_ARTICLE,
    payload: res.data
  }))
}

export const setLoadingArticle = () => {
  return {
    type: LOADING_ARTICLE
  }
}
