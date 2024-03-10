import { NavLink } from "react-router-dom";
import { routeMain as routeAboutPage } from "pages/AboutPage";
import { routeMain as routeContactsPage } from "pages/ContactsPage";
import { routeMain as routePortfolioPage } from "pages/PortfolioPage";
import { routeMain as routeMainPage } from "pages/MainPage";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles.scss";
import Logotip from "../Logotip";

const NavBlock = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <nav
      className={location.pathname === "/" ? "nav nav-white" : "nav nav-black"}
    >
      <NavLink
        to={routeAboutPage()}
        // className={({ isActive }) => (isActive ? "link-active" : "")}
      >
        {/* About */}
        {t("header-nav.about")}
      </NavLink>
      <NavLink
        to={routePortfolioPage()}
        // className={({ isActive }) => (isActive ? "link-active" : "")}
      >
        {/* Portfolio */}
        {t("header-nav.portfolio")}
      </NavLink>
      <NavLink
        to={routeContactsPage()}
        // className={({ isActive }) => (isActive ? "link-active" : "")}
      >
        {/* Contacts */}
        {t("header-nav.contacts")}
      </NavLink>

      <NavLink
        to={routeMainPage()}
        // className={({ isActive }) => (isActive ? "link-active" : "")}
      >
        <Logotip />
      </NavLink>
    </nav>
  );
};

export default NavBlock;
