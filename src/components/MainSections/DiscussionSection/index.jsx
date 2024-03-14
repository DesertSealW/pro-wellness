// import SendingForm from "./SendingForm";
import styles from "./styles.module.scss";

const DiscussionSection = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        свяжитесь <span className={styles.gold}>с нами</span>
      </h2>

      <div className={styles.wrapper}>
        <div className={styles.container}></div>
      </div>
    </div>
  );
};

export default DiscussionSection;
