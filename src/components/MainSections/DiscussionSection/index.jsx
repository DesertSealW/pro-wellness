// import SendingForm from "./SendingForm";
import SendingForm from "./SendingForm";
import styles from "./styles.module.scss";

const DiscussionSection = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        обсудим <span className={styles.gold}>ваш</span> проект?
      </h2>
      <p className={styles.tell}>
        Расскажите нам о своей идее, и мы скоро свяжемся с вами
      </p>
      <div className={styles.wrapper}>
        {/* <div className={styles.container}> */}
        <div className="container">
          <SendingForm />
        </div>
      </div>
    </section>
  );
};

export default DiscussionSection;
