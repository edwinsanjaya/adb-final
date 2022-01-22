import axios from 'axios'
import { GET_ACTORS, ADD_ACTOR, DELETE_ACTOR, LOADING_ACTOR, UPDATE_ACTOR, TOGGLE_MODAL } from "./types";

export const getActors = () => dispatch => {
  // return {
  //   type: GET_ACTORS
  // };
  dispatch(setLoadingActor());
  axios
    .get('/api/actors')
    .then(res =>
      dispatch({
        type: GET_ACTORS,
        payload: res.data
      })
    )
}

export const addActor = (actor) => dispatch => {
  // return {
  //   type: ADD_ACTOR,
  //   payload: name
  // };
  axios
    .post('/api/actors', actor)
    .then(res =>
      dispatch({
        type: ADD_ACTOR,
        payload: res.data.actor //return API response
      })
    )
}

export const deleteActor = (id) => dispatch => {
  // return {
  //   type: DELETE_ACTOR,
  //   payload: name
  // };
  axios
    .delete(`/api/actors/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ACTOR,
        payload: id
      })
    )
}

export const setLoadingActor = () => {
  return {
    type: LOADING_ACTOR
  };
}

export const updateActor = (actor) => dispatch => {
  axios
    .put(`/api/actors/${actor.actorId}`, {
      firstName: actor.firstName,
      lastName: actor.lastName
    }).then(res => dispatch({
      type: UPDATE_ACTOR,
      payload: res.data.actor
    }))
}

export const toggleModal = (action) => dispatch => {
  dispatch({
    type: TOGGLE_MODAL,
    actorId: action.actorId,
    firstName: action.firstName,
    lastName: action.lastName
  })
}