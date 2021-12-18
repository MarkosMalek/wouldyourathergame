import { GETQUESTIONS } from "../Types";
export default function questions(state = {}, action) {
  switch (action.type) {
    case GETQUESTIONS:
      return {
        state: action.payload,
      };
    default:
      return state;
  }
}
