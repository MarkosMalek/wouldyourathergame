import { GETUSERS, SAVEANSWERTOUSER } from "../Types";
import { _getUsers, _saveQuestionAnswer } from "../../_DATA";
export const getUsers = () => (dispatch) => {
  return _getUsers().then((users) => {
    dispatch({
      type: GETUSERS,
      payload: users,
    });
  });
};
export const saveAnswerToUser = (authedUser, qid, answer) => (dispatch) => {
  _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
    dispatch({
      type: SAVEANSWERTOUSER,
      payload: {
        authedUser,
        qid,
        answer,
      },
    });
  });
};
