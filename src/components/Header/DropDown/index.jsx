import { NavLink } from "react-router-dom";
import { routeMain as routeAboutPage } from "pages/AboutPage";
import { routeMain as routeContactsPage } from "pages/ContactsPage";
import { routeMain as routePortfolioPage } from "pages/PortfolioPage";

import styles from "./styles.module.scss";
import ModalWindow from "components/ServiceСomponents/ModalWindow";
import SocialBlock from "../SocialBlock";

const DropDown = ({ onClose }) => {
  return (
    <ModalWindow onClose={onClose}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.menu}>
            <li>
              <NavLink to={routeAboutPage()} className={styles.item}>
                О НАС
              </NavLink>
            </li>
            <li>
              <NavLink to={routePortfolioPage()} className={styles.item}>
                ПОРТФОЛИО
              </NavLink>
            </li>
            <li>
              <NavLink to={routeContactsPage()} className={styles.item}>
                КОНТАКТЫ
              </NavLink>
            </li>
          </ul>
        </nav>

        <SocialBlock className={styles.social} />
      </div>
    </ModalWindow>
  );
};

export default DropDown;
