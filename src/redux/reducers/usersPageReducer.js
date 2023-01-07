import { usersAPI } from "../../api/api";
import { updateObjProp } from "../../utils/object-helpers";

const UPDATE_SEARCH_TEXT = "UPDATE-NEW-POST-TEXT";
const CLEAR_SEARCH_TEXT = "CLEAR-SEARCH-TEXT";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOW_DISABLE = "FOLLOW_DISABLE";

export const updateSearch = (text) => ({
  type: UPDATE_SEARCH_TEXT,
  newText: text,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH_TEXT,
  newText: "",
});

export const onClickFollow = (userId) => ({ type: FOLLOW, userId });
export const onClickUnfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const changePage = (number) => ({ type: CHANGE_PAGE, number });
export const setUsersCount = (count) => ({
  type: SET_USERS_COUNT,
  count,
});
export const setIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const followDisable = (isSend) => ({
  type: FOLLOW_DISABLE,
  isSend,
});

export const getUsersThunk = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(followDisable(true));
  const data = await apiMethod(id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(followDisable(false));
};

export const followThunk = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      id,
      usersAPI.followUser.bind(usersAPI),
      onClickUnfollow
    );
  };
};

export const unfollowThunk = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      id,
      usersAPI.unfollowUser.bind(usersAPI),
      onClickFollow
    );
  };
};

const initialState = {
  users: [],
  newSearchText: "",
  currentPage: 1,
  pageSize: 20,
  totalItemsCount: 0,
  isFetching: false,
  followingInProgress: false,
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        newSearchText: action.newText,
      };
    case CLEAR_SEARCH_TEXT:
      return {
        ...state,
        newSearchText: action.newText,
      };
    case FOLLOW:
      return {
        ...state,
        users: updateObjProp(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjProp(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.number,
      };
    }
    case SET_USERS_COUNT: {
      return {
        ...state,
        totalItemsCount: action.count,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case FOLLOW_DISABLE: {
      return {
        ...state,
        followingInProgress: action.isSend,
      };
    }
    default:
      return state;
  }
};

export default usersPageReducer;
