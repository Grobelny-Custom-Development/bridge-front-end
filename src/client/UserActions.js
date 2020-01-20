import {
  SET_TOKEN,
} from './UserActionType.js';


export function setToken(token) {
  console.log(token);
  return {
    type: SET_TOKEN,
    value: token,
  };
}
