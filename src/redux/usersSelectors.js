import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
};

export const getNewSearchTextSelector = (state) => {
  return state.usersPage.newSearchText;
};
export const getUsers = createSelector(
  getUsersSelector,
  getNewSearchTextSelector,
  (users, newSearchText) => {
    return users.filter((u) =>
      newSearchText ? u.name.includes(newSearchText) : u
    );
  }
);

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalItemsCount;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
