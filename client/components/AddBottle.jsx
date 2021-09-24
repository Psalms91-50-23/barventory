import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchBottles } from '../redux/bottles'
import { addBottleToInventory } from '../apis/inventoryApi'
import { Redirect } from "react-router";
import { fetchInventory } from '../redux/inventory';

function AddBottle (props) {

  const { bottlesState , dispatch, inventoryState } = props
  const [redirect, setRedirect] = useState(false);
 // console.log("props in add bottle  ", props)
  useEffect(() => {
   
    dispatch(fetchBottles())
    dispatch(fetchInventory())
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
                    <div className="block-display margin-right" key={`id_${bottle.id}`}>
                        <div className="padding-top">
                            <img id ="circle-shape" src={bottle.image}/>      
                        </div>
                        <div className="padding-left-n-right" >
                            <p>{bottle.name} {bottle.size} </p>
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
