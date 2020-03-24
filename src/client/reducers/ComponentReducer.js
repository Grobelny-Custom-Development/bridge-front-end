import {
  SET_COMPONENTS,
  SET_PARTICIPANTS,
} from '../actionTypes/ComponentActionType.js';

const initialState = {
  components: null,
  participants: null,
};

// TODO: potentially rename this reducer for simplicity
export default function componentReducer(state = initialState, action) {
  const { type, payload, value } = action;
  switch (type) {
    case SET_COMPONENTS:
      return {
        ...state,
        components: action.components,
      };
    case SET_PARTICIPANTS: 
    return {
      ...state,
      participants: action.participants,
    };

    default:
      return state;
  }
}
