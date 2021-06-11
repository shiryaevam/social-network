import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        width="50px"
        height="50px"
        src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yandex_main_office.jpg"
        alt=""
      />
      <div style={{ float: "right" }} className="loginBlock">
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink style={{ color: "white" }} to={"/login"}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
