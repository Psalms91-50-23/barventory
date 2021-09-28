import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchInventory } from "../redux/inventory";
import Table from "./Table";
import { NavLink, useHistory } from "react-router-dom";
import PageHeader from "./PageHeader";
import Loading from "./Loading";

function InventoryScreen(props) {
  const { dispatch, inventoryState } = props;
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <>
      <PageHeader
        title="Inventory"
        leftAction={
          <button className="button" onClick={logout}>
            Logout
          </button>
        }
        rightAction={
          <NavLink className="button" to="/addBottle">
            Add Bottles
          </NavLink>
        }
      />
      {!inventoryState.loading && (
        <>
          {inventoryState.inventory.length > 0 && (
            <Table key={"table"} inventory={inventoryState.inventory} />
          )}
          {inventoryState.inventory.length == 0 && (
            <div className="empty">
              <h1 className="text-primary">Nothing to show 🍺</h1>
              <p>To Get Started, add some items to your inventory</p>
              <NavLink className="button" to="/addBottle">
                Add Bottles
              </NavLink>
            </div>
          )}
        </>
      )}
      {inventoryState.loading && <Loading />}
    </>
  );
}

function mapStateToProps(globalState) {
  return {
    inventoryState: globalState.inventory,
  };
}
export default connect(mapStateToProps)(InventoryScreen);
