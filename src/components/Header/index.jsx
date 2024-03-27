import React, { useState } from "react";
import { Link, } from "react-router-dom";
import SocialBlock from "./SocialBlock";
import NavBlock from "./NavBlock";
import Logotip from "./Logotip";
import burger from "assets/img/burger3.svg";
import burger_black_line from "assets/img/burger_Black_line_3.svg";
import { routeMain as routeMainPage } from "pages/MainPage";
import DropDown from "./DropDown";
import styles from "./styles.module.scss";

const Header = () => {
  // const pathname = useLocation().pathname;
  const pathname = "Костыль";
  const [modalMenu, setModalMenu] = useState(false);
  // console.log(location.pathname);
  // debugger;

  return (
    <header
      className={styles.root}
      // className={`${styles.root} ${
      //   pathname === "/" ? styles.bgDark : styles.bgLate
      // }`}
    >
      {/* <div className={styles.container}> */}
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.navBlock}>
            <NavBlock />
          </div>
          <div className={styles.logo}>
            <Link to={routeMainPage()}>
              <Logotip pathname={pathname} className={styles.Logotip} />
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.socialBlock}>
              <SocialBlock pathname={pathname} />
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
              <img
                src={pathname === "/" ? burger : burger_black_line}
                alt="Кнопка бургера"
              />
            </button>
          </div>
        </div>
      </div>
      {
        modalMenu && <DropDown onClose={() => setModalMenu(false)} />
        // (
        //   <ModalWindow onClose={() => setModalMenu(false)}>
        //     <div>
        //       <h1>МОДАЛЬНОЕ ОКНО</h1>
        //       <br />
        //       <p>НАХОДИТСЯ В ПРОЦЕССЕ РАЗРАБОТКИ</p>
        //       <br />
        //       <br />
        //       <p>СКОРО ТУТ БУДЕТ МЕНЮ</p>
        //       <br />
        //     </div>
        //   </ModalWindow>
        // )
      }
    </header>
  );
};

export default Header;
