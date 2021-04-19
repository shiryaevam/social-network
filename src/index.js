import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "Hi", likesCount: 121 },
    { id: 3, message: "how are you", likesCount: 212 },
    { id: 4, message: "are you", likesCount: 152 },
    { id: 5, message: "you", likesCount: 1552 },
];

let dialogs = [
    {id:1, name:'Vasya'},
    {id:2, name:'Alena'},
    {id:3, name:'Kolya'},
    {id:4, name:'Lesha'},
    {id:5, name:'Anton'},
    {id:6, name:'Andrey'},
];

let messages = [
    {id:1, message: 'Hi'},
    {id:2, message: 'How, are you?'},
    {id:3, message: 'Hello'},
    {id:4, message: 'Are you?'},
    {id:5, message: 'I am from Russia'},
    {id:6, message: 'Hello everyone'},
];



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
