import pinterest_gold from "assets/social-icons/pinterest_gold.svg";
import instagram_gold from "assets/social-icons/instagram_gold.svg";
import whatsUp_gold from "assets/social-icons/whatsUp_gold.svg";
import telegram_gold from "assets/social-icons/telegram_gold.svg";
import pinterest_white from "assets/social-icons/pinterest_white.svg";
import instagram_white from "assets/social-icons/instagram_white.svg";
import whatsUp_white from "assets/social-icons/whatsUp_white.svg";
import telegram_white from "assets/social-icons/telegram_white.svg";

import styles from "./styles.module.scss";

const SocialBlock = (pathname) => {
  return (
    <ul className={styles.social}>
      <li>
        <img
          src={pathname !== "/" ? whatsUp_white : whatsUp_gold}
          alt="whatsUp icon"
        />
      </li>
      <li>
        <img
          src={pathname !== "/" ? pinterest_white : pinterest_gold}
          alt="pinterest icon"
        />
      </li>
      <li>
        <img
          src={pathname !== "/" ? instagram_white : instagram_gold}
          alt="instagram icon"
        />
      </li>
      <li>
        <img
          src={pathname !== "/" ? telegram_white : telegram_gold}
          alt="telegram icon"
        />
      </li>
    </ul>
  );
};

export default SocialBlock;
