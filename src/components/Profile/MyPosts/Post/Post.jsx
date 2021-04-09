import React from "react";
import s from "./Post.css";

const Post = (props) => {
  return(
  <div className={s.item}>
    <img src="https://developer.mozilla.org/static/img/web-docs-sprite.22a6a085cf14.svg" alt=""/>
    <p>{props.message}</p>
  </div>
)
};

export default Post;
