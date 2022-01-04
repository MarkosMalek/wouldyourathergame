import { GETUSERS, SAVEANSWERTOUSERS, ADDNEWQUESTIONSTOUSERS } from "../Types";
import { _getUsers, _saveQuestionAnswer, _saveQuestion } from "../../_DATA";
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
      type: SAVEANSWERTOUSERS,
      payload: {
        authedUser,
        qid,
        answer,
      },
    });
  });
};

export const addNewQuestionToUsers = (question) => (dispatch) => {
  _saveQuestion(question).then((formatedquestion) => {
    dispatch({
      type: ADDNEWQUESTIONSTOUSERS,
      payload: formatedquestion,
    });
  });
};
