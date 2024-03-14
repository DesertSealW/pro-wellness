import { Link } from "react-router-dom";
import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import logo from "assets/img/logo_white.svg";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <div>
              <img src={logo} alt="Логотип" />
            </div>
            <p>Все права защищены © 2023</p>
            <p>Сделано в Deviart</p>
          </div>
          <div className={styles.second}>
            <Link to={routeDevelopmentPage()}>
              <div className={styles.more}>ПОРТФОЛИО</div>
            </Link>
            <Link to={routeDevelopmentPage()}>
              <div className={styles.more}>О нас</div>
            </Link>
          </div>
          <div className={styles.third}>
            <div>КОНТАКТЫ</div>
            <ul>
              <li>+7 (812) 408-4151</li>
              <li>info@taiga-arch.com</li>
            </ul>
          </div>
          <div className={styles.fourth}>НАВЕРХ</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
