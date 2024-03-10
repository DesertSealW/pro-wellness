import { useLocation } from "react-router-dom";
import Logo_Long_Bronze from "assets/Logo_Long_Bronze.svg";
import Logo_Long_White from "assets/Logo_Long_White.svg";
import "./styles.scss";

const Logotip = () => {
  const location = useLocation();
  return (
    <img
      className="logo"
      src={location.pathname === "/" ? Logo_Long_White : Logo_Long_Bronze}
      alt="Логотип"
    />
  );
};

export default Logotip;
