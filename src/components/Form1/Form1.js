import React from "react";

// components
import { Form1Wrapper } from "./Form1.elements";

// other
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Form1 = () => {
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
        initialValues={{ text1: "", text2: "", colour: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.text1) {
            errors.text1 = "Required";
          }
          if (!values.text2) {
            errors.text2 = "required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            <Field type="text" name="text1" />
            <ErrorMessage name="text1" component="div" />
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

            <Field type="text" name="text2" />
            <ErrorMessage name="text2" component="div" />
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
