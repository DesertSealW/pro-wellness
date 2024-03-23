// import about1920 from "assets/img/mainAboutSection/1920about.png";
import about1280 from "assets/img/mainAboutSection/1280about.png";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Description from "./Description";

const AboutSection = () => {
  const blockRef = useRef(null);
  const containerRef = useRef(null);
  const [distance, setDistance] = useState("70vw");
  const [interval, setIntervalRight] = useState("70vw");

  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const { left } = blockRef.current.getBoundingClientRect();
        // console.log(left);
        setDistance(`${left}px`);
      }

      if (containerRef.current) {
        const { right } = containerRef.current.getBoundingClientRect();
        // console.log(right);
        setIntervalRight(`${right}px`);
      }
    };

    handleResize(); // Вызываем функцию при монтировании компонента
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // <span className={styles.free}>НЕМНОГО</span>
  // <span className={styles.overlap}>О НАС</span>
  return (
    <section className={styles.root}>
      <div ref={containerRef} className="container">
        <div className={styles.performance}>
          <p className={styles.philosophy}>НАША ФИЛОСОФИЯ</p>
          <h2 className={styles.title}>
            НЕМНОГО <em>{"  "}О НАС</em>
          </h2>
        </div>
      </div>
      <img
        style={{ "--interval-container": interval }}
        src={about1280}
        className={styles.aboutFrame}
        alt="Спортивный зал. Стелаж с гантелями"
      />

      {/* Исчезает при < 1024 */}
      <div className={styles.content}>
        <div
          style={{ "--pseudo-element-width": distance }}
          className={styles.wrapper}
        >
          <div className="container">
            <div ref={blockRef} className={styles.right}>
              <Description />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.down}>
        <Description />
        {/* <Jamp /> */}
      </div>
    </section>
  );
};

export default AboutSection;
