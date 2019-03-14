import { OTP_TEXTFIELDS_CHANGE_ACTION } from "./types";

export const otpTextfieldsChangeAction = text => {
  return {
    type: OTP_TEXTFIELDS_CHANGE_ACTION,
    payload: text
  };
};
