import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiClipboard } from "react-icons/fi";
import { SiGoogleanalytics } from "react-icons/si";
import { GiWineBottle } from "react-icons/gi";
import { connect } from "react-redux";
import { fetchInventory } from "../redux/inventory";


function Nav(props) {

  const { inventoryState, dispatch } = props
  //console.log("props ", props)
  const { inventory } = inventoryState
  const [foundItems, setFoundItems ] = useState(false)


  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  useEffect(()=> {

  },[inventory])

  // style={this.props.canClick ? {pointerEvents: "none"} : null}

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
          <NavLink 
            style={inventory.length?  null : {pointerEvents: "none"} }
            className="navbar-item measure"
            activeClassName="active"
            to="/bottleslider"
          >
            <GiWineBottle size={24} />
            Measure
          </NavLink>
        <NavLink className="navbar-item" activeClassName="active" to="/reports">
          <SiGoogleanalytics size={24} />
          Reports
        </NavLink>
      </div>
    </>
  );
}

function mapStateToProps(globalState){

  return {
    inventoryState: globalState.inventory
  }

}

export default connect(mapStateToProps)(Nav);
