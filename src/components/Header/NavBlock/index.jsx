import { NavLink } from "react-router-dom";
import { routeMain as routeAboutPage } from "pages/AboutPage";
import { routeMain as routeContactsPage } from "pages/ContactsPage";
import { routeMain as routePortfolioPage } from "pages/PortfolioPage";
import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";

import styles from "./styles.module.scss";

const NavBlock = ({ pathname }) => {
  return (
    // <nav className={pathname === "/" ? "nav nav-white" : "nav nav-black"}>
    <nav
      className={
        pathname === "/"
          ? `${styles.nav} ${styles.light}`
          : `${styles.nav} ${styles.dark}`
      }
    >
      <ul className={styles.menu}>
        <li>
          <NavLink to={routeAboutPage()}>О НАС</NavLink>
        </li>
        <li>
          <NavLink to={routeDevelopmentPage()}>КОНЦЕПЦИЯ</NavLink>
        </li>
        <li>
          <NavLink to={routeDevelopmentPage()}>АРХИТЕКТУРА</NavLink>
        </li>
        <li>
          <NavLink to={routeDevelopmentPage()}>ПРОЕКТЫ</NavLink>
        </li>
        <li>
          <NavLink to={routeDevelopmentPage()}>КОНТАКТЫ</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBlock;
