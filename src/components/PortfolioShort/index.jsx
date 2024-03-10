import DevelopmentPage from "pages/DevelopmentPage";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import link1 from "assets/img/portfolio/Link1.png";
import link2 from "assets/img/portfolio/Link2.png";
import link3 from "assets/img/portfolio/Link3.png";

const PortfolioShort = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.performance}>
          <div className={styles.left}>
            <div className={styles.works}>НАШИ ВЫПОЛНЕННЫЕ РАБОТЫ</div>
            <Link to={DevelopmentPage}>
              <div className={styles.title}>ПОРТФОЛИО</div>
            </Link>
          </div>
          <div className={styles.right}>
            <Link to={DevelopmentPage}>
              <div className={styles.get}>ВСЕ РАБОТЫ</div>
            </Link>
          </div>
        </div>
        <div className={styles.trio}>
          <div>
            <img src={link1} alt="ВИЛЛА В ГОРАХ" />
            <div className={styles.coment1}>ВИЛЛА В ГОРАХ</div>
            <div className={styles.coment2}>
              Роскошная вилла в нашей стилистике
            </div>
          </div>
          <div className={styles.two}>
            <div>
              <img src={link2} alt="ДОМ В ЯПОНИИ" />
              <div className={styles.coment1}>ДОМ В ЯПОНИИ</div>
              <div className={styles.coment2}>
                Современный дом 1650м2 с этническими мотивами
              </div>
            </div>
            <div>
              <img src={link3} alt="ВИЛЛА С ГОЛЬФ-ПОЛЕМ В ЗАВИДОВО" />
              <div className={styles.coment1}>
                ВИЛЛА С ГОЛЬФ-ПОЛЕМ В ЗАВИДОВО
              </div>
              <div className={styles.coment2}>
                Вилла 3800 м2 с гольф-полем в Завидово
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShort;
