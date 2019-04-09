//Third party plugins
import axios from 'axios';

//Api Urls imports
import { API_SIGN_UP, API_LOGIN } from '../config/Urls'

module.exports.signUp = (userName, email, phoneNumber, password, data) => {
    debugger

    let formData = new FormData();
    formData.append("name", userName);
    formData.append("email", email);
    formData.append("mobile", phoneNumber);
    formData.append("password", password);
    axios.post(API_SIGN_UP, formData)
        .then(function (response) {
            console.log(response)
            data(response);
            debugger
        })
        .catch(function (error) {
            debugger
            if (error.response != null)
                data(error.response)
        
            else
                data(null);
        });
}

module.exports.login = ( email, password, data) => {
    debugger
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    axios.post(API_LOGIN, formData)
        .then(function (response) {
            console.log(response)
            data(response);
        })
        .catch(function (error) {
            if (error.response != null)
                data(error.response)
            else
                data(null);
        });
}


