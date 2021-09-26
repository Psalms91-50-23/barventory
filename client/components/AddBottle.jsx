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

  // function onChangeSearch(e){

  //   console.log("search ", e.target.value)
  //   setSearchInput(e.target.value)

  //   if(bottlesState.bottles.length)
  //   {

  //     const filteredInventoryName = inventoryState.inventory.map(inventoryItem => {
  //         return inventoryItem.name

  //     })
  //     const filteredBottles = bottlesState.bottles.filter((bottle) => filteredInventoryName.includes())
  //     setFilteredAdd(filteredBottles)   
  //   }
  // }


  return (
        
    <>
        <div className="flex-flow">
            <h1>AddBottle</h1>
            <button onClick={moveToAddBottle}> inventory page </button>
        </div>
        <div className="flex-flow">
          <label htmlFor="search"></label>
          <input 
            id="search" 
            type="text" 
            value={searchInput} 
            onChange={(e) => onChangeSearch(e)}
          ></input>
          <button> search </button>
        </div>
        <ul>
            {
              filteredAdd?.map(bottle => {

                    return (
                    <div className="block-display margin-right" key={`id_${bottle.id}`}>
                        <div className="padding-top">
                            <img id ="circle-shape" src={bottle.image}/>      
                        </div>
                        <div className="padding-left-n-right" >
                            <p>{bottle.name} {bottle.size}</p>
                        </div>
                        <div className="center">
                            <button className="margin-bot" onClick={()=> addOnClick(bottle.id)}> add </button> 
                        </div>
                    </div>)                  
                })
            } 
        </ul>
      {redirect && <Redirect to="/inventory" />}
    </>
  )
}


function mapStateToProps(globalState){

    return {

    bottlesState: globalState.bottles,
    inventoryState: globalState.inventory

    }
}


export default connect(mapStateToProps) (AddBottle)
