import axios from 'axios';
import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const returnErrors = (info, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: {info, status, id}
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}