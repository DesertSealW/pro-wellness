import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppContent from "components/AppContent";

import "./styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
