import React from "react";

// components
import {
  ContactFormContainer,
  MyForm,
  MyTextArea,
} from "./ContactForm.elements";

import { Field, Form, Formik, FormikProps } from "formik";

const MyInput = ({ field, form, ...props }) => {
  return <MyTextArea {...field} {...props} />;
};

const ContactForm = () => {
  return (
    <ContactFormContainer>
      <Formik
        initialValues={{ email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "please enter your email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <MyForm onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <Field
              name="message"
              placeholder="ask us something"
              component={MyInput}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && touched.message && errors.message}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </MyForm>
        )}
      </Formik>
    </ContactFormContainer>
  );
};

export default ContactForm;
