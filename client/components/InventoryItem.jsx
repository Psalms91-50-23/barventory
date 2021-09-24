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
  location.reload()
}

  return (
    <>
    
      <div className="block-display">
          <div>
            <img className="margin-top margin-left" src={bottle.image} width="50"/>
          </div>
          <div className="margin-left">
            <p>{bottle.name}</p>     
          </div>
          <div className="margin-left">
            <p>{bottle.size}</p> 
          </div>
          <div className="center">   
            <button className="margin-bot" onClick={()=> deleteOnClick(bottle.id)}> delete </button>
          </div>
      </div>
    </>
  )
}

export default connect()(BottleItem)
