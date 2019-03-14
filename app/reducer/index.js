import { combineReducers } from "redux";
import userReducer from "./userReducer";
import SignUpReducer from "./SignUpReducer";
import LoginReducer from "./LoginReducer";
import HomeReducer from "./HomeReducer";

// Root Reducer
const rootReducer = combineReducers({
  userReducer,
  SignUpReducer,
  LoginReducer,
  HomeReducer
});

export default rootReducer;
