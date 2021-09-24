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
          <div className="padding-top">
            <img id="circle-shape" src={bottle.image}/>
          </div>
          <div className="padding-left-n-right">
            <p>{bottle.name} {bottle.size}</p>     
          </div>
          <div className="center">   
            <button className="margin-bot" onClick={()=> deleteOnClick(bottle.id)}> delete </button>
          </div>
      </div>
    </>
  )
}

export default connect()(BottleItem)
