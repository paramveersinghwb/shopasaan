"use-strict";
//Base URL
export const API_BASE_URL = "http://shopasaan.com/rest/V1";

//Base Urls + Methods
export const REG_OTP = API_BASE_URL + "/user/regOtp";
export const CHECK_REG_OTP = API_BASE_URL + "/user/checkRegOtp";

export const API_LOGIN = API_BASE_URL + "/user/login";
export const AUTH_TOKEN = API_BASE_URL + "/accessdetail/getauthtoken";
export const API_LOGOUT = API_BASE_URL + "/user/logout";
export const SIGN_UP = API_BASE_URL + "/user/signup";
export const PRODUCT_LIST = API_BASE_URL + "/seller/productlist";
export const SELLER_SEARCH = API_BASE_URL + "/seller/sellersearch";
export const SELLER_LIST = API_BASE_URL + "/seller/sellerlist";
export const FORGOT_PASSWORD_OTP = API_BASE_URL + "/user/forgotPassOtp";
export const CHECK_FORGOT_PASSWORD_OTP =
  API_BASE_URL + "/user/checkForgotPassOtp";
export const CHANGE_PASSWORD = API_BASE_URL + "/user/forgotPassword";
