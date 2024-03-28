import { NavLink } from "react-router-dom";
import { routeMain as routeAboutPage } from "pages/AboutPage";
import { routeMain as routeContactsPage } from "pages/ContactsPage";
import { routeMain as routePortfolioPage } from "pages/PortfolioPage";

import styles from "./styles.module.scss";
import ModalWindow from "components/ServiceСomponents/ModalWindow";
import SocialBlock from "../SocialBlock";
import NavBlock from "../NavBlock";

const DropDown = ({ onClose }) => {
  return (
    <ModalWindow onClose={onClose}>
      <div className={styles.wrapper}>
        <div className={styles.navBlock} onClick={() => onClose(false)}>
          <NavBlock />
        </div>

        <div className={styles.social} onClick={() => onClose(false)}>
          <SocialBlock />
        </div>
      </div>
    </ModalWindow>
  );
};

export default DropDown;
