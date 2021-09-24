import React from 'react'
import InventoryItem from './InventoryItem'

function Table (props) {

    const { inventory } = props

    return (

      <div>
        <ul>
            {inventory?.map(bottle => {

            return (
                <InventoryItem key={`inventory_id_${bottle.id}`} bottle={bottle}/>
            )
            })
            }
        </ul>
      </div>
      
    )
  }
  
  export default Table
  