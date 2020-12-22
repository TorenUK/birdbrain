import React from "react";

// components
import { Navbar, Banner, Gift, Container, Links } from "./components";
import GlobalStyle from "./globalStyles";

// pages
import Shop from "./pages/Shop";
import About from "./pages/About";
// other
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { bannerData1 } from "./components/data/banner";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <GlobalStyle />
          <Navbar />
          <Links />
          <Banner {...bannerData1} />
          <Container>
            <Gift />
            <Gift />
            <Gift />
            <Gift />
          </Container>
          <Container>something here</Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
