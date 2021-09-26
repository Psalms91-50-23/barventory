import React, { useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import InventoryScreen from './InventoryScreen'
import Reports from './Reports'
import Nav from './Nav'
import BottleSlider from './bottle-slider/BottleSlider'
import AddBottle from './AddBottle'


function App () {

  return (
    <>
      {/* <h1>App</h1> */}
      <BrowserRouter>
        <div className="app-wrap">
          <Route exact path="/" component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/inventory" component={InventoryScreen} />
          <Route path="/bottleslider" component={BottleSlider} />
          <Route path="/addbottle" component={AddBottle} />
        </div>
        <Route path="/" component={Nav} />
      </BrowserRouter>
    </>
  );
}

export default App
