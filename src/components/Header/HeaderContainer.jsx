import React from "react";
import { connect } from "react-redux";

import { logoutUserThunk } from "../../redux/reducers/userAuthReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.authUsers.login,
  isAuth: state.authUsers.isAuth,
});

export default connect(mapStateToProps, { logoutUserThunk })(HeaderContainer);
