import { initialState } from './initialState';

export default (state = initialState.auth, action) => {
    switch (action.type) {
        case 'ERR_MESSAGE':
        return{
            ...state,
            err_Message: action.payload,
            status: '5001',
        }
        case 'LOADER':
        return{
            ...state,
            loader: action.payload
        }
        case 'LOGIN_SUCCESS':
        return{
            ...state,
            status: '200',
            loader: false,
            userDetail: action.payload.user
        }
        case 'LOGIN_TOKEN':
        return{
            ...state,
            status: '200',
            loader: false,
            userToken: action.payload.user
        }
        case 'FETCH_CHAT':
        return{
            ...state,
            status: '200',
            loader: false,
            chat: action.payload
        }
        case 'FETCH_CHATS':
        return{
            ...state,
            status: '200',
            loader: false,
            fetchChat: action.payload
        }

        case 'LOGIN_SUCCESS_OTP':
        return{
            ...state,
            status: '100',
            userId: action.payload.user.id,
            loader: false,
            userDetail: action.payload.user
        }
        case 'LOGIN_FAILURE':
        return {
            ...state,
            status: '400',
            loader: false,
            err_Message: action.payload
        }

        case 'FETCH_SELLER_LIST':
        return{
            ...state,
            status: '200',
            loader: false,
            fetchService: action.payload
            
        }
        case 'FETCH_FAILURE':
        return {
            ...state,
            status: '400',
            loader: false,
            err_Message: action.payload
        }

        case 'FETCH_PRODUCT_LIST':
        return{
            ...state,
            status: '200',
            loader: false,
            fetch_Proudcts: action.payload
            
        }
        
        case 'SIGNUP_SUCCESS':
        return {
            ...state,
            status: '201',
            userId: action.payload.user.id,
            loader: false,
            userDetail: action.payload.user
        }
        case 'SIGNUP_FAILURE':
        return {
            ...state,
            status: '401',
            err_Message: action.payload,
            loader: false
        }
        case 'FORGOT_PASS_SUCCESS':
        return {
            ...state,
            status: '202',
            userId: action.payload.user.id,
            loader: false,
            userDetail: action.payload.user
        }
        case 'FORGOT_PASS_FAILURE':
        return {
            ...state,
            status: '402',
            err_Message: action.payload,
            loader: false
        }
        case 'RESET_PASS_SUCCESS':
        return {
            ...state,
            status: '203',
            err_Message: action.payload.message,
            loader: false,
        }
        case 'RESET_PASS_FAILURE':
        return {
            ...state,
            status: '403',
            err_Message: action.payload,
            loader: false
        }
        case 'VERIFY_ACCOUNT_SUCCESS':
        return {
            ...state,
            status: '204',
            err_Message: action.payload.message,
            loader: false,
        }
        case 'VERIFY_ACCOUNT_FAILURE':
        return {
            ...state,
            status: '404',
            err_Message: action.payload,
            loader: false
        }
        case 'CLEAR_STATE':
        return {
            ...state,
            status: '',
            err_Message: '',
        }
    }
    return state;
}