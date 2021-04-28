import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl:
                    "https://sites.google.com/site/informaticschildren/_/rsrc/1333892088085/aleesa-popovi/%D0%90%D0%BB%D1%91%D1%88%D0%B0_%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B8%D1%87.JPG",
                fullName: "Aleshka",
                status: "I am boss",
                followed: true,
                location: { city: "Samara", country: "Russia" },
            },
            {
                id: 2,
                photoUrl:
                    "https://sites.google.com/site/informaticschildren/_/rsrc/1333892088085/aleesa-popovi/%D0%90%D0%BB%D1%91%D1%88%D0%B0_%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B8%D1%87.JPG",
                fullName: "Sergey",
                status: "NO! I am boss",
                followed: true,
                location: { city: "Samara", country: "Russia" },
            },
            {
                id: 3,
                photoUrl:
                    "https://sites.google.com/site/informaticschildren/_/rsrc/1333892088085/aleesa-popovi/%D0%90%D0%BB%D1%91%D1%88%D0%B0_%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B8%D1%87.JPG",
                fullName: "Antoshka",
                status: "NO!! NO!! I am boss",
                followed: false,
                location: { city: "Sankt-Peterburg", country: "Russia" },
            },
            {
                id: 4,
                photoUrl:
                    "https://sites.google.com/site/informaticschildren/_/rsrc/1333892088085/aleesa-popovi/%D0%90%D0%BB%D1%91%D1%88%D0%B0_%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B8%D1%87.JPG",
                fullName: "Andrey",
                status: "I am fish",
                followed: false,
                location: { city: "Saransk", country: "Russia" },
            },
        ]);
    }



  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.usersPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
