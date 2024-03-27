import { NavLink, useLocation } from "react-router-dom";
import { routeMain as routeAboutPage } from "pages/AboutPage";
import { routeMain as routeContactsPage } from "pages/ContactsPage";
import { routeMain as routePortfolioPage } from "pages/PortfolioPage";
import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

const NavBlock = () => {
  // const [color, setColor] = useState("gold");
  // const pathname = useLocation().pathname;
  // const pathname = "Костыль";

  // useEffect(() => {
  //   if (pathname === "/") {
  //     setColor("light");
  //   } else {
  //     setColor("dark");
  //   }
  // }, [pathname]);

  const color = "dark";

  return (
    <nav
      className={ 
        color === "light"
          ? `${styles.nav} ${styles.light}`
          : `${styles.nav} ${styles.dark}`
      }
    >
      <ul className={styles.menu}>
        <li>
          <NavLink to={routeAboutPage()}>О НАС</NavLink>
        </li>
        {/* <li>
          <NavLink to={routeDevelopmentPage()}>КОНЦЕПЦИЯ</NavLink>
        </li>
        <li>
          <NavLink to={routeDevelopmentPage()}>АРХИТЕКТУРА</NavLink>
        </li> */}
        <li>
          <NavLink to={routePortfolioPage()}>ПОРТФОЛИО</NavLink>
        </li>
        <li>
          <NavLink to={routeContactsPage()}>КОНТАКТЫ</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBlock;
