import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "components/AppContent";
// import "global/styles/global.scss";
import "./styles.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
