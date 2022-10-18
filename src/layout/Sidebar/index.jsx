import React from "react";

import SidebarItem from "./SidebarItem";

import routes from "../../routes";

function Sidebar(props) {
  return (
    <div className="sidebar">
      {routes.map(route => (
        <SidebarItem key={route?.id} item={route} />
      ))}
    </div>
  );
}

export default Sidebar;
