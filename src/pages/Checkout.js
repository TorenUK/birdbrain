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

import GlobalStyle, {
  PageContainer,
  CheckoutForm,
  CheckoutInput,
  StripeElement,
  CheckoutBottom,
} from "../globalStyles";

// other
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { loadFromLocalStorage } from "../utils/local.storage";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectBasket, emptyBasket } from "../features/basket/basketSlice";
import { addOrder } from "../features/order/orderSlice";

// stripe
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const total = (basket) => {
  return basket.reduce((amount, item) => parseFloat(item.price) + amount, 0);
};

const grandTotal = (total) => {
  return total + 3.99;
};

const Checkout = () => {
  const basket = loadFromLocalStorage();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const response = await axios.post(
          "https://birdbrain.herokuapp.com/create-intent",
          {
            basket,
          }
        );

        setClientSecret(response.data.clientSecret);
      } catch (e) {
        console.log(e);
      }
    };

    getClientSecret();
  }, []);

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
      axios
        .post("https://birdbrain.herokuapp.com/orders", {
          name: name,
          email: email,
          address: address,
          city: city,
          postcode: postcode,
          payment: total(basket) + 3.99,
          stuff: JSON.stringify(basket, null, 2),
        })
        .then((r) => {
          // axios.post("https://birdbrain.herokuapp.com/send-email", {
          //   to: email,
          //   basket: basket,
          // });
          dispatch(emptyBasket());
          dispatch(
            addOrder({
              name: name,
              email: email,
              address: address,
              city: city,
              postcode: postcode,
              payment: total(basket) + 3.99,
              stuff: basket,
              data: r.data,
            })
          );
          history.push("/order");
        })
        .catch((e) => console.log(e));
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
      <div
        style={{
          height: "70px",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <h2>Checkout</h2>
      </div>
      <PageContainer>
        <CheckoutForm>
          <CheckoutInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="email address"
            type="text"
            required
          />
          <CheckoutInput
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            placeholder="full name"
            type="text"
            required
          />
          <CheckoutInput
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            name="line1"
            placeholder="address line 1"
            type="text"
            required
          />
          <CheckoutInput
            onChange={(e) => {
              setCity(e.target.value);
            }}
            name="city"
            placeholder="City/Town"
            type="text"
            required
          />
          <CheckoutInput
            onChange={(e) => {
              setPostcode(e.target.value);
            }}
            name="postcode"
            placeholder="postcode"
            type="text"
            required
          />
        </CheckoutForm>
        <StripeElement
          style={{
            maxWidth: "400px",
            minWidth: "350px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardElement
            onChange={handleChange}
            id="card-element"
            options={cardStyle}
          />
        </StripeElement>
        <CheckoutBottom
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: "0.5rem 0" }}>
            subtotal: £{total(basket).toFixed(2)}
          </h3>
          <h3 style={{ margin: "0.5rem 0" }}>shipping: £3.99</h3>
          <Button
            size="large"
            disabled={processing || disabled || succeeded}
            onClick={handleSubmit}
            type="submit"
            id="pay"
          >
            <span style={{ fontSize: "1.2rem" }}>
              {processing ? (
                <p>processing</p>
              ) : (
                `pay ${grandTotal(total(basket)).toFixed(2)}`
              )}
            </span>
          </Button>
          {error && <div>{error}</div>}
        </CheckoutBottom>
      </PageContainer>
    </>
  );
};

export default Checkout;
