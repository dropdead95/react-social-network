import { authUsersThunk } from "./userAuthReducer";

const INITIALIZED__SUCCESS = "INITIALIZED__SUCCESS";

export const initializeSuccess = () => ({
  type: INITIALIZED__SUCCESS,
});

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED__SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializeThunk = () => {
  return (dispatch) => {
    const promise = dispatch(authUsersThunk());
    Promise.all([promise]).then(() => {
      dispatch(initializeSuccess());
    });
  };
};

export default appReducer;
