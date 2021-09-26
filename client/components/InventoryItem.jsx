import React from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import { deleteBottle } from '../redux/inventory'
import { deleteInventoryItem  } from '../redux/inventory'
 
function BottleItem (props) {

  const { bottle, dispatch } = props

function deleteOnClick(id)
{
  dispatch(deleteInventoryItem(id))
  // location.reload()
}

  return (
    <>
      <div className="inventoryItem">
          <img src={bottle.image} />
          <p>
            {bottle.name} {bottle.size}
          </p>
          <button
            onClick={() => deleteOnClick(bottle.id)}
          >delete</button>
      </div>
    </>
  );
}

export default connect()(BottleItem)
