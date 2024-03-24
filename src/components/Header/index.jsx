import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialBlock from "./SocialBlock";
import NavBlock from "./NavBlock";
import Logotip from "./Logotip";
import burger from "assets/img/burger3.svg";
import { routeMain as routeMainPage } from "pages/MainPage";
import ModalWindow from "components/AppContent/ModalWindow";
import styles from "./styles.module.scss";

const Header = () => {
  const location = useLocation();
  const [modalMenu, setModalMenu] = useState(false);
  // console.log(location.pathname);
  // debugger;

  return (
    <header
      className={`${styles.root} ${
        location.pathname === "/" ? styles.bgDark : styles.bgLate
      }`}
    >
      {/* <div className={styles.container}> */}
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.navBlock}>
            <NavBlock />
          </div>
          <div className={styles.logo}>
            <Link to={routeMainPage()}>
              <Logotip
                pathname={location.pathname}
                className={styles.Logotip}
              />
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.socialBlock}>
              <SocialBlock pathname={location.pathname} />
              {/* <ButtonLangChange pathname={location.pathname} /> */}
            </div>

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
          </div>
        </div>
      </div>
      {modalMenu && (
        <ModalWindow onClose={() => setModalMenu(false)}>
          <div>
            <h1>МОДАЛЬНОЕ ОКНО</h1>
            <br />
            <p>НАХОДИТСЯ В ПРОЦЕССЕ РАЗРАБОТКИ</p>
            <br />
            <br />
            <p>СКОРО ТУТ БУДЕТ МЕНЮ</p>
            <br />
          </div>
        </ModalWindow>
      )}
    </header>
  );
};

export default Header;
