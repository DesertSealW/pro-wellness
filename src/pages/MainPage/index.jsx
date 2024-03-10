import Hero from "components/Hero";
import routeMain from "./routes";
// redux

import "./styles.scss";
import PortfolioShort from "components/PortfolioShort";

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
