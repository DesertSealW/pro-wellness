import React from "react";
import { Link, useLocation } from "react-router-dom";
import SocialBlock from "./SocialBlock";
import NavBlock from "./NavBlock";
import Logotip from "./Logotip";
// import ButtonLangChange from "./ButtonLangChange";
import { routeMain as routeMainPage } from "pages/MainPage";

import styles from "./styles.module.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.root}>
      {/* <div className={styles.container}> */}
      <div className="container">
        <div className={styles.wrapper}>
          <NavBlock pathname={location.pathname} />
          <div className={styles.logo}>
            <Link to={routeMainPage()}>
              <Logotip />
            </Link>
          </div>
          <div className={styles.right}>
            <SocialBlock pathname={location.pathname} />
            {/* <ButtonLangChange pathname={location.pathname} /> */}
          </div>
        </div>
      </div>
    </header>

    // <header
    //   className={
    //     location.pathname === "/"
    //       ? "header header-black"
    //       : "header header-white"
    //   }
    // >
    //   <NavBlock pathname={location.pathname} />
    //   <SocialBlock pathname={location.pathname} />
    //   <ButtonLangChange pathname={location.pathname} />

    //   {/* language change button */}
    // </header>
  );
};

export default Header;
