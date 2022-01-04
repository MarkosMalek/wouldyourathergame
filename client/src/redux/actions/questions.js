import {
  GETQUESTIONS,
  SAVEANSWERTOQUESTIONS,
  ADDNEWQUESTIONSTOQUESTIONS,
} from "../Types";
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../../_DATA";
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

export const addNewQuestionToQuestions = (question) => (dispatch) => {
  _saveQuestion(question).then((formatedquestion) => {
    dispatch({
      type: ADDNEWQUESTIONSTOQUESTIONS,
      payload: formatedquestion,
    });
  });
};
