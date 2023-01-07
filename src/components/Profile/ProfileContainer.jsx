import React from "react";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import Profile from "./Profile";
import {
  setUserProfileThunk,
  getStatusThunk,
  setStatus,
  updateStatusThunk,
} from "../../redux/reducers/profilePageReducer";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 26407;
    }
    this.props.setUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunk}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  profile: state.profilePage.profile,
  isAuth: state.authUsers.isAuth,
  status: state.profilePage.status,
  authorizedUserId: state.authUsers.userId,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfileThunk,
    setStatus,
    getStatusThunk,
    updateStatusThunk,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainerAPI);
