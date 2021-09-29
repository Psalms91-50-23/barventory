import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PageHeader from "./PageHeader";
import { NavLink, Route } from "react-router-dom";
import { fetchReports } from "../redux/reports";
import ReportTable from "./ReportTable";
import Loading from "./Loading";
import { format } from "date-fns";

function Reports(props) {
  const { dispatch } = props;

  const [reportId, setReportId] = useState({});

  useEffect(() => {
    dispatch(fetchReports());
  }, []);

  const findLatestReport = () => {
    var highestId = 0;
    props.reports.reports.map((each) => {
      if (each.id > highestId) {
        highestId = each.id;
      }
      return;
    });
    return props.reports.reports.find((each) => each.id == highestId);
  };

  const formatDate = (date) => format(new Date(date), "E d/M yy");

  return (
    <>
      <PageHeader title="Reports" />
      {props.reports.loading ? (
        <Loading />
      ) : (
        <>
          {props.reports.reports.length > 0 && (
            <>
              <div className="report-date-header">
                {formatDate(findLatestReport().date)}
              </div>
              <ReportTable key={"table"} report={findLatestReport()} />
            </>
          )}
          {props.reports.reports.length == 0 && (
            <div className="empty">
              <h1 className="text-primary">Nothing to show 🍺</h1>
              <p>Complete a stocktake first</p>
              <NavLink className="button" to="/inventory">
                Inventory
              </NavLink>
            </div>
          )}
        </>
      )}
    </>
  );
}

function mapStateToProps(globalState) {
  return {
    reports: globalState.reports,
  };
}

export default connect(mapStateToProps)(Reports);
