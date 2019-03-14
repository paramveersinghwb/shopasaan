import { OTP_TEXTFIELDS_CHANGE_ACTION } from "../actions/types";

const initialState = {
  otp: ""
};

const SignUpReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case OTP_TEXTFIELDS_CHANGE_ACTION:
      return { ...state, [action.payload.key]: action.payload.value };
    default: {
      return state;
    }
  }
};

export default SignUpReducer;
