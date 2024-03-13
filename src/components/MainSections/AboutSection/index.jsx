import { Link } from "react-router-dom";
import DevelopmentPage from "pages/DevelopmentPage";
import img from "assets/img/mainAboutSection/div.tn-atom.png";
import styles from "./styles.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.performance}>
          <div className={styles.philosophy}>НАША ФИЛОСОФИЯ</div>
          {/* <div> */}
          <h1 className={styles.title}>
            <span className={styles.free}>НЕМНОГО</span>
            <span className={styles.overlap}>О НАС</span>
          </h1>
          {/* </div> */}
        </div>
      </div>
      <div className={styles.noLeftBorder}>
        <div className={styles.wrapper}>
          <div className={styles.pict}>
            <img src={img} alt="Дерево на фоне здания" />
          </div>
          {/* <div className={styles.right}> */}
          <div className={styles.description}>
            <p>Архитектура с характером!</p>
            <p>
              Создаем уникальную архитектуру и интерьеры, являющиеся синтезом
              индивидуальности заказчика и  нашего представления о  прекрасном.
            </p>
            <p>Позвольте себе индивидуальность!</p>
          </div>
          {/* </div> */}

          <Link to={DevelopmentPage}>
            <div className={styles.more}>УЗНАТЬ БОЛЬШЕ</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

// return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//       }}
//     >
//       <div className={styles.jopa}>
//         <p>Часть текста, которая наезжает на картинку</p>
//         <p>Другой текст здесь</p>
//       </div>
//       <div style={{ overflow: "hidden" }}>
//         <img
//           src={img}
//           alt="Крокодил"
//           style={{ marginRight: "20px", marginTop: "-20px" }}
//         />
//       </div>
//     </div>
//   );

export default AboutSection;
