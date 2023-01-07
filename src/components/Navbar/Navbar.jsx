import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiMessageRounded } from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import { BiEqualizer } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { RiUserSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.menuItem}>
          <Link to="/profile" className={styles.menuLink}>
            <CgProfile className={styles.linkIcon} />
            Profile
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/dialogs" className={styles.menuLink}>
            <BiMessageRounded className={styles.linkIcon} />
            Messages
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/users" className={styles.menuLink}>
            <RiUserSearchLine className={styles.linkIcon} />
            Users
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/news" className={styles.menuLink}>
            <BiNews className={styles.linkIcon} />
            News
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/music" className={styles.menuLink}>
            <BiEqualizer className={styles.linkIcon} />
            Music
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/settings" className={styles.menuLink}>
            <FiSettings className={styles.linkIcon} />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
