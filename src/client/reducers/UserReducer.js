import {
  SET_TOKEN,
} from '../UserActionType.js';

const initialState = {
  token: null,
};

export default function userReducer(state = initialState, action) {
  const { type, payload, value } = action;
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: value,
      };
    default:
      return state;
  }
}
