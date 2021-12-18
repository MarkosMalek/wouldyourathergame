import { GETUSERS } from "../Types";
import { _getUsers } from "../../_DATA";
export const getUsers = () => (dispatch) => {
  return _getUsers().then((users) => {
    dispatch({
      type: GETUSERS,
      payload: users,
    });
  });
};
