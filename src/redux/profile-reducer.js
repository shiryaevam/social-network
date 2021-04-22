const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "Hi", likesCount: 121 },
    { id: 3, message: "how are you", likesCount: 212 },
    { id: 4, message: "are you", likesCount: 152 },
    { id: 5, message: "you", likesCount: 1552 },
  ],
  newPostText: "Aleshka",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, text: text };
};

export default profileReducer;
