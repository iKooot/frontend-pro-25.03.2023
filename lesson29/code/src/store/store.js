/****************************************
 * Native
 ****************************************/
// import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
//
// const reduces = combineReducers({
//   users: userReducer,
// });
// export const store = createStore(
//   reduces,
//   compose(applyMiddleware(thunk), devToolsEnhancer()),
// );

/****************************************
 * Toolkit
 ****************************************/

import userReducer from "./users/users.reducer.js";
import userToolkit from "../ducks/users.duck.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: userReducer,
    userToolkit: userToolkit,
  },
  devTools: true,
});
