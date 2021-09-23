import React from 'react'
import { connect } from 'react-redux'
import {Route, Link} from 'react-router-dom'
import { BsFillHouseFill } from "react-icons/bs";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaWineBottle } from "react-icons/fa";
function Nav() {

  return (
      <>
      <div className="navbar bglight-blue"> 
        
        <Link className="" to="/"> <BsFillHouseFill size={30} style={{ fill: '#295C2C' }}/> </Link>
        <Link to="/reports"> <AiOutlineAreaChart size={30} style={{ fill: '#295C2C' }}/> </Link>  
        <Link to="/bottleslider"> <FaWineBottle size={30} style={{ fill: '#295C2C' }} /> </Link> 
     
    </div>
    </>
  )
}

export default Nav
