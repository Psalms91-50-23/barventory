import React from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import Home from './Home'
import InventoryScreen from './InventoryScreen'
import Reports from './Reports'
import BottleSlider from './BottleSlider'
function App () {

  return (
    <>
      <h1>App</h1>
      <div className="app-wrap">
        <Route exact path='/' component={Home}/>
        <Route path='/reports' component={Reports} />
        <Route path='/inventory' component={InventoryScreen}/>
        <Route path='/bottleslider' component={BottleSlider}/>
      </div>
    </>
  )
}

export default App
