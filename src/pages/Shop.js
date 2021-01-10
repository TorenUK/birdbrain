import React, { useState, useEffect } from "react";

// components
import {
  Navbar,
  Container,
  Links,
  Header,
  Footer,
  Thumbnail,
} from "../components";
import GlobalStyle from "../globalStyles";

// other
import { PageContainer } from "../globalStyles";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://birdbrain.herokuapp.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Shop" />
      <PageContainer>
        <Container>
          {products.map((product, idx) => (
            <>
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
            </>
          ))}
        </Container>
      </PageContainer>
    </div>
  );
};

export default Shop;
