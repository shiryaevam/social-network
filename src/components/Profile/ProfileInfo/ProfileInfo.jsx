import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <div>Loader</div>;
  }
  return (
    <div>
      <img
        src="https://image.shutterstock.com/z/stock-photo-majestic-sunset-of-the-mountains-landscape-wonderful-nature-landscape-during-sunset-beautiful-1487897981.jpg"
        alt=""
      />
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
