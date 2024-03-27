import React, { useRef, useEffect, useState } from "react";

const СhangingСolorTheme = () => {
  const [hasBlackBackground, setHasBlackBackground] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkPosition = () => {
      if (ref.current) {
        const elemTop = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const windowMiddle = windowHeight / 2;

        if (elemTop <= windowMiddle && !hasBlackBackground) {
          setHasBlackBackground(true);
          document.body.classList.add("switchBackgroundColor");
        } else if (elemTop > windowMiddle && hasBlackBackground) {
          setHasBlackBackground(false);
          document.body.classList.remove("switchBackgroundColor");
        }
      }
    };

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", checkPosition);

    checkPosition(); // Проверяем при монтировании компонента

    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, [ref, hasBlackBackground]);

  return <div ref={ref}> </div>;
};

export default СhangingСolorTheme;

// import React, { useRef, useEffect } from "react";

// const СhangingСolorTheme = () => {
//   const ref = useRef(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const isIntersecting = entries[0].isIntersecting;
//         document.body.classList.toggle("switchBackgroundColor", isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     const currentRef = ref.current;

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, []);

//   return <div ref={ref}></div>;
// };

// export default СhangingСolorTheme;
