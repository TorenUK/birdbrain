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
  BasketIcon,
} from "./components";
import GlobalStyle from "./globalStyles";

// pages
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Basket from "./pages/Basket";

// other
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { bannerData1 } from "./components/data/banner";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "./features/basket/basketSlice";

function App() {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  const basket = useSelector(selectBasket);

  // toast
  const notify = (item) => toast.dark(`${item} added to basket!`);

  useEffect(() => {
    axios
      .get("https://birdbrain.herokuapp.com/products?_limit=3")
      .then((response) => {
        setProducts(response.data);
      });

    axios
      .get("https://birdbrain.herokuapp.com/products?_start=3&_limit=4")
      .then((response) => {
        setNewProducts(response.data);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/shop">
          <Shop notify={notify} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
        <Route path="/">
          <GlobalStyle />
          <Navbar />
          <Links />
          <Banner {...bannerData1} />
          <Featured />
          <Container title="Featured">
            {products.map((product, idx) => (
              <Thumbnail
                key={idx}
                title={product.title}
                image={product.image.url}
                previousPrice={product.previousPrice}
                price={product.price}
                stock={product.stock}
                notify={notify}
                formType={product.formType}
              />
            ))}
          </Container>
          <Container title="New In">
            {newProducts.map((product, idx) => (
              <Thumbnail
                key={idx}
                title={product.title}
                image={product.image.url}
                previousPrice={product.previousPrice}
                price={product.price}
                stock={product.stock}
                notify={notify}
                formType={product.formType}
              />
            ))}
          </Container>
          <Container title="༼ つ ◕_◕ ༽つ stuff here soon"></Container>
          <Footer />
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
          />
          {basket.length ? <BasketIcon basket={basket} /> : null}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
