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
import { useHistory } from "react-router-dom";

const qty = 1;

export const Default = ({
  title,
  image,
  price,
  notify,
  setOpen,
  id,
  stock,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleStock = async (id, vals) => {
    const result = await axios.get(
      `https://birdbrain.herokuapp.com/products?id_in=${id}`
    );

    if (result.data[0].stock > 0) {
      dispatch(addToBasket({ id, title, image, price, vals, qty }));
      history.push("/");
      notify(title);
    } else {
      alert("sorry, this product is no longer available");
    }
  };

  return (
    <Formik
      initialValues={{ quantity: 1 }}
      validate={(values) => {
        const errors = {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleStock(id, values);
      }}
    >
      {({ isSubmitting, values, errors, handleChange, handleBlur }) => (
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
export const Candle = ({ title, image, price, notify, setOpen, id, stock }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleStock = async (id, vals) => {
    const result = await axios.get(
      `https://birdbrain.herokuapp.com/products?id_in=${id}`
    );

    if (result.data[0].stock > 0) {
      dispatch(addToBasket({ id, title, image, price, vals, qty }));
      history.push("/");
      notify(title);
    } else {
      alert("sorry, this product is no longer available");
    }
  };

  return (
    <Formik
      initialValues={{ scent: "", quantity: 1 }}
      validate={(values) => {
        const errors = {};

        if (!values.scent) {
          errors.scent = "scent required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleStock(id, values);
      }}
    >
      {({ isSubmitting, values, errors, handleChange, handleBlur }) => (
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
          <select
            value={values.scent}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ margin: "3rem 0" }}
            name="scent"
          >
            <option value="" label="Select a scent" />
            <option value="Orange Spice">Orange Spice</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Citrus and Basil">Citrus and Basil</option>
            <option value="Fresh Linen">Fresh Linen</option>
            <option value="Mocha">Mocha</option>
            <option value="Pumpkin Spice">Pumpkin Spice</option>
            <option value="Sweet Fig">Sweet Fig</option>
          </select>
          <div style={{ margin: "1rem 0", color: "red" }}>{errors.scent}</div>

          <AddToBasket type="submit" disabled={isSubmitting}>
            add to basket
          </AddToBasket>
        </Form>
      )}
    </Formik>
  );
};

export const ToteForm = ({
  title,
  image,
  price,
  notify,
  setOpen,
  id,
  stock,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleStock = async (id, vals) => {
    const result = await axios.get(
      `https://birdbrain.herokuapp.com/products?id_in=${id}`
    );

    if (result.data[0].stock > 0) {
      dispatch(
        addToBasket(
          dispatch(addToBasket({ id, title, image, price, vals, qty }))
        )
      );
      history.push("/");
      notify(title);
    }
  };

  return (
    <Formik
      initialValues={{ colour: "", quantity: 1 }}
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
