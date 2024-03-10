import AboutPage from "pages/AboutPage";
import { Link } from "react-router-dom";
import "./styles.scss";

const PortfolioShort = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__upper-part upper-part">
        <div className="upper-part__text">НАШИ ВЫПОЛНЕННЫЕ РАБОТЫ</div>
        <Link className="upper-part__link-1 link-1" to={AboutPage}>
          <span className="link-1_text">ПОРТФОЛИО</span>
        </Link>
        <Link className="upper-part__link-2 link-2" to={AboutPage}>
          <span className="link-2_text">Все работы</span>
        </Link>
        <div></div>
      </div>
    </section>
  );
};

export default PortfolioShort;
