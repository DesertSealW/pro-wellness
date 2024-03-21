import { useState } from "react";
import ModalWindow from "components/AppContent/ModalWindow";
import styles from "./styles.module.scss";
import FeedbackForm from "../FeedbackForm";

const ServiceLine = ({ tip, description }) => {
  const [submitted, setSubmitted] = useState(false);
  // const [openForm, setOpenForm] = useState(false);
  const [isFormOpened, setIsFormOpened] = useState(false);
  // console.log(isFormOpened);
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <div className={styles.tip}>{tip}</div>
        <p className={`${styles.description} ${styles.show1}`}>
          {description}{" "}
        </p>

        <button
          className={styles.request}
          onClick={(e) => {
            e.stopPropagation();
            setIsFormOpened(true);
          }}
        >
          Оставить запрос
        </button>

        {isFormOpened && (
          <ModalWindow onClose={() => setIsFormOpened(false)}>
            <FeedbackForm submitted={submitted} setSubmitted={setSubmitted} />
          </ModalWindow>
        )}
      </div>
      <p className={`${styles.description} ${styles.show2}`}>
        {description}
      </p>
    </div>
  );
};

export default ServiceLine;
