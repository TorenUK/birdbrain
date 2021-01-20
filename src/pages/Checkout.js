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
import { useHistory } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectBasket, emptyBasket } from "../features/basket/basketSlice";

// stripe
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const total = (basket) => {
  return basket.reduce((amount, item) => parseFloat(item.price) + amount, 0);
};

const grandTotal = (total) => {
  return total + 3.99;
};

const Checkout = () => {
  const basket = useSelector(selectBasket);

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post(
        "https://birdbrain.herokuapp.com/create-intent",
        {
          basket,
        }
      );

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
    }
    setError(null);
    setProcessing(false);
    setSucceeded(true);
    axios.post("https://birdbrain.herokuapp.com/orders", {
      email: email,
      address: address,
      postcode: postcode,
      payment: total(basket) + 3.99,
      stuff: JSON.stringify(basket, null, 2),
    });
    dispatch(emptyBasket());
    history.push("/order");
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
      <Container title="checkout">
        {basket?.map((item, idx) => (
          <BasketItem key={idx} image={item.image} />
        ))}
      </Container>
      <PageContainer>
        <form>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="email address"
            type="text"
            required
          />
          <input name="name" placeholder="full name" type="text" required />
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            name="line1"
            placeholder="address line 1"
            type="text"
            required
          />
          <input
            onChange={(e) => {
              setPostcode(e.target.value);
            }}
            name="postcode"
            placeholder="postcode"
            type="text"
            required
          />
          <CardElement
            onChange={handleChange}
            id="card-element"
            options={cardStyle}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>subtotal: £{total(basket).toFixed(2)}</div>
            <div style={{ margin: "0.5rem 0" }}>shipping: £3.99</div>
            <button
              disabled={processing || disabled || succeeded}
              onClick={handleSubmit}
              type="submit"
              id="pay"
            >
              <span>
                {processing ? (
                  <p>processing</p>
                ) : (
                  `pay ${grandTotal(total(basket)).toFixed(2)}`
                )}
              </span>
            </button>
            {error && <div>{error}</div>}
          </div>
        </form>
      </PageContainer>
    </>
  );
};

export default Checkout;
