import React from "react";

// components
import {
  Navbar,
  Banner,
  Container,
  Links,
  Thumbnail,
  Footer,
} from "./components";
import GlobalStyle from "./globalStyles";

// pages
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";

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
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/">
          <GlobalStyle />
          <Navbar />
          <Links />
          <Banner {...bannerData1} />
          <Container>
            <Thumbnail></Thumbnail>
            <Thumbnail></Thumbnail>
            <Thumbnail></Thumbnail>
            <Thumbnail></Thumbnail>
          </Container>
          <Container>something here</Container>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
