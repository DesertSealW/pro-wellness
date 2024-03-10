// import { useTranslation } from "react-i18next";
import i18n from "utils/i18n";
import { useState } from "react";

import styles from "./styles.module.scss";

const ButtonLangChange = (pathname) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(i18n.language);
  };

  return (
    <button
      className={
        pathname !== "/"
          ? `${styles.switch} ${styles.dark}`
          : `${styles.switch} ${styles.light}`
      }
      onClick={() => changeLanguage(currentLanguage === "ru" ? "en" : "ru")}
    >
      {currentLanguage.toUpperCase()}
    </button>
  );
};

export default ButtonLangChange;
