import React from "react";
import { Field, reduxForm } from "redux-form";

const required = (value) =>
value || typeof value === "number" ? undefined : "Required";

const email = (value) =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? "Invalid email address"
  : undefined;

const renderField = ({ label, type, input, meta: { touched, error } }) => (
  <div className="input-row">
    <label>{label}</label>
    <input {...input} type={type} />
    {touched && error && <span className="error error-validate">{error}</span>}
  </div>
);



let ContactForm = (props) => {
  const { handleSubmit } = props;

 
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <Field
          name="firstName"
          label="First Name"
          component={renderField}
          validate={[required]}
          type="text"
        />
      </div>
      <div>
        <Field
          name="lastName"
          label="Last Name"
          component={renderField}
          validate={[required]}
          type="text"
        />
      </div>
      <div>
        <Field
          name="email"
          validate={[required,email]}
          label="Email"
          component={renderField}
          type="email"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact",
})(ContactForm);

export default ContactForm;


