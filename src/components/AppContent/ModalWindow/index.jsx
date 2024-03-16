import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";

const NOOP = () => {};

const ModalWindow = ({ children, onClose = NOOP }) => {
  // console.log("модал");
  // debugger;
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      console.log(event);
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
      <div className={styles.modalWindow} ref={modalRef}>
        <button className={styles.btnExit} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    node
  );
};

export default ModalWindow;
