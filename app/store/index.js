import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducer/authReducer";
import rootReducer from "../reducer";

// const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk]; // integrate thunk

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
