import React from "react";

// components
import { Navbar, Links, Header, BlogItem, Footer } from "../components";
import { BasketItem, Container } from "../components";

import GlobalStyle, { PageContainer } from "../globalStyles";

// redux
import { useSelector } from "react-redux";
import { selectOrder } from "../features/order/orderSlice";

const Order = () => {
  const order = useSelector(selectOrder);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Thanks for supporting small businesses!" />
      <Container width="80%">
        <div
          style={{
            Display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <h2>{order[0].name}</h2>
          <h2>{order[0].email}</h2>
          <h2>{order[0].address}</h2>
          <h2>{order[0].postcode}</h2>
          <h3>{order[0].stuff.length} item(s)</h3>
        </div>
      </Container>
      <Container width="80%">
        <h2>Dispatch 3-5 working days</h2>
      </Container>
      <Container width="80%">
        <h2>EMAIL CONFIRMATION COMING SOON!</h2>
      </Container>
      <Footer />
    </>
  );
};

export default Order;
