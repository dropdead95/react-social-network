import React from "react";
import { reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";

import styles from "./Dialogs.module.css";

import Message from "./Message/Message";
import Contact from "./Contact/Contact";
import AddMessageForm from "./AddMessageForm";

const Dialogs = ({ data, isAuth, createMessage }) => {
  if (!isAuth) return <Navigate to="/login" />;

  const AddMessageReduxForm = reduxForm({
    form: "dialogAddMessageForm",
  })(AddMessageForm);

  const addNewMessage = (values) => {
    createMessage(values.newMessageBody);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.contacts}>
        {data.contacts.map((obj, i) => (
          <Contact key={i} name={obj.name} id={obj.id} img={obj.img} />
        ))}
      </ul>
      <div className={styles.chatWrapper}>
        <div className={styles.messageWrapper}>
          {data.messages.map((obj, i) => (
            <Message
              key={i}
              id={obj.id}
              name={obj.name}
              message={obj.message}
              img={obj.img}
            />
          ))}
        </div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
