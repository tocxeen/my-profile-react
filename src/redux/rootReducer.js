import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import projectReducer from "./slices/projectSlice";

const rootReducer = combineReducers({
  AUTH: authReducer,
  PROJECT: projectReducer,
});

export default rootReducer;
