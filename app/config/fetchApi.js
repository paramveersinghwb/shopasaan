//Third party plugins
import axios from 'axios';

//Api Urls imports
import { SIGN_UP, API_LOGIN,AUTH_TOKEN,SELLER_LIST } from './Urls'

module.exports.signUp = (name, email, phoneNumber, password, data) => {
    debugger

    let postData = {
        "name": name,
       "email": email,
       "mobile": phoneNumber,
        "password": password
    }
    
 
   
    axios.post(SIGN_UP, postData)
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

module.exports.login = ( username, password,token, data) => {
    debugger
    let postData = {
        "username": username,
       "password": password,
    }
 
    axios.post('http://shopasaan.com/rest/V1/user/login', postData, {
        headers: {
            "Content-Type" : 'application/json',
            "deviceToken" : "test",
            "token" : token
        }
    }
    )
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

module.exports.getToken = ( username, password, data) => {
    debugger
    let body = JSON.stringify('test')
    axios.post('http://shopasaan.com/rest/V1/accessdetail/getauthtoken', {}, {
        headers: {
            "Content-Type" : 'application/json',
            "deviceToken" : "test",
            "username": 'shpasanapi@29',
            "password": 'spn&23mf7ms&@'
        }
    }
    )
        .then(function (response) {
            console.log(response)
            data(response);
        })
        .catch(function (error) {
            if (error.response != null)
                data(error.response)
            else
                data(null);
        })
}



module.exports.verficationOtp = ( mobile, email,password,name, data) => {
    debugger
    let postData = {
        "mobile": mobile,
        "email": email,
        "password" :password,
       "name": name,
    }
    axios.post(AUTH_TOKEN, postData, {
        headers: {
            "Content-Type" : 'application/json',
            "deviceToken" : "test",
        }
    }
    )
        .then(function (response) {
            console.log(response)
            data(response);
        })
        .catch(function (error) {
            if (error.response != null)
                data(error.response)
            else
                data(null);
        })
}




module.exports.getSellerList = (token, data) => {
    debugger
    let body = JSON.stringify('test')
    axios.post('http://shopasaan.com/rest/V1/seller/sellerlist',{}, {
        headers: {
            "Content-Type" : 'application/json',
            "deviceToken" : "test",
            "token": token,
        }
    }
    )
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
        })
}



module.exports.getProductList = ( seller_id, page_size,page,token, data) => {
    debugger
    let postData = {
        "seller_id": seller_id,
        "page_size": page_size,
        "page" :page,
    }
    axios.post('http://shopasaan.com/rest/V1/seller/productlist', postData, {
        headers: {
            "Content-Type" : 'application/json',
            "deviceToken" : "test",
            "token": token,
        }
    }
    )
        .then(function (response) {
            console.log(response)
            data(response);
        })
        .catch(function (error) {
            if (error.response != null)
                data(error.response)
            else
                data(null);
        })
}


module.exports.getSellerSeachBy = ( token, searchBy, data) => {
    debugger
    let postData = {
        "searchby": searchBy,
    }
    debugger
    axios.post('http://shopasaan.com/rest/V1/seller/sellersearch', postData, {
        headers: {
            "Content-Type" : 'application/json',
            "deviceToken" : "test",
            "token": token,
        }
    }
    )
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
        })
}
