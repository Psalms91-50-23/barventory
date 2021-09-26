import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchInventory } from '../redux/inventory'
import Table from './Table'
import { useHistory } from "react-router-dom";


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
      <div>
        <h1>Inventory List</h1>
        <button onClick={moveToAddBottle}> add bottle </button>
      </div>
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
