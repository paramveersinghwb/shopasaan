import { checkNetworkConnection } from "./networkStatus";
import { getToken} from '../services/utils';

const baseUrl = "http://shopasaan.com/rest/V1/"   // Staging url

export default function APIServices(variables, apiName, apiMethod,authorization,header) {
    console.log("apiRequest===>", variables)
    debugger

    if(header == undefined){
        header = "application/json"
    }
    else if(header === 'multipart/form-data'){
        header = "multipart/form-data"
    }
    
    debugger
    let init = apiMethod == "GET" ? {
        method: "GET",
        headers: {
            "Content-Type":  header,
            "token": authorization,
            // "Authorization": authorization ? authorization : "",
            "Accept": "application/json",
        },
    } :
        {
            method: apiMethod,
            headers: {
                'Content-Type': header,
                "token": authorization,
                "Accept": "application/json",
            },
            body: variables
        }
    console.log("header===>", JSON.stringify(init))
    console.log("url===>", baseUrl + apiName)
    debugger
    return fetch(baseUrl + apiName, init)
        .then(res => res.json()
            .then(data => {
                debugger
                console.log("data API " + JSON.stringify(data))
                var apiData = {
                    status: res.status,
                    data: data
                }
                return apiData;
            }))
        .catch(err => {
            debugger
            console.log("error " + err + '')
            var errData = {
                data: { status: 1002, responseMessage: "Network Request Failed." }
            }
            return errData;
        });

}             