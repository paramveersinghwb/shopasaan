import { LOGIN_TEXTFIELDS_CHANGE_ACTION } from "../actions/types";

const initialState = {
  password: "",
  phoneNumber: "",
  loader: false
};

const LoginReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_TEXTFIELDS_CHANGE_ACTION:
      return { ...state, [action.payload.key]: action.payload.value };
    default: {
      return state;
    }
  }
};

export default LoginReducer;
