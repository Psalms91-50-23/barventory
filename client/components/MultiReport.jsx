import React, { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import { NavLink } from  "react-router-dom"
import { connect } from "react-redux"
import { fetchReports } from '../redux/reports'
import Graph from './Graph'
import { FaChevronLeft } from "react-icons/fa";

function MultiReport(props) {
  
  const [readyCheck, setReadyCheck] = useState(false)
  const [historyArray, setHistoryArray] = useState([])
  const { reports, dispatch } = props
  const bottleName = (props.location.pathname.split('/reports/'))[1]

  useEffect(() => {
    dispatch(fetchReports())
    getReportArray()
  }, [])

  const getReportArray = () => {
    const reportArray = []
    //Go through each report object inside reports
    reports.reports.map((report) => {
      //Go into each report_data property
      //Map through it (Array)
      const reportData = JSON.parse(report.report_data)
      var reportDate = report.date
      var reportObject = {}
      var isHit = false
      reportData.map((data) => {
        //Check if bottleName is in this array (Already named bottleName)
        if(bottleName == data.bottleName){
          reportObject = data
          isHit = true
          // If it is, take the whole object and store it in temp obj
        }
        else {
          reportDate = ''
          reportObject = {}
          isHit = false
        }        
        //Check that reportDate and reportObject arent empty
        if(isHit){
          reportObject.reportDate = reportDate
          reportArray.push(reportObject)
        }
        return
      })
      return
    })
    setReadyCheck(true)
    setHistoryArray(reportArray)
    return
  }
   
  return (
    <>
      <PageHeader
        title="MultiReport"
        leftAction={
          <NavLink className="button" to="/reports">
            <FaChevronLeft /> Back
          </NavLink>
        }
      />
      {readyCheck ? <Graph historyData={historyArray} /> : <p>loading...</p>}
    </>
  );
}

function mapStateToProps(globalState) {
  return {
    reports: globalState.reports
  }
}

export default connect(mapStateToProps)(MultiReport);