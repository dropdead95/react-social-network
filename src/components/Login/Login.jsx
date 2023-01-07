import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";

import LoginForm from "./LoginForm";
import { loginUserThunk } from "../../redux/reducers/userAuthReducer";

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  console.log(props);
  const onSubmit = ({ email, password, rememberMe }) => {
    props.loginUserThunk(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authUsers.isAuth,
});

export default connect(mapStateToProps, { loginUserThunk })(Login);
