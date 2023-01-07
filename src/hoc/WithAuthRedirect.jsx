import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.authUsers.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={"/login"} />;
      return <Component {...this.props} />;
    }
  }
  let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedRedirectComponent;
};
