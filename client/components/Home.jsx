import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchInventory  } from '../redux/inventory'

function Home (props) {

  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default connect() (Home)
