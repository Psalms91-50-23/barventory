import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchInventory } from '../redux/inventory'
import InventoryItem from './InventoryItem'


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
      <ul>
        {inventory.inventory?.map(bottle => {

          return (
            
            <InventoryItem key={`inventory_id_${bottle.id}`} bottle={bottle}/>
          )
        })

        }
      </ul>
    </>
  )
}


function mapStateToProps(globalState){

  return {
    inventory: globalState.inventory
  }
}
export default connect(mapStateToProps)(InventoryScreen)
