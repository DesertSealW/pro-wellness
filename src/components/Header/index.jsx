import React from "react";
import { useLocation } from "react-router-dom";
import SocialBlock from "./SocialBlock";
import NavBlock from "./NavBlock";
import ButtonLangChange from "./ButtonLangChange";

import "./styles.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header
      className={
        location.pathname === "/"
          ? "header header-black"
          : "header header-white"
      }
    >
      <NavBlock />
      <SocialBlock />
      <ButtonLangChange />

      {/* language change button */}
    </header>
  );
};

export default Header;
