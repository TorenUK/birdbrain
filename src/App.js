import React, { useState, useEffect } from "react";

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
          <h2 style={{ textAlign: "center", margin: "50px" }}>
            seasonal/special offer products here?
          </h2>
          <Container>
            {products.map((product) => (
              <Thumbnail
                title={product.title}
                image={product.image.url}
                price={product.price}
                scent={product.scent}
                waxColour={product.waxColour}
                stock={product.stock}
              />
            ))}
          </Container>
          <Container>something here</Container>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
