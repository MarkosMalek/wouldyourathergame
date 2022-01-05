import { ADDNEWQUESTION } from "../Types";
export default function shared(state = {}, action) {
  switch (action.type) {
    case ADDNEWQUESTION:
      return {
        ...state,
        [action.payload.questions]: {
          ...action.payload.questions,
          [action.payload.formatedquestion.id]: action.payload.formatedquestion,
        },
        [action.payload.users]: {
          ...action.payload.users,
          [action.payload.formatedquestion.author]: {
            ...action.payload.users[action.payload.formatedquestion.author],
            questions: action.payload.users[
              action.payload.formatedquestion.author
            ].questions.concat([action.payload.formatedquestion.id]),
          },
        },
      };

    default:
      return state;
  }
}
