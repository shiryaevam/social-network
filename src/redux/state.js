import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: 12 },
      { id: 2, message: "Hi", likesCount: 121 },
      { id: 3, message: "how are you", likesCount: 212 },
      { id: 4, message: "are you", likesCount: 152 },
      { id: 5, message: "you", likesCount: 1552 },
    ],
    newPostText:'Aleshka'
  },
  dialogPage: {
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
  },
};

export let addPost = (postMessage) =>{
  let newPost = {
    id:5,
    message:postMessage,
    likesCount:0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
}

export let updateNewPostText = (newtext) =>{
  state.profilePage.newPostText = newtext
  rerenderEntireTree(state)
}

export default state;
