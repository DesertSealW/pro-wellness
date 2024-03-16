import ServiceLine from "./ServiceLine";
import styles from "./styles.module.scss";

const ServicesSection = () => {
  return (
    <div className={styles.root}>
      {/* <div className={styles.container}> */}
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.services}>УСЛУГИ</h2>
          <div className={styles.kinds}>
            <ServiceLine tip="АРХИТЕКТУРА" description="Создание концепции" />
            <ServiceLine
              tip="КОНЦЕПЦИЯ"
              description="Комплексное проектирование велнес, фитнес и объектов
                здравоохранения"
              className={styles.line}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
