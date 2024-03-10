// import { useTranslation } from "react-i18next";
import i18n from "i18n";
import "./styles.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ButtonLangChange = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(i18n.language);
  };

  return (
    <button
      className={
        location.pathname === "/"
          ? "button-lang button-lang-black"
          : "button-lang button-lang-white"
      }
      onClick={() => changeLanguage(currentLanguage === "ru" ? "en" : "ru")}
    >
      {currentLanguage.toUpperCase()}
    </button>
  );
};

export default ButtonLangChange;
