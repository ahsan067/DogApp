import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./Reducer";

const rootReducer = combineReducers({
  app: reducer,
});

export default rootReducer;
