import axios from 'axios'
import { GET_ARTICLE, ADD_ARTICLE, UPDATE_ARTICLE, LOADING_ARTICLE, GET_ARTICLES } from './types'

export const getArticle = (id) => dispatch => {
  dispatch(setLoadingArticle());
  axios.get(`/api/articles/${id}`).then(res => dispatch({
    type: GET_ARTICLE,
    payload: res.data
  }))
}

export const getArticles = () => dispatch => {
  dispatch(setLoadingArticle());
  axios.get('/api/articles').then(res => dispatch({
    type: GET_ARTICLES,
    payload: res.data
  }))
}

export const addArticle = (article) => dispatch => {
  axios.post('/api/articles', article)
}

export const setLoadingArticle = () => {
  return {
    type: LOADING_ARTICLE
  }
}

export const updateArticle = (id, newContent) => dispatch => {
  axios.put(`/api/articles/${id}`, {
    content: newContent
  })
}

