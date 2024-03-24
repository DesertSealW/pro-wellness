import { Route, Routes } from "react-router-dom";

import AboutPage, { routeMain as routeAboutPage } from "pages/AboutPage";
import ContactsPage, {
  routeMain as routeContactsPage,
} from "pages/ContactsPage";
import PortfolioPage, {
  routeMain as routePortfolioPage,
} from "pages/PortfolioPage";
import MainPage from "pages/MainPage";
import NotFoundPage from "pages/NotFoundPage";
import DevelopmentPage, {
  routeMain as routeDevelopmentPage,
} from "pages/DevelopmentPage";

import Header from "components/Header";

import "./styles.module.scss";
import Footer from "components/Footer";
// import ContactsPage from "pages/ContactsPage";

// import Footer from "components/Footer";

// console.log("routeContactsPage", routeContactsPage);
// debugger;

const AppContent = () => {
  return (
    <div>
      <Header />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={routeAboutPage()} element={<AboutPage />} />
          <Route path={routePortfolioPage()} element={<PortfolioPage />} />
          {/* <Route path={routeContactsPage()} element={<ContactsPage />} /> */}
          <Route path={routeDevelopmentPage()} element={<DevelopmentPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppContent;
