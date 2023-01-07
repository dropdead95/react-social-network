import React from "react";

import styles from "./Message.module.css";

const Message = ({ img, message, name }) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.item}>
        <img className={styles.avatar} src={img} alt="avatar1" />
      </div>
      <div className={styles.text}>
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
    </article>
  );
};

export default Message;
