import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { compose } from "redux";
import { CircleLoader } from "react-spinners";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { withRouter } from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeThunk } from "./redux/reducers/appReducer";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunk();
  }

  render() {
    // if (!this.props.initialized) {
    //   return (
    //     <CircleLoader
    //       color="#1a71f4"
    //       cssOverride={{
    //         display: "block",
    //         margin: "20% auto",
    //       }}
    //       size="100px"
    //     />
    //   );
    // }
    return (
      <React.Suspense
        fallback={
          <CircleLoader
            color="#1a71f4"
            cssOverride={{
              display: "block",
              margin: "20% auto",
            }}
            size="100px"
          />
        }
      >
        <div className="wrapper">
          <HeaderContainer />
          <div className="main">
            <Navbar />

            <Routes>
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route exact path="/dialogs" element={<DialogsContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </React.Suspense>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeThunk })
)(App);
