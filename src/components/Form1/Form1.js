import React from "react";

// components
import { Form1Wrapper } from "./Form1.elements";

// other
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasket } from "../../features/basket/basketSlice";

const Form1 = ({ title, image, price, setOpen, notify }) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  return (
    <Form1Wrapper>
      <h2>form options here</h2>
      <br />
      <h3>dispatch object to redux on submit</h3>
      <br />
      <h3> ← image to correspond with selection</h3>
      <br />
      <h3>different form fields for different product types</h3>
      <br />
      <h3>render form fields using strapi booleans</h3>

      <Formik
        initialValues={{ option1: "", option2: "", colour: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.option1) {
            errors.option1 = "Required";
          }
          if (!values.option2) {
            errors.option2 = "required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          dispatch(addToBasket({ item: title, image, price, values }));
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
            <Field type="text" name="option1" />
            <ErrorMessage name="option1" component="div" />
            <div role="group">
              <div>Picked: {values.colour}</div>
              <label>
                <Field type="radio" name="colour" value="colour1" />
                colour1
              </label>
              <label>
                <Field type="radio" name="colour" value="colour2" />
                colour2
              </label>
              <label>
                <Field type="radio" name="colour" value="colour3" />
                colour3
              </label>
              <label>
                <Field type="radio" name="colour" value="colour4" />
                colour4
              </label>
              <label>
                <Field type="radio" name="colour" value="colour5" />
                colour5
              </label>
              <label>
                <Field type="radio" name="colour" value="colour6" />
                colour6
              </label>
            </div>

            <Field type="text" name="option2" />
            <ErrorMessage name="option2" component="div" />
            <button type="submit" disabled={isSubmitting}>
              add to basket
            </button>
          </Form>
        )}
      </Formik>
    </Form1Wrapper>
  );
};

export default Form1;
