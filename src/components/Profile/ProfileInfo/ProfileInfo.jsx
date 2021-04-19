import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        src="https://image.shutterstock.com/z/stock-photo-majestic-sunset-of-the-mountains-landscape-wonderful-nature-landscape-during-sunset-beautiful-1487897981.jpg"
        alt=""
      />
        <div className={s.descriptionBlock}> ava + description</div>

    </div>
  );
};

export default ProfileInfo;
