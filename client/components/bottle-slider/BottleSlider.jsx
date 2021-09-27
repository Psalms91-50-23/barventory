import React, { useState, useEffect } from "react"
import { Redirect } from "react-router"
import { NavLink } from "react-router-dom"
import MeasureBottle from "./MeasureBottle"
import { connect } from "react-redux"
import { fetchInventory } from "../../redux/inventory"

export function BottleSlider(props) {
  //If the page should redirect to reports
  const [redirect, setRedirect] = useState(false)
  const { dispatch, inventory } = props
  // Current bottle index. eg 4 would be 4th/15 bottles
  const [progress, setProgress] = useState(0)
  const [report, setReport] = useState([])
  
  useEffect(() => {
    dispatch(fetchInventory())
  }, [])

  const getCurrentBottle = () => {
    return inventory.inventory[progress]
  }

  function nextBottle(fullBottles, percent) {
    setReport([
      ...report,
      {
        bottleId: getCurrentBottle().id,
        bottleName: getCurrentBottle().name,
        bottleSize: getCurrentBottle().size,
        fullBottles: fullBottles,
        percent: percent
      }
    ])
    //Check if there's a next bottle
    if (inventory.inventory[progress + 1] != null) {
      setProgress(progress + 1)
    } else {
      // We've completed the report.
      // TODO: POST Report to database
      // then
      setRedirect(true)
    }
  }

  return (
    <div className='bottle-slider-screen'>
      <div className='bottle-slider-head'>
        <NavLink to='/inventory' className='button bottle-slider-cancel'>
          Cancel
        </NavLink>
        <div className='bottle-slider-progress'>
          {progress + 1}/{inventory.inventory.length}
        </div>
      </div>
      {inventory.loading ? (
        <div>
          <p>loading....</p>
        </div>
      ) : (
        <>
          <MeasureBottle bottle={getCurrentBottle()} complete={nextBottle} />
          {redirect && <Redirect to='/reports' />}
        </>
      )}
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    inventory: globalState.inventory
  }
}
export default connect(mapStateToProps)(BottleSlider)
