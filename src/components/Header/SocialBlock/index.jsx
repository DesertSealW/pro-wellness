import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import whatsUp_white from "assets/social-icons/whatsUp_white.svg";
import whatsUp_gold from "assets/social-icons/whatsUp_gold.svg";
import pinterest_white from "assets/social-icons/pinterest_white.svg";
import pinterest_gold from "assets/social-icons/pinterest_gold.svg";
import instagram_white from "assets/social-icons/instagram_white.svg";
import instagram_gold from "assets/social-icons/instagram_gold.svg";
import telegram_white from "assets/social-icons/telegram_white.svg";
import telegram_gold from "assets/social-icons/telegram_gold.svg";

import styles from "./styles.module.scss";

const SocialBlock = () => {
  // const [color, setColor] = useState("gold");
  // const pathname = useLocation().pathname;
  // const pathname = "Костыль";

  // useEffect(() => {
  //   if (pathname === "/") {
  //     setColor("white");
  //   } else {
  //     setColor("gold");
  //   }
  // }, [pathname]);

  const color = "gold";

  return (
    <ul className={styles.social}>
      <li>
        <img
          src={color !== "gold" ? whatsUp_white : whatsUp_gold}
          alt="whatsUp icon"
        />
      </li>
      <li>
        <img
          src={color !== "gold" ? pinterest_white : pinterest_gold}
          alt="pinterest icon"
        />
      </li>
      <li>
        <img
          src={color !== "gold" ? instagram_white : instagram_gold}
          alt="instagram icon"
        />
      </li>
      <li>
        <img
          src={color !== "gold" ? telegram_white : telegram_gold}
          alt="telegram icon"
        />
      </li>
    </ul>
  );
};

export default SocialBlock;
