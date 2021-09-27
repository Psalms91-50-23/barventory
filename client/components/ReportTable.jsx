import React from "react";
import ReportItem from "./ReportItem";

// { id: 1, date: '2021-9-29T00:00:00.000Z', users_id: 1, report_data: "[]" }

//report_data: "[object Object]"

function ReportTable(props) {
  const { report } = props;
  const data = JSON.parse(report.report_data)

  const getDataById = (id) => {
    return (data.find(d => d.id == id)) 
  }

  return (
    <ul className="table-list">
      {data?.map((data) => {
        return (
          <ReportItem key={`report_id_${data.id}`} data={getDataById(data.id)} />
        );
      })}
    </ul>
  );
}

export default ReportTable;
