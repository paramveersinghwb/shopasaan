import { LOGIN_TEXTFIELDS_CHANGE_ACTION } from "./types";

export const logInTextfieldsChangeAction = text => {
  return {
    type: LOGIN_TEXTFIELDS_CHANGE_ACTION,
    payload: text
  };
};
