import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import link1 from "assets/img/mainPortfolioSection/Link1N.png";
import link2 from "assets/img/mainPortfolioSection/Link2N.png";
import link3 from "assets/img/mainPortfolioSection/Link3N.png";

const PortfolioSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.performance}>
          <div className={styles.left}>
            <div className={styles.works}>НАШИ ВЫПОЛНЕННЫЕ РАБОТЫ</div>
            <Link to={routeDevelopmentPage()}>
              <h2 className={styles.title}>ПОРТФОЛИО</h2>
            </Link>
          </div>
          <div className={styles.right}>
            <Link to={routeDevelopmentPage()}>
              <div className={styles.get}>ВСЕ РАБОТЫ</div>
            </Link>
          </div>
        </div>
        <div className={styles.trio}>
          <div>
            <img
              src={link1}
              className={styles.bigImg}
              alt="Банный комплекс 'Карелия'"
            />
            <div className={styles.coment1}>Банный комплекс "Карелия"</div>
            <div className={styles.coment2}>
              Здания, фасады, благоустройство
            </div>
          </div>
          <div className={styles.two}>
            <div>
              <img
                src={link2}
                className={styles.smolImg}
                alt="Санаторий Таежный"
              />
              <div className={styles.coment1}>Санаторий Таежный</div>
              <div className={styles.coment2}>
                Здания, фасады, благоустройство
              </div>
            </div>
            <div>
              <img
                src={link3}
                className={styles.smolImg}
                alt="ВИЛЛА С ГОЛЬФ-ПОЛЕМ В ЗАВИДОВОИнститут им. Хлопина"
              />
              <div className={styles.coment1}>Институт им. Хлопина</div>
              <div className={styles.coment2}>
                Здания, фасады, благоустройство
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
