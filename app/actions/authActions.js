import APIServices from '../services/apiService';
import { validateEmail, validatePassword, validatName, validatConfirmPass } from '../services/validation';
import { networkStatus } from '../services/networkStatus';
import { NetworkStatus, AcceptenceMsg } from '../assets/default_text';
import { AsyncStorage } from 'react-native'
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_TOKEN,
    LOGIN_FAILURE,
    FORGOT_PASS_SUCCESS,
    FORGOT_PASS_FAILURE,
    CLEAR_STATE,
    ERR_MESSAGE,
    LOADER,
    LOGIN_SUCCESS_OTP,
    RESET_PASS_SUCCESS,
    RESET_PASS_FAILURE,
    VERIFY_ACCOUNT_SUCCESS,
    VERIFY_ACCOUNT_FAILURE,
    FETCH_SELLER_LIST,
    FETCH_FAILURE,
    FETCH_PRODUCT_LIST
} from './types';
import { setToken,setUserData } from '../services/utils';
// Signin api functionality    
export const SignIn = (data,token) => {
    return dispatch => {
        debugger
            //dispatch({ type: LOGIN_SUCCESS, payload: "" })
            networkStatus()
                .then(isConnected => {
                    if (!isConnected) dispatch({ type: ERR_MESSAGE, payload: NetworkStatus })
                    else {
                        dispatch({ type: CLEAR_STATE })
                        dispatch({ type: LOADER, payload: true })
                        APIServices(JSON.stringify(data), 'user/login', 'POST',token)
                            .then(responseJson => {
                                console.log("test===>", responseJson)
                                debugger
                                if (responseJson.data.status === 200) {
                                    debugger
                                    AsyncStorage.setItem("bareer_key",token)
                                    dispatch({ type: LOGIN_SUCCESS, payload: responseJson.data })
                                    dispatch({ type: LOGIN_TOKEN, payload: responseJson.data })
                                   setUserData (JSON.stringify(data))
                                }
                                else if (responseJson.data.status_code === 202) dispatch({ type: LOGIN_SUCCESS_OTP, payload: responseJson.data })
                                else if (responseJson.data.status_code === 400) dispatch({ type: LOGIN_FAILURE, payload: responseJson.data.message })
                            })
                    }
                })
        }

    }

// signup api functionality
export const SignUp = (data) => {
    debugger
    let authorization =''
    return dispatch => {
        if (!validatName(data.first_name).status) dispatch({ type: ERR_MESSAGE, payload: validatName(data.first_name).message })
        else if (!validateEmail(data.email).status) dispatch({ type: ERR_MESSAGE, payload: validateEmail(data.email).message })
        else if (!validatePassword(data.password).status) dispatch({ type: ERR_MESSAGE, payload: validatePassword(data.password).message })
        else if (!validatConfirmPass(data.password, data.confirmPass).status) dispatch({ type: ERR_MESSAGE, payload: validatConfirmPass(data.password, data.confirmPass).message })
        else if (!data.isChecked) dispatch({ type: ERR_MESSAGE, payload: AcceptenceMsg })
        else {
            networkStatus()
                .then(isConnected => {
                    if (!isConnected) dispatch({ type: ERR_MESSAGE, payload: NetworkStatus })
                    else {
                        dispatch({ type: CLEAR_STATE })
                        dispatch({ type: LOADER, payload: true })
                        APIServices(JSON.stringify(data), 'signup', 'POST',authorization)
                            .then(responseJson => {
                               
                                if(responseJson.data.status_code === 200){
                                    setUserData (JSON.stringify(data))
                                }
                                console.log("responseJson==>", JSON.stringify(responseJson))
                                if (responseJson.data.status_code === 200) dispatch({ type: SIGNUP_SUCCESS, payload: responseJson.data })
                                else if (responseJson.data.status_code === 401) dispatch({ type: SIGNUP_FAILURE, payload: responseJson.data.message ? responseJson.data.message : 'Something went wrong.' })
                                else if (responseJson.status === 422) dispatch({ type: SIGNUP_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Something went wrong.' })
                                else if (responseJson.data.status === 1002) dispatch({ type: SIGNUP_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Network Request Failed.' })
                            })
                    }
                })
        }
    }
}

// forgot password api functionality
export const ForgotPass = (data) => {
    return dispatch => {
        // if (!validateEmail(data.email).status) dispatch({ type: ERR_MESSAGE, payload: validateEmail(data.email).message })
        // else {
            networkStatus()
                .then(isConnected => {
                    if (!isConnected) dispatch({ type: ERR_MESSAGE, payload: NetworkStatus })
                    else {
                        dispatch({ type: CLEAR_STATE })
                        dispatch({ type: LOADER, payload: true })
                        APIServices(data, 'forgot/password', 'POST')
                            .then(responseJson => {
                                console.log("responseJson==>", JSON.stringify(responseJson))
                                if (responseJson.data.status_code === 200 || responseJson.data.status_code === 202) dispatch({ type: FORGOT_PASS_SUCCESS, payload: responseJson.data })
                                // else if (responseJson.data.status_code === 202) dispatch({ type: FORGOT_PASS_SUCCESS, payload: responseJson.data })
                                else if (responseJson.data.status_code === 401) dispatch({ type: FORGOT_PASS_FAILURE, payload: responseJson.data.message ? responseJson.data.message : 'Something went wrong.' })
                                else if (responseJson.status === 422) dispatch({ type: FORGOT_PASS_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Something went wrong.' })
                            })
                    }
                })
        // }
    }
}

// ResetPassword api functionality    
export const SocialLogin = (data) => {
    return dispatch => {
        networkStatus()
            .then(isConnected => {
                if (!isConnected) dispatch({ type: ERR_MESSAGE, payload: NetworkStatus })
                else {
                    dispatch({ type: CLEAR_STATE })
                    dispatch({ type: LOADER, payload: true })
                    APIServices(data, 'oauth/token', 'POST')
                        .then(responseJson => {
                            setUserData (JSON.stringify(data))
                            console.log("test===>", responseJson)
                            if (responseJson.data.status_code === 200) {
                                dispatch({ type: LOGIN_SUCCESS, payload: responseJson.data })
                                dispatch({ type: LOGIN_TOKEN, payload: responseJson.data })
                            }
                            else if (responseJson.data.status_code === 401) dispatch({ type: LOGIN_FAILURE, payload: responseJson.data.message })
                        })
                }
            })

    }
}

export const ResetPass = (data) => {
    return dispatch => {
        console.log("resetPassword===>", data)
        if (!validatePassword(data.password).status) dispatch({ type: ERR_MESSAGE, payload: validatePassword(data.password).message })
        else if (!validatConfirmPass(data.password, data.password_confirmation).status) dispatch({ type: ERR_MESSAGE, payload: validatConfirmPass(data.password, data.confirmPass).message })
        else {
            networkStatus()
                .then(isConnected => {
                    if (!isConnected) dispatch({ type: ERR_MESSAGE, payload: NetworkStatus })
                    else {
                        dispatch({ type: CLEAR_STATE })
                        dispatch({ type: LOADER, payload: true })
                        APIServices(data, 'forgotPassOtp', 'POST')
                            .then(responseJson => {
                                console.log("responseJson==>", JSON.stringify(responseJson))
                                if (responseJson.data.status === 200) dispatch({ type: RESET_PASS_SUCCESS, payload: responseJson.data })
                                else if (responseJson.data.status_code === 401) dispatch({ type: RESET_PASS_FAILURE, payload: responseJson.data.message ? responseJson.data.message : 'Something went wrong.' })
                                else if (responseJson.status === 422) dispatch({ type: RESET_PASS_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Something went wrong.' })
                                else if (responseJson.data.status === 1002) dispatch({ type: RESET_PASS_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Network Request Failed.' })
                            })
                    }
                })
        }
    }
}

export const VerifyAccount = (data) => {
    return dispatch => {
        networkStatus()
            .then(isConnected => {
                if (!isConnected) dispatch({ type: ERR_MESSAGE, payload: NetworkStatus })
                else {
                    debugger
                    dispatch({ type: CLEAR_STATE })
                    dispatch({ type: LOADER, payload: true })
                    APIServices(data, 'verify/account', 'POST')
                        .then(responseJson => {
                            console.log("responseJson==>", JSON.stringify(responseJson))
                            if (responseJson.data.status_code === 200) {
                                debugger
                                dispatch({ type: VERIFY_ACCOUNT_SUCCESS, payload: responseJson.data })
                                setToken("bareer_key", responseJson.data.user.access_token ? responseJson.data.user.access_token : null)

                            }
                            else if (responseJson.data.status_code === 401) dispatch({ type: VERIFY_ACCOUNT_FAILURE, payload: responseJson.data.message ? responseJson.data.message : 'Something went wrong.' })
                            else if (responseJson.status === 422) dispatch({ type: VERIFY_ACCOUNT_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Something went wrong.' })
                            else if (responseJson.data.status === 1002) dispatch({ type: VERIFY_ACCOUNT_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Network Request Failed.' })
                        })
                }
            })
    }
}

export const sellerList = (authorization) => {
    return dispatch => {
        let bodyData = {"":""}
        let data= JSON.stringify(bodyData)
        networkStatus()
            .then(isConnected => {
                if (!isConnected) dispatch({ type: ERR_MESSAGE, payload: NetworkStatus })
                else {
                    debugger
                    dispatch({ type: CLEAR_STATE })
                    dispatch({ type: LOADER, payload: true })
                    APIServices(data, 'seller/sellerlist', 'POST',authorization)
                        .then(responseJson => {
                            console.log("responseJson==>", JSON.stringify(responseJson))
                            debugger
                            if (responseJson.data.status === 200) {
                                debugger
                                dispatch({ type: FETCH_SELLER_LIST, payload: responseJson.data })

                            }
                            else if (responseJson.data.status === 401) dispatch({ type: FETCH_FAILURE, payload: responseJson.data.message ? responseJson.data.message : 'Something went wrong.' })
                            else if (responseJson.status === 422) dispatch({ type: FETCH_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Something went wrong.' })
                        })
                }
            })
    }
}


export const searchSeller = (authorization,serachData) => {
    return dispatch => {
        let data= JSON.stringify(serachData)
        networkStatus()
            .then(isConnected => {
                if (!isConnected) dispatch({ type: ERR_MESSAGE, payload: NetworkStatus })
                else {
                    debugger
                    dispatch({ type: CLEAR_STATE })
                    dispatch({ type: LOADER, payload: true })
                    APIServices(data, 'seller/sellersearch', 'POST',authorization)
                        .then(responseJson => {
                            console.log("responseJson==>", JSON.stringify(responseJson))
                            debugger
                            if (responseJson.data.status === 200) {
                                debugger
                                dispatch({ type: FETCH_SELLER_LIST, payload: responseJson.data })

                            }
                            else if (responseJson.data.status === 401) dispatch({ type: FETCH_FAILURE, payload: responseJson.data.message ? responseJson.data.message : 'Something went wrong.' })
                            else if (responseJson.status === 422) dispatch({ type: FETCH_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Something went wrong.' })
                        })
                }
            })
    }
}


export const productList = (authorization,postData) => {
    return dispatch => {
        let data= JSON.stringify(postData)
        networkStatus()
            .then(isConnected => {
                if (!isConnected) dispatch({ type: ERR_MESSAGE, payload: NetworkStatus })
                else {
                    debugger
                    dispatch({ type: CLEAR_STATE })
                    dispatch({ type: LOADER, payload: true })
                    APIServices(data, 'seller/productlist', 'POST',authorization)
                        .then(responseJson => {
                            console.log("responseJson==>", JSON.stringify(responseJson))
                            debugger
                            if (responseJson.data.status === 200) {
                                debugger
                                dispatch({ type: FETCH_PRODUCT_LIST, payload: responseJson.data })

                            }
                            else if (responseJson.data.status === 401) dispatch({ type: FETCH_FAILURE, payload: responseJson.data.message ? responseJson.data.message : 'Something went wrong.' })
                            else if (responseJson.status === 422) dispatch({ type: FETCH_FAILURE, payload: responseJson.data.email ? responseJson.data.email[0] : 'Something went wrong.' })
                        })
                }
            })
    }
}



export const ClearAction = () => {
    return dispatch => dispatch({ type: CLEAR_STATE })
}