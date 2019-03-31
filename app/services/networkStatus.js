import { NetInfo, Platform } from "react-native";

// check the net is available or not.
export function networkStatus(){
     return new Promise((resolve, reject) => {
        if (Platform.OS === "ios") {
            NetInfo.isConnected.fetch().then(isConnected => {
                resolve(isConnected);
            });
        } else {
            NetInfo.isConnected.fetch().then(isConnected => {
                console.log("net" + isConnected)
                resolve(isConnected);
            });
        }
    })
}