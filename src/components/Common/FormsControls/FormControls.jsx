import React from "react";
import { Field } from "redux-form";

import style from "./FormControls.module.css";

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={style.wrapper + " " + (hasError ? style.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, element, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}></textarea>
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, element, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  component,
  validators,
  props = {},
  text = ""
) => (
  <div>
    <Field
      validate={validators}
      component={component}
      name={name}
      placeholder={placeholder}
      {...props}
    />
    {text}
  </div>
);
