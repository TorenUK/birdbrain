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

  const colourFieldRender = true;
  const scentFieldRender = true;

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
        initialValues={{ colour: "", scent: "", textarea: "" }}
        validate={(values) => {
          const errors = {};
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
            {colourFieldRender ? (
              <div role="group">
                <div>Colour: {values.colour}</div>
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
            ) : null}
            {scentFieldRender ? (
              <div role="group">
                <div>Scent: {values.scent}</div>
                <label>
                  <Field type="radio" name="scent" value="scent1" />
                  scent1
                </label>
                <label>
                  <Field type="radio" name="scent" value="scent2" />
                  scent2
                </label>
                <label>
                  <Field type="radio" name="scent" value="scent3" />
                  scent3
                </label>
                <label>
                  <Field type="radio" name="scent" value="scent4" />
                  scent4
                </label>
                <label>
                  <Field type="radio" name="scent" value="scent5" />
                  scent5
                </label>
                <label>
                  <Field type="radio" name="scent" value="scent6" />
                  scent6
                </label>
              </div>
            ) : null}
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
    </Form1Wrapper>
  );
};

export default Form1;
