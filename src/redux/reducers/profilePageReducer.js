import Avatar from "../../assets/me-about.jpg";
import { postsData } from "../../components/Posts/postsData";
import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export const createPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (statusText) => ({
  type: SET_STATUS,
  status: statusText,
});

export const setUserProfileThunk = (userId) => {
  return async (dispatch) => {
    const data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  };
};

export const getStatusThunk = (userId) => {
  return async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
  };
};

export const updateStatusThunk = (statusText) => {
  return async (dispatch) => {
    const data = await profileAPI.updateStatus(statusText);
    if (data.resultCode === 0) {
      dispatch(setStatus(statusText));
    }
  };
};

const initialState = {
  posts: postsData,
  profile: null,
  status: "",
};
const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: "5",
        img: Avatar,
        text: action.newPostText,
        likes: "5",
        comments: "1",
        reposts: "1",
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export default profilePageReducer;
