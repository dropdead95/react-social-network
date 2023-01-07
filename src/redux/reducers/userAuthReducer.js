import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const SET_USERS_DATA = "SET_USERS_DATA";

export const setAuthUsersData = (id, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  payload: {
    id,
    email,
    login,
    isAuth,
  },
});

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const usersAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const authUsersThunk = () => {
  return async (dispatch) => {
    const data = await authAPI.authUsers();

    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUsersData(id, email, login, true));
    }
  };
};

export const loginUserThunk = (email, password, rememberMe) => {
  return async (dispatch) => {
    const data = await authAPI.loginUser(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(authUsersThunk());
    } else {
      const message =
        data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const logoutUserThunk = () => {
  return async (dispatch) => {
    const data = await authAPI.loginOutUser();
    if (data.resultCode === 0) {
      dispatch(setAuthUsersData(null, null, null, false));
    }
  };
};

export default usersAuthReducer;
