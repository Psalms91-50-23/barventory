import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

function ReportItem (props) {
  const { data } = props
  return (
    <>
      <div className="inventoryItem">
        <div>
          <p>{data.bottleName}</p>
        </div>
        <div>
          <div>
            <p>{data.bottleSize}</p>
          </div>
          <div>
            <p>{data.fullBottles} full bottles</p> 
          </div>
          <div>
            <p>{data.percent} %</p>
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
