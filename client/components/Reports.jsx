import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import PageHeader from "./PageHeader";
import { Route } from "react-router-dom"
import { fetchReports } from "../redux/reports"
import ReportTable from "./ReportTable"
import Loading from "./Loading";

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
      <PageHeader title="Reports" />
      {props.reports.loading ? (
        <Loading />
      ) : (
        <div>
          <div className="report-date-header">
            {findLatestReport().date}
          </div>
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
