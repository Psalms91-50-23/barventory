import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from './Home'
import InventoryScreen from './InventoryScreen'
import Reports from './Reports'
import BottleSlider from './BottleSlider'
import Nav from './Nav'

function App () {

  return (
    <>
      {/* <h1>App</h1> */}
      <BrowserRouter>
        <div> 
            <Route exact path='/' component={Home}/>
            <Route path='/' component={Nav}/>       
            <Route path='/reports' component={Reports} />
            <Route path='/inventory' component={InventoryScreen}/>
            <Route path='/bottleslider' component={BottleSlider}/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
