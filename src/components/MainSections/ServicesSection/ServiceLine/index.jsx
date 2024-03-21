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
        <div className={`${styles.description} ${styles.show1}`}>
          {description}{" "}
        </div>

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
      <div className={`${styles.description} ${styles.show2}`}>
        {description}
      </div>
    </div>
  );
};

export default ServiceLine;
