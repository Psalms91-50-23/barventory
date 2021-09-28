import React from "react";
import PageHeader from "./PageHeader";
import { NavLink } from  "react-router-dom"
import { connect } from "react-redux"

function MultiReport(props) {

  const { bottleName } = props
  
  return (
    <>
      <PageHeader
        title="MultiReport"
        leftAction={
          <NavLink className="button" to="/reports">
            Back
          </NavLink>
        }
      />
      <h1>This is a multireport page</h1> 
    </>
  );
}

export default connect()(MultiReport);