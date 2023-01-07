import { contactsData } from "../components/Dialogs/dialogsData";
import { messageData } from "../components/Dialogs/dialogsData";
import { postsData } from "../components/Posts/postsData";
import dialogsPageReducer from "./reducers/dialogsPageReducer";
import profilePageReducer from "./reducers/profilePageReducer";
import usersPageReducer from "./reducers/usersPageReducer";

const store = {
  _state: {
    profilePage: {
      posts: postsData,
      newPostText: "",
    },
    dialogsPage: {
      contacts: contactsData,
      messages: messageData,
      newMessageText: "",
    },
  },

  _callSubscriber() {
    console.log("hello");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    );
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );
    this._state.usersPage = usersPageReducer(this._state.usersPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
