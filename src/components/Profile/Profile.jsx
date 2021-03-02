import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        {" "}
        <img
          src="https://image.shutterstock.com/z/stock-photo-majestic-sunset-of-the-mountains-landscape-wonderful-nature-landscape-during-sunset-beautiful-1487897981.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
<MyPosts/>
    </div>
  );
};

export default Profile;
