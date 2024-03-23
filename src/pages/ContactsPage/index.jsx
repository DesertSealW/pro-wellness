// import { Link } from "react-router-dom";
import routeMain from "./routes";
// import { routeMain as routeDevelopmentPage } from "pages/DevelopmentPage";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import SendingForm from "./SendingForm";
// import { useEffect, useRef } from "react";

const ContactsPage = () => {
  const blockRef = useRef(null);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({
    leftEdgeBlock: "0px", //Дистанция до левого края блока
    leftEdgeContainer: "0px", //Дистанция до правого края блока
    rightEdgeContainer: "0px", //Дистанция до правого края блока
  });

  useEffect(() => {
    var offset = {
      leftEdgeBlock: "0px",
      leftEdgeContainer: "0px",
      rightEdgeContainer: "0px",
    };
    const handleResize = () => {
      if (blockRef.current) {
        offset.leftEdgeBlock = `${
          blockRef.current.getBoundingClientRect().left
        }px`;
        // console.log("до блока", left);
      }

      if (containerRef.current) {
        const { left, right } = containerRef.current.getBoundingClientRect();
        offset.leftEdgeBlock = `${left}px`;
        offset.rightEdgeContainer = `${right}px`;
        // console.log("до края", right);
      }

      setOffset(offset);
    };
    handleResize(); // Вызываем функцию при монтировании компонента
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.root}>
      <div className="container" ref={containerRef}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.performance}>
              <p className={styles.ourСontacts}>НАШИ КОНТАКТЫ</p>
              <h2 className={styles.title}>
                <span className={styles.free}>СВЯЗАТЬСЯ</span>
                <span className={styles.overlap}>С НАМИ</span>
              </h2>
            </div>

            <div
              className={styles.box}
              style={{
                "--distance-block": offset.leftEdgeBlock,
                "--distance-finish-container": offset.rightEdgeContainer,
                "--distance-start-container": offset.leftEdgeContainer,
              }}
            ></div>
          </div>
          <div ref={blockRef} className={styles.right}>
            <div className={styles.description}>
              <div>
                <span>What’s app</span>
                <span>+7 925 180 00 99</span>
              </div>
              <div>
                <span>Telegram</span>
                <span>@prowellness</span>
              </div>
              <div>
                <span>Phone</span>
                <span>+7 925 180 00 99</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SendingForm />
    </section>
  );
};

export { routeMain };
export default ContactsPage;

// import { useEffect, useRef, useState } from "react";
// import routeMain from "./routes";
// import styles from "./styles.module.scss";
// import contactsImg from "assets/img/contactsPage/1920Contacts.jpg";

// const ContactsPage = () => {
//   const blockRef = useRef(null);
//   const containerRef = useRef(null);
//   const [distance, setDistance] = useState("70vw"); //Дистанция до левого края блока
//   const [leftEdgeContainer, setLeftEdgeContainer] = useState("70vw"); //Дистанция до левого края блока

//   useEffect(() => {
//     const handleResize = () => {
//       if (blockRef.current) {
//         const { left } = blockRef.current.getBoundingClientRect();
//         console.log("до края блока", left);
//         setDistance(`${left}px`);
//       }

//       if (containerRef.current) {
//         const { left } = containerRef.current.getBoundingClientRect();
//         console.log("до края контейнера", left);
//         setLeftEdgeContainer(`-${left}px`);
//       }
//     };
//     handleResize(); // Вызываем функцию при монтировании компонента
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <section className={styles.root}>
//       <div className="container" ref={containerRef}>
//         <div className={styles.wrapper}>
//           <div className={styles.left}>
//             <div className={styles.performance}>
//               <div className={styles.philosophy}>НАШИ КОНТАКТЫ</div>
//               <h2 className={styles.title}>
//                 <span className={styles.free}>СВЯЗАТЬСЯ</span>
//                 <span className={styles.overlap}>С НАМИ</span>
//               </h2>
//             </div>
//             <div className={styles.pict}>
//               <img
//                 className={styles.mainPicture}
//                 src={contactsImg}
//                 alt=""
//                 style={{
//                   "--distance-block-with": distance,
//                   "--distance-beginning-container-with": leftEdgeContainer,
//                 }}
//               />
//             </div>
//             <div className={styles.feedback}>Тут будет форма</div>
//           </div>
//           <div className={styles.right} ref={blockRef}>
//             <div>
//               <span>What’s app</span>
//               <span>+7 925 180 00 99</span>
//             </div>
//             <div>
//               <span>Telegram</span>
//               <span>@prowellness</span>
//             </div>
//             <div>
//               <span>Phone</span>
//               <span>+7 925 180 00 99</span>
//             </div>
//           </div>
//         </div>

//         <div className={styles.wrapper}>
//           <div className={styles.right}>
//             <div className={styles.description}></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { routeMain };
// export default ContactsPage;
