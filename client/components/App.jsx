import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import InventoryScreen from './InventoryScreen'
import Reports from './Reports'
import Nav from './Nav'
import BottleSlider from './bottle-slider/BottleSlider'
import AddBottle from './AddBottle'
import MultiReport from './MultiReport'
import Silhouette from './Silhouette'

function App () {

  //Go to Login page if not logged in
  if (window.location.pathname != "/" && !localStorage.getItem("token")) {
    window.location = "/";
  }

  return (
    <>
      {/* <h1>App</h1> */}
      <BrowserRouter>
        <div className="app-wrap">
          <Route exact path="/" component={Home} />
          <Route exact path="/reports" component={Reports} />
          <Route path="/inventory" component={InventoryScreen} />
          <Route path="/silhouette" component={Silhouette} />
          <Route path="/bottleslider" component={BottleSlider} />
          <Route path="/addbottle" component={AddBottle} />
          <Route path="/reports/:bottleName" component={MultiReport} />
        </div>
        <Route path="/" component={Nav} />
      </BrowserRouter>
    </>
  );
}

export default App
