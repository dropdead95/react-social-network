import { connect } from "react-redux";

import { createPostActionCreator } from "../../redux/reducers/profilePageReducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(createPostActionCreator(newPostText));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
