const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How, are you?" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Are you?" },
    { id: 5, message: "I am from Russia" },
    { id: 6, message: "Hello everyone" },
  ],
  dialogs: [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Alena" },
    { id: 3, name: "Kolya" },
    { id: 4, name: "Lesha" },
    { id: 5, name: "Anton" },
    { id: 6, name: "Andrey" },
  ],
  newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogReducer;
