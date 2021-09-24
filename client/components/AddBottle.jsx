import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchBottles } from '../redux/bottles'
import { addBottle } from '../redux/inventory'
import { addBottleToInventory } from '../apis/inventoryApi'
import { Redirect } from "react-router";


function AddBottle (props) {

  const { bottlesState , dispatch} = props
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
   
    dispatch(fetchBottles())
    
  },[])

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

  return (
    <>
      <h1>AddBottle</h1>
      <ul>
        {
            bottlesState.bottles?.map(bottle => {

                return (
                <>  
                    <div id={`bottle_ID_${bottle.id}`}>
                        <li>{bottle.name} </li>
                    </div>  
                    <div>
                        <button onClick={()=> addOnClick(bottle.id)}> add </button>
                    </div> 
                     
                </>
             
                )
                
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
