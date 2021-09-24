import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchBottles } from '../redux/bottles'
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
        <div>
            <h1>AddBottle</h1>

        </div>
        <ul>
            {
                bottlesState.bottles?.map(bottle => {
                    return (
                    <>  
                        <div>
                            <div id={`bottle_ID_${bottle.id}`}>
                                <li key={`addBottle_${bottle.id}`}>{bottle.name} </li>
                            </div>  
                            <div>
                                <button onClick={()=> addOnClick(bottle.id)}> add </button>
                            </div> 
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
