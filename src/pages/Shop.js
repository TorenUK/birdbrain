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
  RotatingLogo,
  Filter,
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
  const [loading, setLoading] = useState(false);

  const basket = useSelector(selectBasket);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://birdbrain.herokuapp.com/products?stock_gte=1")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title={loading ? "loading products..." : "All Products"} />
      {loading && <RotatingLogo />}
      <Filter />
      <PageContainer>
        <Container>
          {products.map((product, idx) => (
            <Thumbnail
              stock={product.stock}
              id={product.id}
              key={idx}
              title={product.title}
              image1={product.image?.url}
              image2={product.image2?.url}
              previousPrice={product.previousPrice}
              price={product.price}
              scent={product.scent}
              notify={notify}
              formType={product.formType}
              description={product.description}
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
      {basket?.length ? <BasketIcon basket={basket} /> : null}
    </div>
  );
};

export default Shop;
