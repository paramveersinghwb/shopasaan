import { combineReducers } from "redux";
import userReducer from "./userReducer";
import SignUpReducer from "./SignUpReducer";
import LoginReducer from "./LoginReducer";
import HomeReducer from "./HomeReducer";
import authReducer from "./authReducer";

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  userReducer,
  SignUpReducer,
  LoginReducer,
  HomeReducer
});

export default rootReducer;
