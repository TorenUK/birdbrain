import React from "react";

// components
import { Navbar, Banner, Carousel } from "./components";
import GlobalStyle from "./globalStyles";

// other
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Carousel />
    </Router>
  );
}

export default App;
