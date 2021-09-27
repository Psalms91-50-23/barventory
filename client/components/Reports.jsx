import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import PageHeader from "./PageHeader";
import { Route } from "react-router-dom"
import { fetchReports } from "../redux/reports"
import ReportTable from "./ReportTable"

function Reports(props) {

  const { dispatch } = props

  const [reportId, setReportId] = useState({})

  useEffect(() => {
    dispatch(fetchReports())
  }, [])

  const findLatestReport = () => {
    var highestId = 0
    
    props.reports.reports.map((each) => {
      if (each.id > highestId) {
        highestId = each.id
      }
      return
    })
    return props.reports.reports.find((each) => each.id == highestId)
  }

  return (
    <>
      <h1>Reports</h1>
      {props.reports.loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <p>{findLatestReport().date}</p>
          <div>
            <ReportTable key={"table"} report={findLatestReport()}/>
          </div>
        </div>
      )}
    </>
  );
}

function mapStateToProps(globalState) {
  return {
    reports: globalState.reports
  }
}

export default connect(mapStateToProps)(Reports)
