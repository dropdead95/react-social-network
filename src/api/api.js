import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b105a972-85ec-4a1f-a165-c85db01795dc",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  unfollowUser(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status/`, {
        status,
      })
      .then((response) => response.data);
  },
};

export const authAPI = {
  authUsers() {
    return instance.get("auth/me").then((response) => response.data);
  },
  loginUser(email, password, rememberMe = false) {
    return instance
      .post("auth/login", {
        email,
        password,
        rememberMe,
      })
      .then((response) => response.data);
  },
  loginOutUser() {
    return instance.delete("auth/login").then((response) => response.data);
  },

  getCaptcha() {
    return instance
      .get("/security/get-captcha-url")
      .then((response) => response.data);
  },
};
