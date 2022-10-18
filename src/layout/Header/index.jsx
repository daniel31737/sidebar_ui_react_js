import React from "react";

import Logo from "../../assets/images/logo.png";

function Header(props) {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <i className="bi-list header__menu" />
    </div>
  );
}

export default Header;
