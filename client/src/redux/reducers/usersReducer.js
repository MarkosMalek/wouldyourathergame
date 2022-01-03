import { GETUSERS, SAVEANSWERTOUSERS } from "../Types";
export default function users(state = {}, action) {
  switch (action.type) {
    case GETUSERS:
      return {
        ...state,
        ...action.payload,
      };
    case SAVEANSWERTOUSERS:
      return {
        ...state,
        [action.payload.authedUser]: {
          ...state[action.payload.authedUser],
          answers: {
            ...state[action.payload.authedUser].answers,
            [action.payload.qid]: action.payload.answer,
          },
        },
      };
    default:
      return state;
  }
}
