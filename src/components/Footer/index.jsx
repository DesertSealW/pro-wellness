import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
// import logo_white from "assets/img/logo_White_letters.svg";
import logo_black from "assets/img/logo_Black_letters.svg";
// import logo_black from "assets/img/burger_Black_line_3.png";
import styles from "./styles.module.scss";
// import hexToRgb from "utils/hexToRgb";
// import removeAlphaFromRgb from "utils/removeAlphaFromRgb";

const Footer = () => {
  const [isTop, setIsTop] = useState(true);
  // const body = document.body;

  // const lightColor = hexToRgb(
  //   getComputedStyle(body).getPropertyValue("--light").trim()
  // ); // Получаем значение переменной --light

  // const currentBackgroundColor =
  //   getComputedStyle(body).getPropertyValue("--background-color");

  // const [currentBackgroundColor, setСurrentBackgroundColor] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  // Добавляем прослушиватель для скролла при монтировании компонента
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Убираем прослушиватель при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const handleBackgroundColorChange = () => {
  //     const newColor = removeAlphaFromRgb(
  //       window.getComputedStyle(document.body).backgroundColor
  //     );
  //     setСurrentBackgroundColor(newColor);
  //   };

  //   handleBackgroundColorChange();
  //   document.body.addEventListener(
  //     "transitionend",
  //     handleBackgroundColorChange
  //   );

  //   return () => {
  //     document.body.removeEventListener(
  //       "transitionend",
  //       handleBackgroundColorChange
  //     );
  //   };
  // }, []);

  return (
    <footer className={styles.root}>
      {/* <div className={styles.container}> */}
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <img
              src={
                logo_black
                // currentBackgroundColor !== lightColor
                //   ? logo_white
                //   : logo_black
              }
              alt="Логотип"
            />
            <p className={styles.entitlement}>Все права защищены © 2023</p>
            <p>Сделано в Deviart</p>
          </div>
          <div className={styles.menus}>
            <div className={styles.second}>
              <nav>
                <Link to={routeDevelopmentPage()} className={styles.portfolio}>
                  ПОРТФОЛИО
                </Link>
                <ul className={styles.list}>
                  <li>
                    <Link to={routeDevelopmentPage()} className={styles.item}>
                      КОНЦЕПЦИЯ
                    </Link>
                  </li>
                  <li>
                    <Link to={routeDevelopmentPage()} className={styles.item}>
                      АРХИТЕКТУРА
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.third}>
              <Link to={routeDevelopmentPage()} className={styles.contacts}>
                КОНТАКТЫ
              </Link>
              <ul className={styles.list}>
                <li>
                  <a className={styles.item} href="tel:+79251800099">
                    +7 (925) 180 00 99
                  </a>
                </li>
                <li>
                  <a className={styles.item} href="tel:+79251800099">
                    @prowellness
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.fourth}>
            <button className={styles.goTop} onClick={scrollToTop}>
              НАВЕРХ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
