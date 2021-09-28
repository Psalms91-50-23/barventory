import React from "react";
import ReportItem from "./ReportItem";

// { id: 1, date: '2021-9-29T00:00:00.000Z', users_id: 1, report_data: "[]" }

//report_data: "[object Object]"

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
