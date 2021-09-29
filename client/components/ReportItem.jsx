import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

function ReportItem (props) {
  const { data } = props
  return (
    <>
      <div className="inventoryItem">
        <div className="report-column-a">
          <div className="bottleName">
            <p>{data.bottleName}</p>
          </div>
          <div className="bottleSize">
            <p>{data.bottleSize}</p>
          </div>
        </div>
        <div className="report-column-b">
          <div className="fullBottles">
            <p>{data.fullBottles} Full Bottles</p> 
          </div>
          <div className="bottlePercent">
            <p> + {(data.percent)*100} %</p>
          </div>
        </div>
        <NavLink className="button" to={`/reports/${data.bottleName}`}>
          <FaChevronRight />
        </NavLink>
      </div>
    </>
  )
}

export default ReportItem
