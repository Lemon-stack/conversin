import { combineReducers } from "redux";
import googleSigninReducer from "./googleSigninSlice.js";
const rootReducer = combineReducers({
  googleSignin: googleSigninReducer,
});

export default rootReducer;
