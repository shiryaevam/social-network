import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        width="50px"
        height="50px"
        src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yandex_main_office.jpg"
        alt=""
      />
    </header>
  );
};

export default Header;
