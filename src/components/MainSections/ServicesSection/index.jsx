import styles from "./styles.module.scss";

const ServicesSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.services}>УСЛУГИ</h2>
          <div className={styles.kinds}>
            <div className={styles.line}>
              <div className={styles.tip}>КОНЦЕПЦИЯ</div>
              <div className={styles.description}>
                Комплексное проектирование велнес, фитнес и объектов
                здравоохранения
              </div>
              <div className={styles.request}>узнать больше</div>
            </div>
            <div className={`${styles.line} ${styles.bottomLine}`}>
              <div className={styles.tip}>АРХИТЕКТУРА</div>
              <div className={styles.description}>Создание концепции</div>
              <div className={styles.request}>узнать больше</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
