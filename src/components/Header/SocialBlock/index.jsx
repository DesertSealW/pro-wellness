// import pinterest_gold from "assets/social-icons/pinterest_gold.svg";
// import instagram_gold from "assets/social-icons/instagram_gold.svg";
// import whatsUp_gold from "assets/social-icons/whatsUp_gold.svg";
// import telegram_gold from "assets/social-icons/telegram_gold.svg";
// import pinterest_white from "assets/social-icons/pinterest_white.svg";
// import instagram_white from "assets/social-icons/instagram_white.svg";
// import whatsUp_white from "assets/social-icons/whatsUp_white.svg";
// import telegram_white from "assets/social-icons/telegram_white.svg";

import telegram_black from "assets/social-icons/telegram_black.svg";
import viber_black from "assets/social-icons/viber_black.svg";
import phone_black from "assets/social-icons/phone_black.svg";

import styles from "./styles.module.scss";

const SocialBlock = (pathname) => {
  return (
    <ul className={styles.social}>
      <li>
        <img src={telegram_black} alt="telegram icon" />
      </li>
      <li>
        <img src={viber_black} alt="viber icon" />
      </li>
      <li>
        <img src={phone_black} className={styles.phone} alt="phone icon" />
      </li>
    </ul>
  );
};

export default SocialBlock;
