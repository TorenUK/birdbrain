import React, { useState, useEffect } from "react";

// components
import {
  Navbar,
  Links,
  Header,
  BlogItem,
  Footer,
  BasketIcon,
  Container,
  BasketItem,
} from "../components";

import GlobalStyle, { PageContainer } from "../globalStyles";

// other
import axios from "axios";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";

// stripe
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Checkout = () => {
  const basket = useSelector(selectBasket);

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post("http://localhost:1337/create-intent");

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret().catch((err) => console.log(err));
  }, [basket]);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: "#000",
        fontFamily: "poppins, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "18px",
        "::placeholder": {
          color: "#000",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Checkout" />
      <Container title="༼ つ ◕_◕ ༽つ stuff here soon">
        {basket?.map((item, idx) => (
          <BasketItem key={idx} image={item.image} />
        ))}
      </Container>
      <PageContainer>
        <form>
          <input name="name" placeholder="full name" type="text" />
          <input name="line1" placeholder="address line 1" type="text" />
          <input name="postcode" placeholder="postcode" type="text" />
          <CardElement
            onChange={handleChange}
            id="card-element"
            options={cardStyle}
          />
        </form>
        <div className="checkout__buttons">
          <button
            disabled={processing || disabled || succeeded}
            onClick={handleSubmit}
            type="submit"
            id="pay"
          >
            <span>{processing ? <p>processing</p> : "pay now"}</span>
          </button>
          {error && <div>{error}</div>}
        </div>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Checkout;
