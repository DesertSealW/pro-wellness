import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>
        <span className={styles.strFirst}>ПРОСТРАНСТВО</span>
        <span className={styles.strSecond}>ФОРМИРУЕТ СОЗНАНИЕ</span>
      </h1>

      <div className={styles.creating}>Создаем среду, комфортную для жизни</div>
      <button className={styles.callButton} type="button">
        Свяжитесь с нами
      </button>
    </section>
  );
};

export default Hero;
