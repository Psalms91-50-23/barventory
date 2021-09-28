import React from "react";
import { NavLink } from "react-router-dom";
import { FiClipboard } from "react-icons/fi";
import { SiGoogleanalytics } from "react-icons/si";
import { GiWineBottle } from "react-icons/gi";

function Nav() {
  return (
    <>
      <div className="navbar">
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/inventory"
        >
          <FiClipboard size={24} />
          Inventory
        </NavLink>
        <NavLink className="navbar-item" activeClassName="active" to="/reports">
          <SiGoogleanalytics size={24} />
          Reports
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/bottleslider"
        >
          <GiWineBottle size={24} />
          Measure
        </NavLink>
      </div>
    </>
  );
}

export default Nav;
