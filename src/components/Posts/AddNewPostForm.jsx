import React from "react";
import { Field } from "redux-form";
import { BiSend } from "react-icons/bi";

import styles from "./Posts.module.css";
import { maxLength } from "../../utils/validators/validators";
import { Textarea } from "../Common/FormsControls/FormControls";

const maxLength1000 = maxLength(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <Field
        validate={[maxLength1000]}
        component={Textarea}
        name="newPostText"
        className={styles.inputPost}
        placeholder={"Create post..."}
      ></Field>
      <button className={styles.inputBtn}>
        <BiSend className={styles.icon} />
      </button>
    </form>
  );
};

export default AddNewPostForm;
