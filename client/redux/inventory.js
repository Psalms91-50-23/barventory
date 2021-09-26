import { deleteInventoryApi, fetchAllInventory, addBottleToInventory } from "../apis/inventoryApi";

const REQUEST = "barventory/inventory/request";
const RECEIVE = "barventory/inventory/receive";
const ERROR = "barventory/inventory/error";
const DELETE_INVENTORY = "DELETE_INVENTORY";
const ADD_BOTTLE_TO_INVENTORY = 'ADD_BOTTLE_TO_INVENTORY'

const initialState = {
  loading: true,
  inventory: [],
  error: undefined,
};

export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_INVENTORY:
      return {...state, inventory: state.inventory.filter(
        (inventoryItem) => action.id !== inventoryItem.id
      )};
    case ADD_BOTTLE_TO_INVENTORY:
      return {...state, inventory: action.bottle}
    case REQUEST:
      return {
        loading: true,
        inventory: state.inventory,
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
        dispatch(error(err.message));
      });
  };
}

export function addBottle(id) {

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
        dispatch(deleteInventoryAction(inventoryItemId))
      })
      .catch((err) => {
        dispatch("error message in deleteInventoryThunk ", err.message);
      });
  };
}
