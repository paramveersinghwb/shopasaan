// @flow

const initialState = {
  userPhoneNumber: "",
  userToken: "",
  isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default userReducer;
