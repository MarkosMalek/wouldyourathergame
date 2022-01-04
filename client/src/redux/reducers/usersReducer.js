import { GETUSERS, SAVEANSWERTOUSERS, ADDNEWQUESTIONSTOUSERS } from "../Types";
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
    case ADDNEWQUESTIONSTOUSERS:
      console.log(action.payload);
      return {
        ...state,
        [action.payload.author]: {
          ...state[action.payload.author],
          questions: state[action.payload.author].questions.concat([
            action.payload.id,
          ]),
        },
      };
    default:
      return state;
  }
}
