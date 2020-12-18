import React from "react";

// components
import { Navbar, Banner } from "./components";
import GlobalStyle from "./globalStyles";

// other
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Banner />
    </Router>
  );
}

export default App;
