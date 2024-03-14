import { Link } from "react-router-dom";

import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import img from "assets/img/mainAboutSection/div.tn-atom.png";
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
            <img src={img} alt="Дерево на фоне здания" />
          </div>
          <div className={styles.description}>
            <p>Архитектура с характером!</p>
            <p>
              Создаем уникальную архитектуру и интерьеры, являющиеся синтезом
              индивидуальности заказчика и  нашего представления о  прекрасном.
            </p>
            <p>Позвольте себе индивидуальность!</p>
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
