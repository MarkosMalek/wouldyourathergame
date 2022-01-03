import { GETQUESTIONS, SAVEANSWERTOQUESTIONS } from "../Types";
import { _getQuestions, _saveQuestionAnswer } from "../../_DATA";
export const getQuestions = () => (dispatch) => {
  _getQuestions().then((Questions) => {
    dispatch({
      type: GETQUESTIONS,
      payload: Questions,
    });
  });
};

export const saveNewAnswer = (authedUser, qid, answer) => (dispatch) => {
  _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
    dispatch({
      type: SAVEANSWERTOQUESTIONS,
      payload: {
        authedUser,
        qid,
        answer,
      },
    });
  });
};
