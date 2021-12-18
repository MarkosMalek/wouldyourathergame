import { LOGIN, LOGOUT } from "../Types";

export const logIn = (user) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: user,
  });
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: null,
  });
};
