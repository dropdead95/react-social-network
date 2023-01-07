import React from "react";
import styles from "./Users.module.css";
import { BsSearch } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import User from "./User/UserClassComponent";
import Skeleton from "./Skeleton";
import Paginator from "../Common/Paginator/Paginator";

const UsersPresentational = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onSetCurrentPage,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>Find users</h2>
        <div className={styles.searchWrapper}>
          <BsSearch />
          <input
            className={styles.searchInput}
            onChange={props.onSearchChange}
            value={props.newSearchText}
            type="text"
            placeholder="Enter your request..."
          />
          {props.newSearchText && (
            <button onClick={props.clearSearch} className={styles.clearButton}>
              <IoCloseOutline className={styles.clearIcon} />
            </button>
          )}
        </div>
      </div>
      <div className={styles.users}>
        {props.isFetching
          ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
          : props.users.map((user, index) => {
              return (
                <User
                  onClickFollow={props.onClickFollow}
                  onClickUnfollow={props.onClickUnfollow}
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  photos={user.photos}
                  followed={user.followed}
                  followDisable={props.followDisable}
                  followingInProgress={props.followingInProgress}
                  followThunk={props.followThunk}
                  unfollowThunk={props.unfollowThunk}
                />
              );
            })}
      </div>
      <Paginator
        currentPage={currentPage}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        onSetCurrentPage={onSetCurrentPage}
      />
    </div>
  );
};

export default UsersPresentational;
