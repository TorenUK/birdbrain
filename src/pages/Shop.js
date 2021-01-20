import React, { useState, useEffect } from "react";

// components
import {
  Navbar,
  Container,
  Links,
  Header,
  Footer,
  Thumbnail,
  BasketIcon,
} from "../components";
import GlobalStyle from "../globalStyles";

// other
import { PageContainer } from "../globalStyles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";

const Shop = ({ notify }) => {
  const [products, setProducts] = useState([]);

  const basket = useSelector(selectBasket);

  useEffect(() => {
    axios
      .get("https://birdbrain.herokuapp.com/products?stock_gte=1")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Shop" />
      <PageContainer>
        <Container>
          {products.map((product, idx) => (
            <Thumbnail
              id={product.id}
              key={idx}
              title={product.title}
              image={product.image.url}
              previousPrice={product.previousPrice}
              price={product.price}
              scent={product.scent}
              notify={notify}
              formType={product.formType}
            />
          ))}
        </Container>
      </PageContainer>
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
    </div>
  );
};

export default Shop;
