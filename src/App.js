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
  RotatingLogo,
  SpanBanner,
  SmallThumbnail,
  BannerThumbnails,
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
import Contact from "./pages/Contact";
import Product from "./pages/Product";

// other
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { bannerData1 } from "./components/data/banner";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// rando
import { updateQuantity } from "./utils/basket.qty";

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
  const [loading, setLoading] = useState(false);

  const basket = useSelector(selectBasket);

  // toast
  const notify = (item) => toast.dark(`${item} added to basket!`);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://birdbrain.herokuapp.com/products?_limit=3&stock_gte=1")
      .then((response) => {
        setProducts(response.data);
      });

    axios
      .get(
        "https://birdbrain.herokuapp.com/products?_where[new_in_eq]=true&stock_gte=1"
      )
      .then((response) => {
        setNewProducts(response.data);
        setLoading(false);
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
        <Route path="/product">
          <Product notify={notify} />
        </Route>
        <Route path="/contact">
          <Contact />
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
          <Banner {...bannerData1}></Banner>
          <Featured />
          <Container title={loading ? "loading..." : "Featured"}>
            {loading && <RotatingLogo />}
            {products.map((product, idx) => (
              <Thumbnail
                id={product.id}
                key={idx}
                title={product.title}
                image1={product.image?.url}
                image2={product.image2?.url}
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
            <SpanBanner>
              <SmallThumbnail />
            </SpanBanner>
          </Container>
          <Container title={loading ? "loading..." : "New In"}>
            {loading && <RotatingLogo />}
            {newProducts.map((product, idx) => (
              <Thumbnail
                id={product.id}
                key={idx}
                title={product.title}
                image1={product.image?.url}
                image2={product.image2?.url}
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
            <SpanBanner>
              <SmallThumbnail />
            </SpanBanner>
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
          {basket?.length ? <BasketIcon basket={basket} /> : null}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
