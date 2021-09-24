import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaWineBottle } from "react-icons/fa";

function Nav() {
  return (
    <>
      <div className="navbar">
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/inventory"
        >
          <BsFillHouseFill size={30} />
          Inventory
        </NavLink>
        <NavLink className="navbar-item" activeClassName="active" to="/reports">
          <AiOutlineAreaChart size={30} />
          Reports
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/bottleslider"
          >
          <FaWineBottle size={30} />
          Measure
        </NavLink>
      </div>
    </>
  );
}

export default Nav;
