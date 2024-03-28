import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import close from "assets/img/close.svg";
import styles from "./styles.module.scss";

const NOOP = () => {};

const ModalWindow = ({ children, onClose = NOOP }) => {
  // console.log("модал");
  // debugger;
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      // console.log(event);
      // debugger;
      if (
        event.target instanceof Node &&
        !modalRef.current?.contains(event.target)
      ) {
        onClose();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  const node = document.querySelector("#modal_root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div
        className={styles.modalWindow + styles.activemodalWindow}
        ref={modalRef}
      >
        <button className={styles.btnExit} onClick={onClose}>
          <img src={close} alt="Закрыть" />
        </button>
        {children}
      </div>
    </div>,
    node
  );
};

export default ModalWindow;

{
  /* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="#CA8F65"
              d="M18.3 5.7c-.4-.4-1-.4-1.4 0L12 10.6 7.1 5.7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.9 4.9-4.9 4.9c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l4.9-4.9 4.9 4.9c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-4.9-4.9 4.9-4.9c.4-.4.4-1 0-1.4z"
            />
          </svg> */
}
