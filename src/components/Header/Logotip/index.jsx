import logo_white from "assets/img/logo_White_letters.svg";
// import logo_black from "assets/img/logo_Black_letters.svg";
import logo_gold from "assets/img/logo_Gold_letters.svg";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Logotip = () => {
  const [logo, setLogo] = useState(logo_white);
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (pathname === "/") {
      setLogo(logo_white);
    } else {
      setLogo(logo_gold);
    }
  }, [pathname]);

  return (
    <img
      className={styles.logo}
      // src={pathname === "/" ? logo_gold : logo_white}
      src={logo}
      alt="Логотип"
    />
  );
};

export default Logotip;
