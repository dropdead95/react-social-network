import { connect } from "react-redux";
import { compose } from "redux";
import React from "react";

import {
  changePage,
  clearSearch,
  onClickFollow,
  onClickUnfollow,
  updateSearch,
  followDisable,
  getUsersThunk,
  followThunk,
  unfollowThunk,
} from "../../redux/reducers/usersPageReducer";
import UsersPresentational from "./UsersPresentational";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getNewSearchTextSelector,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/usersSelectors";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onSearchChange = (e) => {
    const text = e.target.value;
    this.props.updateSearch(text);
  };

  onSetCurrentPage = (currentPage) => {
    this.props.getUsersThunk(currentPage, this.props.pageSize);
    this.props.changePage(currentPage);
  };

  render() {
    return (
      <UsersPresentational
        onClickFollow={this.props.onClickFollow}
        onClickUnfollow={this.props.onClickUnfollow}
        newSearchText={this.props.newSearchText}
        currentPage={this.props.currentPage}
        clearSearch={this.props.clearSearch}
        onSetCurrentPage={this.onSetCurrentPage}
        onSearchChange={this.onSearchChange}
        users={this.props.users}
        totalItemsCount={this.props.totalItemsCount}
        pageSize={this.props.pageSize}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        followThunk={this.props.followThunk}
        unfollowThunk={this.props.unfollowThunk}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    newSearchText: getNewSearchTextSelector(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateInputSearch: (text) => {
//       dispatch(updateSearchAC(text));
//     },
//     onClickFollow: (userId) => {
//       dispatch(followUserAC(userId));
//     },
//     onClickUnFollow: (userId) => {
//       dispatch(unfollowUserAC(userId));
//     },
//     clearSearch: () => {
//       dispatch(clearSearchAC());
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     changePage: (number) => {
//       dispatch(changePageAC(number));
//     },
//     onLoadUsers: (totalUsersCount) => [
//       dispatch(setUsersCountAC(totalUsersCount)),
//     ],
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching));
//     },
//   };
// };

export default compose(
  connect(mapStateToProps, {
    updateSearch,
    onClickFollow,
    onClickUnfollow,
    clearSearch,
    changePage,
    followDisable,
    getUsersThunk,
    followThunk,
    unfollowThunk,
  }),
  withAuthRedirect
)(UsersAPIContainer);
