import { Link } from "react-router-dom";

import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import about1920 from "assets/img/mainAboutSection/1920about.png";
// import about1280 from "assets/img/mainAboutSection/1280about.png";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
// import { useEffect, useRef } from "react";

const AboutSection = () => {
  const blockRef = useRef(null);
  const [distance, setDistance] = useState("70vw");
  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const { left } = blockRef.current.getBoundingClientRect();
        console.log(left);
        setDistance(`${left}px`);
      }
    };
    handleResize(); // Вызываем функцию при монтировании компонента
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.performance}>
          <div className={styles.philosophy}>НАША ФИЛОСОФИЯ</div>
          <h2 className={styles.title}>
            <span className={styles.free}>НЕМНОГО</span>
            <span className={styles.overlap}>О НАС</span>
          </h2>
        </div>
      </div>

      <div className={styles.content}>
        <div
          style={{ "--pseudo-element-width": distance }}
          className={styles.wrapper}
        >
          <div className="container">
            <div ref={blockRef} className={styles.right}>
              <div className={styles.description}>
                <p>Мы — №1 в проектировании велнес и фитнес объектов.</p>
                <p>
                  Качество нашей работы сформировано многолетним опытом, и мы
                  точно знаем:
                </p>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    Что такое рабочий велнес или фитнес проект
                  </li>
                  <li className={styles.item}>Как оптимизировать затраты</li>
                  <li className={styles.item}>
                    Какая концепция действительно работает
                  </li>
                </ul>
              </div>
              <Link className={styles.more} to={routeDevelopmentPage()}>
                УЗНАТЬ БОЛЬШЕ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
