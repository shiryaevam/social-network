import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPost = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      My posts
      <div>
        <textarea
          value={props.newPostText}
          onChange={onPostChange}
          ref={newPostElement}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPost;
