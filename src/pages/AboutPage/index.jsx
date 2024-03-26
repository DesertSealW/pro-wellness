import routeMain from "./routes";
import { useEffect, useRef, useState } from "react";
import about1 from "assets/img/aboutPage/about_1_1920.jpg";
import about2 from "assets/img/aboutPage/about_2_1920.jpg";
import styles from "./styles.module.scss";

const AboutPage = () => {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { left, right } = containerRef.current.getBoundingClientRect();
        setOffset({ left, right });
      }
    };
    handleResize(); // Вызываем функцию при монтировании компонента
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={styles.root}
      style={{
        "--distance-to-the-container-far": `${offset.right}px`,
        "--distance-to-the-container": `${offset.left}px`,
        "--width-container": `${offset.right - offset.left}px`,
        "--distance-to-the-container-double": `${offset.left * 2}px`,
      }}
    >
      <div ref={containerRef} className="container">
        <div className={styles.performance1}>
          <h1 className={styles.title1}>
            ПОЛЬЗА, ПРОЧНОСТЬ, <em className={styles.essence}>КРАСОТА</em>
          </h1>
          <p className={styles.epilogue1}>
            Комплексное проектирование объектов для отдыха, здоровья,
            восстановления и активного долголетия
          </p>
        </div>
      </div>

      <img
        src={about1}
        className={styles.aboutFrameRight}
        alt="Накрытый стол"
      />

      <div className="container">
        <div className={styles.performance2}>
          <p className={styles.epilogue2}>
            Мы — №1 в проектировании велнес и фитнес объектов.
          </p>
          <h2 className={styles.title2}>
            Три шага <em className={styles.essence}>успеха</em>
          </h2>
        </div>
      </div>
      <img src={about2} className={styles.aboutFrameLeft} alt="Бассейн" />
      <div className="container">
        <div className={styles.performance3}>
          <p className={styles.epilogue3}>
            Создание концепции состоит из трех основных шагов, связанных между
            собой
          </p>

          <ul className={styles.list3}>
            <li>
              Основная идея создаваемого бизнеса (для конкретного Объекта или
              Проекта).
            </li>
            <li>
              Бизнес модель предприятия с точки зрения жизнедеятельности Объекта
              или Проекта.
            </li>
            <li>Портфель продуктов и специализация предприятия.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { routeMain };
export default AboutPage;
