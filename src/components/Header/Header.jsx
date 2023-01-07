import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo-social.png";
import styles from "./Header.module.css";
import me from "../../assets/me-about.jpg";

const Header = ({ isAuth, login, logoutUserThunk }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/news" className={styles.Logo}>
          <img src={logo} alt="logo" />
        </NavLink>
        <div className={styles.searchWrapper}>
          <input className={styles.search} type="text" placeholder="Поиск" />
        </div>
        {isAuth ? (
          <>
            <NavLink to={"/profile"} className={styles.userName}>
              {login}
            </NavLink>

            <button onClick={logoutUserThunk} className={styles.btnLogout}>
              Logout
            </button>

            <div className={styles.authLogo}>
              <NavLink to={"/profile"}>
                <img className={styles.authLogoIcon} src={me} alt="" />
              </NavLink>
            </div>
          </>
        ) : (
          <div className={styles.btnWrapper}>
            <NavLink to={"/login"}>
              <button type="button" className={styles.login}>
                Login
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
