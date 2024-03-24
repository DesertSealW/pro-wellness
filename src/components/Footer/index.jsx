import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import logo_white from "assets/img/logo_white.svg";
import logo_black from "assets/img/logo_Black.svg";
import styles from "./styles.module.scss";
import hexToRgb from "utils/hexToRgb";
import removeAlphaFromRgb from "utils/removeAlphaFromRgb";

const Footer = () => {
  const [isTop, setIsTop] = useState(true);
  const body = document.body;

  const lightColor = hexToRgb(
    getComputedStyle(body).getPropertyValue("--light").trim()
  ); // Получаем значение переменной --light
  console.log(lightColor);
  // const currentBackgroundColor =
  //   getComputedStyle(body).getPropertyValue("--background-color");

  const [currentBackgroundColor, setСurrentBackgroundColor] = useState("");

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

  useEffect(() => {
    const handleBackgroundColorChange = () => {
      const newColor = removeAlphaFromRgb(
        window.getComputedStyle(document.body).backgroundColor
      );

      console.log("newColor", newColor);
      setСurrentBackgroundColor(newColor);
    };

    handleBackgroundColorChange();
    document.body.addEventListener(
      "transitionend",
      handleBackgroundColorChange
    );

    return () => {
      document.body.removeEventListener(
        "transitionend",
        handleBackgroundColorChange
      );
    };
  }, []);

  return (
    <div className={styles.root}>
      {/* <div className={styles.container}> */}
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <div>
              <img
                src={
                  currentBackgroundColor !== lightColor
                    ? logo_black
                    : logo_white
                }
                alt="Логотип"
              />
            </div>
            <p className={styles.entitlement}>Все права защищены © 2023</p>
            <p>Сделано в Deviart</p>
          </div>
          <div className={styles.menus}>
            <div className={styles.second}>
              <nav>
                <Link to={routeDevelopmentPage()}>
                  <p className={styles.portfolio}>ПОРТФОЛИО</p>
                </Link>
                <ul className={styles.list}>
                  <li>
                    <Link to={routeDevelopmentPage()}>
                      <p className={styles.item}>КОНЦЕПЦИЯ</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={routeDevelopmentPage()}>
                      <p className={styles.item}>АРХИТЕКТУРА</p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.third}>
              <Link to={routeDevelopmentPage()}>
                <p className={styles.contacts}>КОНТАКТЫ</p>
              </Link>
              <ul className={styles.list}>
                <li>
                  <a className={styles.item} href="tel:+78124084151">
                    +7 (812) 408-4151
                  </a>
                </li>
                <li>
                  <a className={styles.item} href="mailto:info@taiga-arch.com">
                    info@taiga-arch.com
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
    </div>
  );
};

export default Footer;
