import styles from "./styles.module.scss";

const ServicesSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.services}>УСЛУГИ</h2>
          <div className={styles.kinds}>
            <div className={styles.line}>
              <div className={styles.tip}>АРХИТЕКТУРА</div>
              <div className={styles.description}>
                Индивидуальное проектирование эксклюзивных домов и резиденций
              </div>
              <div className={styles.request}>ОСТАВИТЬ ЗАПРОС</div>
            </div>
            <div className={`${styles.line} ${styles.bottomLine}`}>
              <div className={styles.tip}>ИНТЕРЬЕР</div>
              <div className={styles.description}>
                Проектирование интерьеров премиум- класса в эксклюзивной
                стилистике
              </div>
              <div className={styles.request}>ОСТАВИТЬ ЗАПРОС</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
