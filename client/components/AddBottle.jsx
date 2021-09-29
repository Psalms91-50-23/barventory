import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBottles } from "../redux/bottles";
import { addBottleToInventory } from "../apis/inventoryApi";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import PageHeader from "./PageHeader";
import Loading from "./Loading";

function AddBottle(props) {
  const { bottlesState, dispatch, inventoryState } = props;
  const [redirect, setRedirect] = useState(false);
  const [filteredAdd, setFilteredAdd] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(fetchBottles());
  }, []);

  useEffect(() => {
    filterBottles();
  }, [bottlesState]);

  function addOnClick(id) {
    addBottleToInventory(id).then(() => {
      setRedirect(true);
    });
  }

  function filterBottles() {
    if (bottlesState.bottles.length) {
      const filteredInventoryName = inventoryState.inventory.map(
        (inventoryItem) => inventoryItem.name
      );
      const filteredBottles = bottlesState.bottles.filter(
        (bottle) => !filteredInventoryName.includes(bottle.name)
      );
      setFilteredAdd(filteredBottles);
    }
  }

  function onChangeSearch(e) {
    setSearchInput(e.target.value);
    if (bottlesState.bottles.length) {
      const filteredInventoryName = inventoryState.inventory.map(
        (inventoryItem) => inventoryItem.name
      );
      const filteredBottles = bottlesState.bottles.filter((bottle) => {
        if (
          bottle.name.toLowerCase().includes(searchInput.toLowerCase()) &&
          !filteredInventoryName.includes(bottle.name)
        ) {
          return bottle;
        }
      });
      setFilteredAdd(filteredBottles);
    }
  }

  return (
    <>
      <PageHeader
        title="Add Bottle"
        leftAction={
          <NavLink className="button" to="/inventory">
            Back
          </NavLink>
        }
      />
      <div className="container">
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          value={searchInput}
          placeholder="Search..."
          onChange={(e) => onChangeSearch(e)}
        />
      </div>
      {inventoryState.loading && <Loading />}
      {!inventoryState.loading && (
        <ul className="table-list add-bottles-list">
          {filteredAdd?.map((bottle) => {
            return (
              <div className="inventoryItem" key={`id_${bottle.id}`}>
                <img src={bottle.image} />
                <p>
                  {bottle.name} {bottle.size}
                </p>
                <button onClick={() => addOnClick(bottle.id)}> + </button>
              </div>
            );
          })}
        </ul>
      )}
      {redirect && <Redirect to="/inventory" />}
    </>
  );
}

function mapStateToProps(globalState) {
  return {
    bottlesState: globalState.bottles,
    inventoryState: globalState.inventory,
  };
}

export default connect(mapStateToProps)(AddBottle);
