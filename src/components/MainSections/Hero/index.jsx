import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>
        <em>
          Велнес
        </em>
          Фитнес проекты
      </h1>
      <p className={styles.creating}>
        Комплексное проектирование объектов для отдыха, здоровья, восстановления
        и активного долголетия
      </p>
      <button className={styles.callButton} type="button">
        СВЯЖИТЕСЬ С НАМИ
      </button>
    </section>
  );
};

export default Hero;
