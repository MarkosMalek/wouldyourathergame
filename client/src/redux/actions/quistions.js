import { GETQUESTIONS } from "../Types";
import { _getQuestions } from "../../_DATA";
export const getQuestions = () => (dispatch) => {
  _getQuestions().then((Questions) => {
    dispatch({
      type: GETQUESTIONS,
      payload: Questions,
    });
  });
};
