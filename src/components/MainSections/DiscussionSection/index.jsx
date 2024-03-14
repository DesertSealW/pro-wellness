import SendingForm from "./SendingForm";
import styles from "./styles.module.scss";

const DiscussionSection = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        ОБСУДИМ <span className={styles.gold}>ВАШ</span> ПРОЕКТ?
      </h2>
      <p className={styles.tell}>
        Расскажите нам о своей идее, и мы скоро свяжемся с вами
      </p>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <SendingForm />
        </div>
      </div>
    </div>
  );
};

export default DiscussionSection;
