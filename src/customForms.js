import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasket } from "./features/basket/basketSlice";

// other
import { Button } from "@material-ui/core";
import axios from "axios";

export const Default = ({ title, image, price, notify, setOpen, id }) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleStock = async (id, vals) => {
    const result = await axios.get(
      `https://birdbrain.herokuapp.com/products?id_in=${id}`
    );

    if (result.data[0].stock > 0) {
      dispatch(addToBasket({ id, title, image, price, vals }));
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
          <Button type="submit" disabled={isSubmitting}>
            add to basket
          </Button>
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
      dispatch(addToBasket({ id, title, image, price, vals }));
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
          <div id="form" role="group">
            <div style={{ textAlign: "center", margin: "5px 0" }}>
              Scent: {values.scent}
            </div>
            <label>
              <Field type="radio" name="scent" value="Orange Spice" />
              Orange Spice
            </label>
            <label>
              <Field type="radio" name="scent" value="Vanilla" />
              Vanilla
            </label>
            <label>
              <Field type="radio" name="scent" value="Citrus and Basil" />
              Citrus and Basil
            </label>
            <label>
              <Field type="radio" name="scent" value="Fresh Linen" />
              Fresh Linen
            </label>
            <label>
              <Field type="radio" name="scent" value="Mocha" />
              Mocha
            </label>
            <label>
              <Field type="radio" name="scent" value="Pumpkin Spice" />
              Pumpkin Spice
            </label>
            <label>
              <Field type="radio" name="scent" value="Sweet Fig" />
              Sweet Fig
            </label>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            add to basket
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export const SmallJarCandle = ({
  title,
  image,
  price,
  notify,
  setOpen,
  id,
}) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleStock = async (id, vals) => {
    const result = await axios.get(
      `https://birdbrain.herokuapp.com/products?id_in=${id}`
    );

    if (result.data[0].stock > 0) {
      dispatch(addToBasket({ id, title, image, price, vals }));
      notify(title);
      setOpen(false);
    }
  };

  return (
    <Formik
      initialValues={{ scent: "" }}
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
          <div id="form" role="group">
            <div style={{ textAlign: "center", margin: "5px 0" }}>
              Scent: {values.scent}
            </div>
            <label>
              <Field type="radio" name="scent" value="Orange Spice" />
              Orange Spice
            </label>
            <label>
              <Field type="radio" name="scent" value="Citrus and Basil" />
              Citrus and Basil
            </label>
            <label>
              <Field type="radio" name="scent" value="Fresh Linen" />
              Fresh Linen
            </label>
            <label>
              <Field type="radio" name="scent" value="Mocha" />
              Mocha
            </label>
            <label>
              <Field type="radio" name="scent" value="Pumpkin Spice" />
              Pumpkin Spice
            </label>
            <label>
              <Field type="radio" name="scent" value="Sweet Fig" />
              Sweet Fig
            </label>
            <label>
              <Field type="radio" name="scent" value="Vanilla" />
              Vanilla
            </label>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            add to basket
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export const MarbleCoasterForm = ({
  title,
  image,
  price,
  notify,
  setOpen,
  id,
}) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const handleStock = async (id, vals) => {
    const result = await axios.get(
      `https://birdbrain.herokuapp.com/products?id_in=${id}`
    );

    if (result.data[0].stock > 0) {
      dispatch(addToBasket({ id, title, image, price, vals }));
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
          <Button type="submit" disabled={isSubmitting}>
            add to basket
          </Button>
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
      dispatch(addToBasket({ id, title, image, price, vals }));
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
          <div id="form" role="group">
            <div style={{ textAlign: "center", margin: "5px 0" }}>
              Colour: {values.colour}
            </div>
            <label>
              <Field type="radio" name="colour" value="Black" />
              Black
            </label>
            <label>
              <Field type="radio" name="colour" value="White" />
              White
            </label>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            add to basket
          </Button>
        </Form>
      )}
    </Formik>
  );
};
