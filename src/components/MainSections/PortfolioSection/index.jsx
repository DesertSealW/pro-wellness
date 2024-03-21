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
            <picture>
              <source srcset={link1_1920} media="(max-width: 1280px)" />
              <source srcset={link1_1280} media="(max-width: 800px)" />
              <img
                src={link1_1920}
                className={styles.bigImg}
                alt="Банный комплекс 'Карелия"
              />
            </picture>
            <div className={styles.coment1}>Банный комплекс "Карелия"</div>
            <div className={styles.coment2}>
              Здания, фасады, благоустройство
            </div>
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
              <div className={styles.coment1}>Санаторий Таежный</div>
              <div className={styles.coment2}>
                Здания, фасады, благоустройство
              </div>
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
              <div className={styles.coment1}>Институт им. Хлопина</div>
              <div className={styles.coment2}>
                Здания, фасады, благоустройство
              </div>
            </div>
          </div>
        </div>

        <div className={styles.down}>
          <Link to={routeDevelopmentPage()}>
            <div className={styles.get}>ВСЕ РАБОТЫ</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
