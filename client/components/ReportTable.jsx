import React from "react";
import ReportItem from "./ReportItem";

function ReportTable(props) {
  const { report } = props;
  const reportData = JSON.parse(report.report_data)

  return (
    <ul className="table-list">
      {reportData?.map((bottle) => {
        return (
          <ReportItem key={`bottle_id_${bottle.bottleId}`} data={bottle} />
        );
      })}
    </ul>
  );
}

export default ReportTable;
