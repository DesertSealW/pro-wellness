import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialBlock from "./SocialBlock";
import NavBlock from "./NavBlock";
import Logotip from "./Logotip";
import burger from "assets/img/burger_White.svg";
import icon from "assets/social-icons/telegram_black.svg";
// import ButtonLangChange from "./ButtonLangChange";
import { routeMain as routeMainPage } from "pages/MainPage";

import styles from "./styles.module.scss";
import ModalWindow from "components/AppContent/ModalWindow";

const Header = () => {
  const location = useLocation();
  const [modalMenu, setModalMenu] = useState(false);

  // console.log("Я тут", modalMenu);
  // debugger;
  return (
    <header className={styles.root}>
      {/* <div className={styles.container}> */}
      <div className="container">
        <div className={styles.wrapper}>
          <NavBlock pathname={location.pathname} />
          <div className={styles.logo}>
            <Link to={routeMainPage()}>
              <Logotip className={styles.Logotip} />
            </Link>
          </div>
          <div className={styles.right}>
            <SocialBlock pathname={location.pathname} />
            {/* <ButtonLangChange pathname={location.pathname} /> */}
          </div>
          {/* <div className={styles.burger}> */}
          <button
            type="button"
            className={styles.burger}
            onClick={(e) => {
              e.stopPropagation();
              setModalMenu(true);
            }}
          >
            <img src={burger} alt="Кнопка бургера" />
          </button>
          {/* </div> */}
        </div>
      </div>
      {modalMenu && (
        <ModalWindow onClose={() => setModalMenu(false)}>
          <div>
            <h1>Дорогой друг!</h1>
            <br />
            <p>Тут скоро будет модальное меню</p>
            <br />
            <p>А пока выпей кваску</p>
          </div>
        </ModalWindow>
      )}
    </header>
  );
};

export default Header;
