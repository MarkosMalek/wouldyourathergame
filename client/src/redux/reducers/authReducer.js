import { LOGIN, LOGOUT } from "../Types";
export default function authenticate(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return {
        state: action.payload,
      };
    case LOGOUT:
      return {
        state: action.payload,
      };
    default:
      return state;
  }
}
