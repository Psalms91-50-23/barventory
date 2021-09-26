import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchInventory } from '../redux/inventory'
import Table from './Table'
import { NavLink, useHistory } from "react-router-dom";
import PageHeader from './PageHeader';


function InventoryScreen (props) {

  const { dispatch, inventoryState } = props
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchInventory())
  },[])

  function moveToAddBottle()
  {
    //<NavLink to="/addBottle" />
    history.push("/addBottle")
  }

  return (
    <>
      <PageHeader title="Inventory" rightAction={<NavLink className="button" to="/addBottle">Add Bottle</NavLink>}/>
      <div>
        <Table key={"table"} inventory={inventoryState.inventory}/>
      </div>
    </>
  )
}


function mapStateToProps(globalState){

  return {
    inventoryState: globalState.inventory
  }
}
export default connect(mapStateToProps)(InventoryScreen)
