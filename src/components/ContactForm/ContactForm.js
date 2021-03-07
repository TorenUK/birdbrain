import Reactk, { useState } from "react";

// components
import {
  ContactFormContainer,
  MyForm,
  MyTextArea,
} from "./ContactForm.elements";

// other
import { Field, Form, Formik, FormikProps } from "formik";
import axios from "axios";

const MyInput = ({ field, form, ...props }) => {
  return <MyTextArea {...field} {...props} />;
};

const ContactForm = () => {
  const [sent, setSent] = useState(false);

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
            axios
              .post("https://birdbrain.herokuapp.com/messages", {
                email: values.email,
                message: values.message,
              })
              .then(() => {
                setSent(true);
              })
              .catch((e) => {
                console.log(e);
                alert("sorry, message service unavailable at this time");
              });
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
        }) =>
          !sent ? (
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
          ) : (
            <div style={{ display: "grid", placeItems: "center" }}>
              Thanks, we'll aim to get back to you within 24hrs
            </div>
          )
        }
      </Formik>
    </ContactFormContainer>
  );
};

export default ContactForm;
