import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";

import PostsContainer from "../Posts/PostsContainer";

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <main className="content">
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <PostsContainer />
    </main>
  );
};

export default Profile;
