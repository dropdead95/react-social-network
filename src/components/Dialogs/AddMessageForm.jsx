import React from "react";
import { Field } from "redux-form";
import { BiSend } from "react-icons/bi";

import styles from "./Dialogs.module.css";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.inputWrapper}>
      <Field
        component="textarea"
        name="newMessageBody"
        placeholder="Write message..."
        className={styles.inputMessage}
      ></Field>
      <button className={styles.inputBtn}>
        <BiSend className={styles.icon} />
      </button>
    </form>
  );
};

export default AddMessageForm;
