import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchBottles } from '../redux/bottles'
import { addBottleToInventory } from '../apis/inventoryApi'
import { Redirect } from "react-router";
import { fetchInventory } from '../redux/inventory';
import { NavLink, useHistory } from "react-router-dom";

function AddBottle (props) {


  const { bottlesState , dispatch, inventoryState } = props
  const [redirect, setRedirect] = useState(false)
  const [ filteredAdd , setFilteredAdd ] = useState([])
  const [ searchInput, setSearchInput ] = useState('')

  const history = useHistory()
  useEffect(() => {
   
    dispatch(fetchBottles())
  },[])

  useEffect(() => {

    filterBottles()  
   
  },[bottlesState])


  function addOnClick(id)
  {
    
    addBottleToInventory(id)
    .then(() => {
      setRedirect(true)
    })
    .catch((err) => {
        console.log("error ", err.message)
    });
   
  }

  function moveToAddBottle()
  {
    history.push("/inventory")
  }

  function filterBottles()
  {
    if(bottlesState.bottles.length)
    {

      const filteredInventoryName = inventoryState.inventory.map(inventoryItem => {
          return inventoryItem.name

      })
      const filteredBottles = bottlesState.bottles.filter((bottle) => !filteredInventoryName.includes(bottle.name))
      setFilteredAdd(filteredBottles)   
    }
  }


  return (
    <>
      <div>
        <h1>AddBottle</h1>
        <button onClick={moveToAddBottle}> inventory page </button>
      </div>
      <div>
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          value={searchInput}
          onChange={(e) => onChangeSearch(e)}
        ></input>
        <button> search </button>
      </div>
      <ul className="table-list">
        {filteredAdd?.map((bottle) => {
          return (
            <div className="inventoryItem" key={`id_${bottle.id}`}>
              <img src={bottle.image} />
              <p>
                {bottle.name} {bottle.size}
              </p>
              <button onClick={() => addOnClick(bottle.id)}>Add</button>
            </div>
          );
        })}
      </ul>
      {redirect && <Redirect to="/inventory" />}
    </>
  );
}


function mapStateToProps(globalState){

    return {

    bottlesState: globalState.bottles,
    inventoryState: globalState.inventory

    }
}


export default connect(mapStateToProps) (AddBottle)
