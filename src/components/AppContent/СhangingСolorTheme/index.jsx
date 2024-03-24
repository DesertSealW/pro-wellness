import React, { useRef, useEffect } from "react";

const СhangingСolorTheme = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        document.body.classList.toggle("switchBackgroundColor", isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const currentRef = ref.current;

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return <div ref={ref}></div>;
};

export default СhangingСolorTheme;
