import React from 'react'
import {Route} from 'react-router-dom'
import { deleteBottle } from '../redux/inventory'
import { deleteInventoryItem  } from '../redux/inventory'
import MultiReport from "./MultiReport"

function ReportItem (props) {

const { data } = props
  return (
    <>
      <div className="inventoryItem">
        <div className="margin-left">
          <p>{data.bottleName}</p>
        </div>
        <div className="margin-left">
          <p>{data.bottleSize}</p>
        </div>
        <div className="margin-left">
          <p>{data.fullBottles} full bottles</p> 
        </div>
        <div className="margin-left">
          <p>{data.percent} %</p>
        </div>
        <div className="margin-left">   
          <button onClick={}> More... </button>
        </div>
      </div>
    </>
  )
}

export default ReportItem
