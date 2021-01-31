import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

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
import { LinksLi } from "./components/Links/Links.elements";
import GlobalStyle from "./globalStyles";

// pages
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

// other
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { bannerData1 } from "./components/data/banner";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "./features/basket/basketSlice";

// stripe
const promise = loadStripe(
  "pk_test_51HCr8zGrO8LMr0aUXQ0OQTnN3yG2EZOvmnm5zs01TjUVekfhGgS3b0WL7BeDxqV97ikJ7DqJR5qaFknoFIx7pnhu00rn1llTud"
);

function App() {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [url, setUrl] = useState("");

  const basket = useSelector(selectBasket);

  // toast
  const notify = (item) => toast.dark(`${item} added to basket!`);

  useEffect(() => {
    axios
      .get("https://birdbrain.herokuapp.com/products?_limit=3&stock_gte=1")
      .then((response) => {
        setProducts(response.data);
      });

    axios
      .get(
        "https://birdbrain.herokuapp.com/products?_start=3&_limit=4&stock_gte=1"
      )
      .then((response) => {
        setNewProducts(response.data);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Elements stripe={promise}>
            <Checkout />
          </Elements>
        </Route>
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
        <Route path="/order">
          <Order />
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
                id={product.id}
                key={idx}
                title={product.title}
                image={product.image?.url}
                previousPrice={product.previousPrice}
                price={product.price}
                stock={product.stock}
                notify={notify}
                formType={product.formType}
                description={product.description}
              />
            ))}
          </Container>
          <Container title="New In">
            {newProducts.map((product, idx) => (
              <Thumbnail
                id={product.id}
                key={idx}
                title={product.title}
                image={product.image.url}
                previousPrice={product.previousPrice}
                price={product.price}
                stock={product.stock}
                notify={notify}
                formType={product.formType}
                description={product.description}
              />
            ))}
          </Container>
          <Container>
            <LinksLi to="/shop">shop all →</LinksLi>
          </Container>
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

const add = (item, _qty = 1) => {
  order[item] += _qty;
};

const order = {
  thing: 0,
  stuff: 0,
};

console.log(order);

const basket = [
  { id: "thing", qty: 2 },
  { id: "stuff", qty: 3 },
];

basket.map((i) => {
  add(i.id, i.qty);
});

console.log(order);

export default App;
