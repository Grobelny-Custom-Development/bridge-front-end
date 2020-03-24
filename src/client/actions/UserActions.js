import {
  SET_TOKEN,
} from '../actionTypes/UserActionType.js';


export function setToken(token) {
  return {
    type: SET_TOKEN,
    value: token,
  };
}
