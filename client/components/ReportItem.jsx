import React from 'react'
import { NavLink } from 'react-router-dom'

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
          <NavLink className="button" to={`/reports/${data.bottleName}`}>See</NavLink>
        </div>
      </div>
    </>
  )
}

export default ReportItem
