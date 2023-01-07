import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={242}
      height={272}
      viewBox="0 0 242 272"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="113" cy="112" r="109" />
      <rect x="-7" y="300" rx="20" ry="20" width="280" height="88" />
      <rect x="9" y="451" rx="6" ry="6" width="280" height="25" />
      <rect x="1" y="405" rx="11" ry="11" width="90" height="30" />
      <rect x="122" y="397" rx="21" ry="21" width="150" height="45" />
      <rect x="3" y="234" rx="0" ry="0" width="165" height="27" />
      <rect x="193" y="234" rx="0" ry="0" width="27" height="27" />
    </ContentLoader>
  );
};

export default Skeleton;
