import { Link } from "react-router-dom";

import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import img from "assets/img/mainAboutSection/aboutN.png";
import styles from "./styles.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.performance}>
          <div className={styles.philosophy}>НАША ФИЛОСОФИЯ</div>
          <h2 className={styles.title}>
            <span className={styles.free}>НЕМНОГО</span>
            <span className={styles.overlap}>О НАС</span>
          </h2>
        </div>
      </div>
      <div className={styles.noLeftBorder}>
        <div className={styles.wrapper}>
          <div className={styles.pict}>
            <img
              src={img}
              className={styles.pict}
              alt="Дерево на фоне здания"
            />
          </div>
          <div className={styles.description}>
            <p>Мы — №1 в проектировании велнес и фитнес объектов.</p>
            <p>
              Качество нашей работы сформировано многолетним опытом, и мы точно
              знаем:
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
          <Link to={routeDevelopmentPage()}>
            <div className={styles.more}>УЗНАТЬ БОЛЬШЕ</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
