import { GETUSERS } from "../Types";
export default function users(state = {}, action) {
  switch (action.type) {
    case GETUSERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
