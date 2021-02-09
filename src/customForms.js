import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// components
import {
  FormLabelContainer,
  FormLabel,
  AddToBasket,
  FormSelect,
} from "./components/Form1/Form1.elements";

import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasket } from "./features/basket/basketSlice";

// other
import { updateQuantity } from "./utils/basket.qty";
import { Button } from "@material-ui/core";
import axios from "axios";

const qty = 1;

export const Default = ({ title, image, price, notify, setOpen, id }) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleStock = async (id, vals) => {
    const result = await axios.get(
      `https://birdbrain.herokuapp.com/products?id_in=${id}`
    );

    if (result.data[0].stock > 0) {
      dispatch(
        addToBasket(
          updateQuantity({ id, title, image, price, vals, qty }, basket)
        )
      );
      notify(title);
      setOpen(false);
    } else {
      alert("sorry, this product is no longer available");
    }
  };

  return (
    <Formik
      initialValues={{}}
      validate={(values) => {
        const errors = {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleStock(id, values);
      }}
    >
      {({ isSubmitting, values, errors }) => (
        <Form
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddToBasket type="submit" disabled={isSubmitting}>
            add to basket
          </AddToBasket>
        </Form>
      )}
    </Formik>
  );
};
export const Candle = ({ title, image, price, notify, setOpen, id }) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleStock = async (id, vals) => {
    const result = await axios.get(
      `https://birdbrain.herokuapp.com/products?id_in=${id}`
    );

    if (result.data[0].stock > 0) {
      dispatch(
        addToBasket(
          updateQuantity({ id, title, image, price, vals, qty }, basket)
        )
      );
      notify(title);
      setOpen(false);
    } else {
      alert("sorry, this product is no longer available");
    }
  };

  return (
    <Formik
      initialValues={{ colour: "", scent: "" }}
      validate={(values) => {
        const errors = {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleStock(id, values);
      }}
    >
      {({ isSubmitting, values, errors }) => (
        <Form
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormSelect style={{ textAlign: "center", margin: "5px 0" }}>
            Scent: {values.scent}
          </FormSelect>
          <FormLabelContainer role="group">
            <FormLabel>
              <Field type="radio" name="scent" value="Orange Spice" />
              Orange Spice
            </FormLabel>
            <FormLabel>
              <Field type="radio" name="scent" value="Vanilla" />
              Vanilla
            </FormLabel>
            <FormLabel>
              <Field type="radio" name="scent" value="Citrus and Basil" />
              Citrus and Basil
            </FormLabel>
            <FormLabel>
              <Field type="radio" name="scent" value="Fresh Linen" />
              Fresh Linen
            </FormLabel>
            <FormLabel>
              <Field type="radio" name="scent" value="Mocha" />
              Mocha
            </FormLabel>
            <FormLabel>
              <Field type="radio" name="scent" value="Pumpkin Spice" />
              Pumpkin Spice
            </FormLabel>
            <FormLabel>
              <Field type="radio" name="scent" value="Sweet Fig" />
              Sweet Fig
            </FormLabel>
          </FormLabelContainer>
          <AddToBasket type="submit" disabled={isSubmitting}>
            add to basket
          </AddToBasket>
        </Form>
      )}
    </Formik>
  );
};

export const ToteForm = ({ title, image, price, notify, setOpen, id }) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleStock = async (id, vals) => {
    const result = await axios.get(
      `https://birdbrain.herokuapp.com/products?id_in=${id}`
    );

    if (result.data[0].stock > 0) {
      dispatch(
        addToBasket(
          updateQuantity({ id, title, image, price, vals, qty }, basket)
        )
      );
      notify(title);
      setOpen(false);
    }
  };

  return (
    <Formik
      initialValues={{ colour: "" }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleStock(id, values);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <FormLabelContainer id="form" role="group">
            <div style={{ textAlign: "center", margin: "5px 0" }}>
              Colour: {values.colour}
            </div>
            <FormLabel>
              <Field type="radio" name="colour" value="Black" />
              Black
            </FormLabel>
            <FormLabel>
              <Field type="radio" name="colour" value="White" />
              White
            </FormLabel>
          </FormLabelContainer>
          <AddToBasket type="submit" disabled={isSubmitting}>
            add to basket
          </AddToBasket>
        </Form>
      )}
    </Formik>
  );
};
