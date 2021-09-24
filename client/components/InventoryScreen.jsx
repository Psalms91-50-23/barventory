import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchInventory } from '../redux/inventory'
import InventoryItem from './InventoryItem'
import Table from './Table'

function InventoryScreen (props) {


  const { dispatch, inventory } = props

  useEffect(() => {
    dispatch(fetchInventory())
  },[])

  return (
    <>
    <div>
      <h1>Inventory List</h1>

    </div>
    <Table inventory={inventory.inventory}/>
    </>
  )
}


function mapStateToProps(globalState){

  return {
    inventory: globalState.inventory
  }
}
export default connect(mapStateToProps)(InventoryScreen)
