import React from "react";
import { Field } from "redux-form";

import { createField, Input } from "../Common/FormsControls/FormControls";
import {
  maxLength,
  minLength,
  required,
} from "../../utils/validators/validators";
import style from "../Common/FormsControls/FormControls.module.css";

const maxLength50 = maxLength(50);
const maxLength20 = maxLength(20);
const minLength1 = minLength(1);
const minLength4 = minLength(1);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("email", "email", Input, [
        required,
        maxLength50,
        minLength1,
      ])}
      {createField(
        "password",
        "password",
        Input,
        [required, maxLength20, minLength4],
        { type: "password" }
      )}
      {createField(
        null,
        "rememberMe",
        Input,
        null,
        { type: "checkbox" },
        "remember me"
      )}
      {error && <div className={style.formError}>{error}</div>}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
