import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import profilePageReducer from "./reducers/profilePageReducer";
import dialogsPageReducer from "./reducers/dialogsPageReducer";
import usersPageReducer from "./reducers/usersPageReducer";
import userAuthReducer from "./reducers/userAuthReducer";
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  authUsers: userAuthReducer,
  form: formReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
