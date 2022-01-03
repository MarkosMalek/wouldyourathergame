import { GETQUESTIONS, SAVEANSWERTOQUESTIONS } from "../Types";
export default function questions(state = {}, action) {
  switch (action.type) {
    case GETQUESTIONS:
      return {
        ...state,
        ...action.payload,
      };
    case SAVEANSWERTOQUESTIONS:
      return {
        ...state,
        [action.payload.qid]: {
          ...state[action.payload.qid],
          [action.payload.answer]: {
            ...state[action.payload.qid][action.payload.answer],
            votes: state[action.payload.qid][
              action.payload.answer
            ].votes.concat([action.payload.authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
