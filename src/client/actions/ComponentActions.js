import {
  SET_COMPONENTS,
  SET_PARTICIPANTS,
} from '../actionTypes/ComponentActionType.js';


export function setComponents(components) {
  return {
    type: SET_COMPONENTS,
    components,
  };
}

export function setParticipants(participants) {
  return {
    type: SET_PARTICIPANTS,
    participants,
  };
}
