import React from "react";
import { NavLink } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiUserUnfollowLine } from "react-icons/ri";

import userPhoto from "../../../assets/no-photo-user.png";

import styles from "./User.module.css";

class User extends React.Component {
  render() {
    return (
      <article className={styles.wrapper}>
        <NavLink
          to={"./../profile/" + this.props.id}
          className={styles.imageWrapper}
        >
          <img
            className={styles.photo}
            src={
              this.props.photos.small !== null
                ? this.props.photos.small
                : userPhoto
            }
            alt=""
          />
        </NavLink>
        <div className={styles.infoWrapper}>
          <NavLink
            to={"./../profile/" + this.props.id}
            href="#"
            className={styles.userName}
          >
            {this.props.name}
          </NavLink>
          {this.props.followed ? (
            <button
              disabled={this.props.followingInProgress}
              className={styles.btn}
              onClick={() => {
                this.props.followThunk(this.props.id);
              }}
            >
              <RiUserUnfollowLine className={styles.icon} />
            </button>
          ) : (
            <button
              disabled={this.props.followingInProgress}
              className={styles.btn}
              onClick={() => {
                this.props.unfollowThunk(this.props.id);
              }}
            >
              <IoPersonAddOutline className={styles.icon} />
            </button>
          )}
        </div>
      </article>
    );
  }
}

export default User;
