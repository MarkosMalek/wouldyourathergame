import { ADDNEWQUESTION } from "../Types";
import { _saveQuestion } from "../../_DATA";

export const addNewQuestion = (question) => (dispatch, getState) => {
  const questions = getState().questions;
  const users = getState().users;
  _saveQuestion(question).then((formatedquestion) => {
    dispatch({
      type: ADDNEWQUESTION,
      payload: { formatedquestion, users, questions },
    });
  });
};
