import Hero from "components/Hero";
import routeMain from "./routes";
import PortfolioShort from "components/PortfolioShort";

import "./styles.scss";

const MainPage = () => {
  return (
    <>
      <Hero />
      <PortfolioShort />
    </>
  );
};

export { routeMain };
export default MainPage;
