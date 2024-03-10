import { NavLink } from "react-router-dom";
import { routeMain as routeAboutPage } from "pages/AboutPage";
import { routeMain as routeContactsPage } from "pages/ContactsPage";
import { routeMain as routePortfolioPage } from "pages/PortfolioPage";

import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

const NavBlock = ({ pathname }) => {
  const { t } = useTranslation();

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
          <NavLink to={routeAboutPage()}>{t("header-nav.about")}</NavLink>
        </li>
        <li>
          <NavLink to={routePortfolioPage()}>
            {t("header-nav.portfolio")}
          </NavLink>
        </li>
        <li>
          <NavLink to={routeContactsPage()}>{t("header-nav.contacts")}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBlock;
