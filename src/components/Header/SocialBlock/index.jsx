import facebook from "assets/social-icons/facebook.svg";
import instagram from "assets/social-icons/instagram.svg";
import tiktok from "assets/social-icons/tiktok.svg";
import twitter from "assets/social-icons/twitter.svg";

import "./styles.scss";

const SocialBlock = () => {
  return (
    <div className="social__block">
      <img className="social_icon" src={facebook} alt="facebook icon" />
      <img className="social_icon" src={instagram} alt="instagram icon" />
      <img className="social_icon" src={tiktok} alt="tiktok icon" />
      <img className="social_icon" src={twitter} alt="twitter icon" />
    </div>
  );
};

export default SocialBlock;
