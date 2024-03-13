import Hero from "components/MainSections/Hero";
import routeMain from "./routes";
import PortfolioSection from "components/MainSections/PortfolioSection";
import AboutSection from "components/MainSections/AboutSection";

import "./styles.scss";

const MainPage = () => {
  return (
    <>
      <Hero />
      <PortfolioSection />
      <AboutSection />
    </>
  );
};

export { routeMain };
export default MainPage;
