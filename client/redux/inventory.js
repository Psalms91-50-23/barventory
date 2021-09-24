import { deleteInventoryApi, fetchAllInventory, addBottleToInventory } from "../apis/inventoryApi";

const REQUEST = "barventory/inventory/request";
const RECEIVE = "barventory/inventory/receive";
const ERROR = "barventory/inventory/error";
const DELETE_INVENTORY = "DELETE_INVENTORY";
const ADD_BOTTLE_TO_INVENTORY = 'ADD_BOTTLE_TO_INVENTORY'
// { id: 1, name: 'Smirnoff Vodka', size: 1000, image: '/img/transparent-smirnoff-vodka-1000ml.jpg', silhouette: '/img/silhouette-smirnoff-vodka-1000ml.jpg' }
const initialState = {
  loading: true,
  inventory: [],
  error: undefined,
};

export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_INVENTORY:
      // return state.inventory.filter(
      //   (inventoryItem) => action.id !== inventoryItem.id
      // );
      console.log("state in delete inventory  ", state)
      const stateArr = [...state, {inventory: state.inventory.filter((inventoryItem) => action.id !== inventoryItem.id)}]
      console.log("stateArr ", stateArr)
      return stateArr
    case ADD_BOTTLE_TO_INVENTORY:
      return [...state, action.bottle]
    case REQUEST:
      return {
        loading: true,
        inventory: [],
        error: undefined,
      };
    case RECEIVE:
      return {
        loading: false,
        inventory: action.inventory,
        error: undefined,
      };
    case ERROR:
      return {
        loading: false,
        inventory: [],
        error: action.error,
      };
    default:
      return state;
  }
}

//Add actions here
function receive(inventory) {
  return {
    type: RECEIVE,
    inventory: inventory,
  };
}

function error(error) {
  return {
    type: ERROR,
    error: error,
  };
}

function request() {
  return {
    type: REQUEST,
  };
}


function deleteInventoryAction(inventoryItemId) {
  return {
    type: DELETE_INVENTORY,
    id: inventoryItemId,
  };
}

function addBottleToInventoryAction(bottle)
{
  return {
    type: ADD_BOTTLE_TO_INVENTORY,
    bottle: bottle
  }
}


export function fetchInventory() {
  return (dispatch) => {
    dispatch(request());
    fetchAllInventory()
      .then((inventoryRecieved) => {
        dispatch(receive(inventoryRecieved));
      })
      .catch((err) => {
        dispatch("error message in fetchInventoryThunk ", err.message);
      });
  };
}

export function addBottle(id) {

  return (dispatch) => {
    dispatch(request());

    // addBottleToInventory(id)
    // .then(data => {
    //   consolge.log("data ", data)
    //   addBottleToInventoryAction(data)
    // })
    // .catch((err) => {
    //   dispatch("error message in fetchInventoryThunk ", err.message);
    // });
    // Call Superagent
    //.then(data => {
    //   dispatch(receive(data))
    // }).catch(err => {
    //   dispatch(error(err))
    // })
  };
}

export function deleteBottle(bottleId) {
  return (dispatch) => {
    dispatch(request());
    // Call Superagent
    //.then(data => {
    //   dispatch(receive(data))
    // }).catch(err => {
    //   dispatch(error(err))
    // })
  };
}

export function deleteInventoryItem(inventoryItemId) {
  return (dispatch) => {
    dispatch(request());
    deleteInventoryApi(inventoryItemId)
      .then((result) => {
        dispatch(deleteInventoryAction(result))
      })
      .catch((err) => {
        dispatch("error message in deleteInventoryThunk ", err.message);
      });
  };
}
