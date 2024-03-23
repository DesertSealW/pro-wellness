import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import link1_1920 from "assets/img/mainPortfolioSection/1920Link1.png";
import link2_1920 from "assets/img/mainPortfolioSection/1920Link2.png";
import link3_1920 from "assets/img/mainPortfolioSection/1920Link3.png";
import link1_1280 from "assets/img/mainPortfolioSection/1280Link1.png";
import link2_1280 from "assets/img/mainPortfolioSection/1280Link2.png";
import link3_1280 from "assets/img/mainPortfolioSection/1280Link3.png";

const PortfolioSection = () => {
  return (
    <section className={styles.root}>
      {/* <div className={styles.container}> */}
      <div className="container">
        <div className={styles.performance}>
          <div className={styles.left}>
            <p className={styles.works}>НАШИ ВЫПОЛНЕННЫЕ РАБОТЫ</p>
            <Link to={routeDevelopmentPage()}>
              <h2 className={styles.title}>ПОРТФОЛИО</h2>
            </Link>
          </div>
          <div className={styles.right}>
            <Link to={routeDevelopmentPage()}>
              <p className={styles.get}>ВСЕ РАБОТЫ</p>
            </Link>
          </div>
        </div>
        <div className={styles.trio}>
          <div>
            <picture>
              <source srcset={link1_1920} media="(max-width: 1280px)" />
              <source srcset={link1_1280} media="(max-width: 800px)" />
              <img
                src={link1_1920}
                className={styles.bigImg}
                alt="Банный комплекс 'Карелия"
              />
            </picture>
            <p className={styles.coment1}>Банный комплекс "Карелия"</p>
            <p className={styles.coment2}>Здания, фасады, благоустройство</p>
          </div>
          <div className={styles.two}>
            <div>
              <picture>
                <source srcset={link2_1920} media="(max-width: 1280px)" />
                <source srcset={link2_1280} media="(max-width: 800px)" />
                <img
                  src={link2_1920}
                  className={styles.smolImg}
                  alt="Санаторий Таежный"
                />
              </picture>
              <p className={styles.coment1}>Санаторий Таежный</p>
              <p className={styles.coment2}>Здания, фасады, благоустройство</p>
            </div>
            <div>
              <picture>
                <source srcset={link3_1920} media="(max-width: 1280px)" />
                <source srcset={link3_1280} media="(max-width: 800px)" />
                <img
                  src={link3_1920}
                  className={styles.smolImg}
                  alt="Институт им. Хлопина"
                />
              </picture>
              <p className={styles.coment1}>Институт им. Хлопина</p>
              <p className={styles.coment2}>Здания, фасады, благоустройство</p>
            </div>
          </div>
        </div>

        <div className={styles.down}>
          <Link to={routeDevelopmentPage()}>
            <p className={styles.get}>ВСЕ РАБОТЫ</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
