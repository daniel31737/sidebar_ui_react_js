import React, { Children } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout(props) {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="container">{props?.children}</div>
      </div>
    </div>
  );
}

export default Layout;
