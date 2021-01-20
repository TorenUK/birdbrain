import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasket } from "./features/basket/basketSlice";

export const HandmadeSoapForm = ({
  title,
  image,
  price,
  notify,
  setOpen,
  id,
}) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  return (
    <Formik
      initialValues={{ colour: "", scent: "", textarea: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.colour) {
          errors.colour = "please select a colour";
        }

        if (!values.scent) {
          errors.scent = "please select a scent";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(addToBasket({ id, title, image, price, values }));
        notify(title);
        setOpen(false);
      }}
    >
      {({ isSubmitting, values, errors }) => (
        <Form
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div role="group">
            <div>Colour: {values.colour}</div>
            <label>
              <Field type="radio" name="colour" value="Black" />
              Black
            </label>
            <label>
              <Field type="radio" name="colour" value="Blue" />
              Blue
            </label>
            <label>
              <Field type="radio" name="colour" value="Green" />
              Green
            </label>
            <label>
              <Field type="radio" name="colour" value="Grey" />
              Grey
            </label>
            <label>
              <Field type="radio" name="colour" value="Red" />
              Red
            </label>
            <label>
              <Field type="radio" name="colour" value="Pink" />
              Pink
            </label>
          </div>
          <h2>{errors.colour}</h2>
          <h2>{errors.scent}</h2>
          <div role="group">
            <div>Scent: {values.scent}</div>
            <label>
              <Field type="radio" name="scent" value="Chocolate" />
              Chocolate
            </label>
            <label>
              <Field type="radio" name="scent" value="Christmas Spice" />
              Christmas Spice
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
              <Field type="radio" name="scent" value="Mocha Coffee" />
              Mocha Coffee
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

          <textarea
            name="textarea"
            style={{ height: "100px", resize: "none" }}
            placeholder="say smmt"
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            add to basket
          </button>
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

  return (
    <Formik
      initialValues={{ scent: "", textarea: "" }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(addToBasket({ id, title, image, price, values }));
        notify(title);
        setOpen(false);
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
          <div role="group">
            <div>Scent: {values.scent}</div>
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
          <textarea
            name="textarea"
            style={{ height: "100px", resize: "none" }}
            placeholder="say smmt"
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            add to basket
          </button>
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

  return (
    <Formik
      initialValues={{ colour: "", textarea: "" }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(addToBasket({ id, title, image, price, values }));
        notify(title);
        setOpen(false);
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
          <div role="group">
            <div>Colour: {values.colour}</div>
            <label>
              <Field type="radio" name="colour" value="Blue Marble" />
              Blue
            </label>
            <label>
              <Field type="radio" name="colour" value="Pink Marble" />
              Pink
            </label>
            <label>
              <Field type="radio" name="colour" value="Green Marble" />
              Green
            </label>
            <label>
              <Field type="radio" name="colour" value="Yellow Marble" />
              Yellow
            </label>
            <label>
              <Field type="radio" name="colour" value="Purple Marble" />
              Purple
            </label>
          </div>
          <textarea
            name="textarea"
            style={{ height: "100px", resize: "none" }}
            placeholder="say smmt"
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            add to basket
          </button>
        </Form>
      )}
    </Formik>
  );
};
export const ToteForm = ({ title, image, price, notify, setOpen, id }) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  return (
    <Formik
      initialValues={{ colour: "", textarea: "" }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(addToBasket({ id, title, image, price, values }));
        notify(title);
        setOpen(false);
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
          <div role="group">
            <div>Colour: {values.colour}</div>
            <label>
              <Field type="radio" name="colour" value="Black" />
              Black
            </label>
            <label>
              <Field type="radio" name="colour" value="White" />
              White
            </label>
          </div>
          <textarea
            name="textarea"
            style={{ height: "100px", resize: "none" }}
            placeholder="say smmt"
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            add to basket
          </button>
        </Form>
      )}
    </Formik>
  );
};
