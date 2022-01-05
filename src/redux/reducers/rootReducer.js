import { combineReducers } from "redux";
import authenticate from "./authReducer";
import users from "./usersReducer";
import questions from "./questionsReducer";
import shared from "./sharedReducer";

export default combineReducers({
  authenticate,
  users,
  questions,
  shared,
});
