import React from "react";
import { reduxForm } from "redux-form";

import styles from "./Posts.module.css";
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm";

const AddNewPostReduxForm = reduxForm({
  form: "AddNewPostForm",
})(AddNewPostForm);

const Posts = ({ posts, addPost }) => {
  const createPost = (values) => {
    addPost(values.newPostText);
  };

  return (
    <div className={styles.postWrapper}>
      <div className={styles.inputWrapper}>
        <AddNewPostReduxForm onSubmit={createPost} />
      </div>
      {posts.map((post, i) => (
        <Post
          key={i}
          id={post.id}
          img={post.img}
          text={post.text}
          likes={post.likes}
          comments={post.comments}
          reposts={post.reposts}
        />
      ))}
    </div>
  );
};

export default Posts;
