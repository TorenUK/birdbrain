import React, { useState, useEffect } from "react";

// components
import {
  Navbar,
  Banner,
  Container,
  Links,
  Thumbnail,
  Footer,
  Featured,
} from "./components";
import GlobalStyle from "./globalStyles";

// pages
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";

// other
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { bannerData1 } from "./components/data/banner";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://birdbrain.herokuapp.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

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
          <Featured></Featured>
          <Container>
            {products.map((product, idx) => (
              <Thumbnail
                key={idx}
                title={product.title}
                image={product.image.url}
                previousPrice={product.previousPrice}
                price={product.price}
                scent={product.scent}
                waxColour={product.waxColour}
                stock={product.stock}
              />
            ))}
          </Container>
          <Container>༼ つ ◕_◕ ༽つ stuff here soon</Container>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
