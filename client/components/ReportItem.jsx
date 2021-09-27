import React from 'react'
import {Route} from 'react-router-dom'
import { deleteBottle } from '../redux/inventory'
import { deleteInventoryItem  } from '../redux/inventory'
 
function ReportItem (props) {

const { data } = prop;
//name, size, fullBottles, percent, more button
  return (
    <>
    
      <div className="inventoryItem">
        <div>
          <img src={data.name} width="50"/>
        </div>
        <div className="margin-left">
          <p>{data.size}</p>     
        </div>
        <div className="margin-left">
          <p>{data.fullBottles} full bottles</p> 
        </div>
        <div className="margin-left">
          <p>{data.percent} %</p> 
        </div>
        <div className="margin-left">   
          <button> More... </button>
        </div>
      </div>
    </>
  )
}

export default ReportItem
