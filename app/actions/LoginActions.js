import { LOGIN_TEXTFIELDS_CHANGE_ACTION,LOGIN,TOKEN } from "./types";

export const logInTextfieldsChangeAction = text => {
  return {
    type: LOGIN_TEXTFIELDS_CHANGE_ACTION,
    payload: text
  };
};


export const getToken = (userName,password,getData) => {
  return {
    type: TOKEN,
    payload: Data.respose
  };
};

export const loginApi = text => {
  return {
    type: LOGIN,
    payload: Data.respose
  };
};
