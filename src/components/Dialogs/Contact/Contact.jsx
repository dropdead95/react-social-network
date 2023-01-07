import React from "react";

import styles from "./Contact.module.css";
import { Link } from "react-router-dom";

const Contact = ({ id, img, name }) => {
  return (
    <li className={styles.item}>
      <Link to={`${id}`} className={styles.link}>
        <img className={styles.avatar} src={img} alt="avatar1" />
        <h4>{name}</h4>
      </Link>
    </li>
  );
};

export default Contact;
