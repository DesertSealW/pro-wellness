import Hero from "components/MainSections/Hero";
import routeMain from "./routes";
import PortfolioSection from "components/MainSections/PortfolioSection";
import AboutSection from "components/MainSections/AboutSection";
import ServicesSection from "components/MainSections/ServicesSection";
import DiscussionSection from "components/MainSections/DiscussionSection";

import "./styles.module.scss";

const MainPage = () => {
  return (
    <>
      <Hero />
      <PortfolioSection />
      <AboutSection />
      <ServicesSection />
      {/* <DiscussionSection /> */}
    </>
  );
};

export { routeMain };
export default MainPage;
