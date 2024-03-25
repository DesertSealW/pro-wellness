// import { Link } from "react-router-dom";
import routeMain from "./routes";
// import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import contacts from "assets/img/contactsPage/1920Contacts.jpg";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import ContactsList from "./ContactsList";

const ContactsPage = () => {
  const blockRef = useRef(null);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState("0px");
  const [interval, setIntervalRight] = useState("70vw");

  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const offset = `${blockRef.current.getBoundingClientRect().left}px`;
        setOffset(offset);
      }
      if (containerRef.current) {
        const { right } = containerRef.current.getBoundingClientRect();
        setIntervalRight(`${right}px`);
      }
    };
    handleResize(); // Вызываем функцию при монтировании компонента
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.root}>
      <div className={styles.wrapper} style={{ "--distance-block": offset }}>
        <div className="container" ref={containerRef}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.performance}>
                <p className={styles.ourСontacts}>НАШИ КОНТАКТЫ</p>
                <h2 className={styles.title}>
                  СВЯЗАТЬСЯ
                  <em>С НАМИ</em>
                </h2>
              </div>
            </div>
            <div ref={blockRef} className={styles.right}>
              <ContactsList />
            </div>
          </div>
        </div>
      </div>

      <img
        style={{ "--interval-container": interval }}
        src={contacts}
        className={styles.contactsFrame}
        alt="Спортивный зал. Стелаж с гантелями"
      />

      <div className={styles.down}>
        <div className="container">
          <ContactsList />
        </div>
      </div>

      {/* <SendingForm /> */}
    </section>
  );
};

export { routeMain };
export default ContactsPage;
