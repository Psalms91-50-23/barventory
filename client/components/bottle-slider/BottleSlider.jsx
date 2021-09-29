import React, { useState, useEffect } from "react"
import { NavLink, Redirect } from "react-router-dom";
import MeasureBottle from "./MeasureBottle";
import { connect } from "react-redux"
import { fetchInventory } from "../../redux/inventory"
import { addReport } from "../../redux/reports"
import Loading from "../Loading";

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
    const newReports = [
      ...report,
      {
        bottleId: getCurrentBottle().id,
        bottleName: getCurrentBottle().name,
        bottleSize: getCurrentBottle().size,
        fullBottles: fullBottles,
        percent: percent
      }
    ]
    setReport(newReports)
    //Check if there's a next bottle
    if (inventory.inventory[progress + 1] != null) {
      setProgress(progress + 1)
    } else {
      const newReport = {
        date: (new Date()).toUTCString(),
        report_data: newReports
      }
      dispatch(addReport(newReport))
      setRedirect(true)
    }
  }

  return (
    <div className="bottle-slider-screen">
      <div className="bottle-slider-head">
        <div className="actions">
          <NavLink to="/inventory" className="button bottle-slider-cancel">
            Cancel
          </NavLink>
          <div className="bottle-slider-progress">
            {progress + 1}/{inventory.inventory.length}
          </div>
        </div>
        <div className="measure-bottles-top">
          <div>
            Bottle
            <h1>{getCurrentBottle()?.name}</h1>
          </div>
          <div className="text-right">
            <div>Volume</div>
            <h1>{getCurrentBottle()?.size}</h1>
          </div>
        </div>
      </div>
      {inventory.loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <MeasureBottle bottle={getCurrentBottle()} complete={nextBottle} bottleIMG={inventory.inventory[progress].image}/>
          {redirect && <Redirect to="/reports" />}
        </>
      )}
    </div>
  );
}

function mapStateToProps(globalState) {
  return {
    inventory: globalState.inventory
  }
}
export default connect(mapStateToProps)(BottleSlider)
