import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>
        <span className={styles.strFirst}>
          <span className={styles.strFirstOne}>Велнес</span>{" "}
          <span className={styles.strFirstTwo}>Фитнес</span>
        </span>
        <span className={styles.strSecond}>проекты</span>
      </h1>

      <div className={styles.creating}>
        Комплексное проектирование объектов для отдыха, здоровья, восстановления
        и активного долголетия
      </div>
      <button className={styles.callButton} type="button">
        СВЯЖИТЕСЬ С НАМИ
      </button>
    </section>
  );
};

export default Hero;
