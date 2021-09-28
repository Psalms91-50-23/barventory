import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchInventory } from "../redux/inventory";
import Table from "./Table";
import { NavLink, useHistory } from "react-router-dom";
import PageHeader from "./PageHeader";

function InventoryScreen(props) {
  const { dispatch, inventoryState } = props;
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  return (
    <>
      <PageHeader
        title="Inventory"
        rightAction={
          <NavLink className="button" to="/addBottle">
            Add Bottles
          </NavLink>
        }
      />
      <div>
        {inventoryState.inventory.length > 0 && (
          <Table key={"table"} inventory={inventoryState.inventory} />
        )}
      </div>
      {inventoryState.inventory.length == 0 && (
        <div class="empty">
          <h1 class="text-primary">Inventory empty 🍺</h1>
          <p>To Get Started, add some items to your inventory</p>
          <NavLink className="button" to="/addBottle">
            Add Bottles
          </NavLink>
        </div>
      )}
    </>
  );
}

function mapStateToProps(globalState) {
  return {
    inventoryState: globalState.inventory,
  };
}
export default connect(mapStateToProps)(InventoryScreen);
