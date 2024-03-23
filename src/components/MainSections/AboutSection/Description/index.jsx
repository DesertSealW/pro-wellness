import { Link } from "react-router-dom";
import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import styles from "./styles.module.scss";

const Description = () => {
  return (
    <>
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
      <Link className={styles.more} to={routeDevelopmentPage()}>
        УЗНАТЬ БОЛЬШЕ
      </Link>
    </>
  );
};

export default Description;
