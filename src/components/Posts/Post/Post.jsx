import React from "react";
import { BiLike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { BiShare } from "react-icons/bi";

import styles from "./Post.module.css";

const Post = ({ id, img, text, likes, comments, reposts }) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <img className={styles.avatar} src={img} alt="avatar" />
        </div>
        <h4 className={styles.title}>Andrey Lisovskiy</h4>
      </div>

      <p className={styles.content}>{text}</p>
      <div className={styles.buttonsBlock}>
        <button className={styles.reactionBtn}>
          <BiLike className={styles.btnIcon} />
          <h4>{likes}</h4>
        </button>
        <button className={styles.reactionBtn}>
          <BiComment className={styles.btnIcon} />
          <h4>{comments}</h4>
        </button>
        <button className={styles.reactionBtn}>
          <BiShare className={styles.btnIcon} />
          <h4>{reposts}</h4>
        </button>
      </div>
    </article>
  );
};

export default Post;
