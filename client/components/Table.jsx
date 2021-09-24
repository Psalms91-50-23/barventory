import React from "react";
import InventoryItem from "./InventoryItem";

function Table(props) {
  const { inventory } = props;

  return (
    <ul class="table-list">
      {inventory?.map((bottle) => {
        return (
          <InventoryItem key={`inventory_id_${bottle.id}`} bottle={bottle} />
        );
      })}
    </ul>
  );
}

export default Table;
