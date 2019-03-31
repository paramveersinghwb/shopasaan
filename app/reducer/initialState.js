export const initialState = {
    auth: {
        status: '',
        authentication: '',
        err_Message: '',
        loader: false,
        userId: '',
        userDetail: [],
        userToken: '',
        fetchChat:'',
        fetchsingleChat:'',
        fetchService:[]

    },
    booking: {
        bookingActionStatus: '',
        bookingErrMsg: '',
        bookingloader: false,
    },
    profile: {
        profileloader: false,
        profileActionStatus: ''
    },


}