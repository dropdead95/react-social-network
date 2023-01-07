import Avatar from "../../assets/me-about.jpg";
import {
  contactsData,
  messageData,
} from "../../components/Dialogs/dialogsData";

const ADD_MESSAGE = "ADD-MESSAGE";

export const addMessageActionCreator = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

const initialState = {
  contacts: contactsData,
  messages: messageData,
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: "7",
        name: "Andrei",
        message: action.newMessageBody,
        img: Avatar,
      };
      const myContact = {
        id: "7",
        name: "Andrei",
        img: Avatar,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        contacts: [...state.contacts, myContact],
      };
    default:
      return state;
  }
};
export default dialogsPageReducer;
