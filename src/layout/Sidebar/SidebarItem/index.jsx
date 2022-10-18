import React, { useState } from "react";

function SidebarItem({ item }) {
  const [isOpenMenu, toggleOpenMenu] = useState(false);

  return (
    <div className={`sidebar-item ${isOpenMenu ? "open" : ""}`}>
      <div
        className="sidebar-title"
        onClick={() => toggleOpenMenu(!isOpenMenu)}
      >
        <span>{item?.title}</span>
        <i className="bi-chevron-down toggle-btn"></i>
      </div>
      {isOpenMenu && (item?.childrens || [])?.length > 0 && (
        <div className="sidebar-content">
          <ul>
            {item?.childrens.map(child => (
              <li href="#" key={child?.id}>
                {child?.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SidebarItem;
