import { deleteInventoryApi , fetchAllInventory } from "../apis/inventoryApi";


const REQUEST = "barventory/inventory/request";
const RECEIVE = "barventory/inventory/receive";
const ERROR = "barventory/inventory/error";
const DELETE_INVENTORY = "DELETE_INVENTORY"

// { id: 1, name: 'Smirnoff Vodka', size: 1000, image: '/img/transparent-smirnoff-vodka-1000ml.jpg', silhouette: '/img/silhouette-smirnoff-vodka-1000ml.jpg' }
const initialState = {
  loading: true,
  inventory: [],
  error: undefined,
};

export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {

    case DELETE_INVENTORY:
      return state.inventory.filter(inventoryItem => action.id !== inventoryItem.id )
    case REQUEST:
      return {
         //state
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

function deleteInventoryAction(inventoryItemId){

  return {
      type: DELETE_INVENTORY,
      id: inventoryItemId
  }
}


export function fetchInventory() {

  return (dispatch) => {
    // dispatch(request());
    fetchAllInventory()
    .then(inventoryRecieved => {
      console.log("inventory rec ", inventoryRecieved)
      dispatch(receive(inventoryRecieved))
    })
    .catch(err => {
      dispatch("error message in fetchInventoryThunk ", err.message)
    })
  }
    // Call Superagent
    //.then(data => {
    //   dispatch(receive(data))
    // }).catch(err => {
    //   dispatch(error(err))
    // })
  };


export function addBottle(bottleId) {
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
    // dispatch(request());
    deleteInventoryApi(inventoryItemId)
    .then(result => {
      console.log("result ", result)
      //dispatch(deleteInventoryAction(result))
    })
    .catch(err => {
      dispatch("error message in deleteInventoryThunk ", err.message)
    })
    // Call Superagent
    //.then(data => {
    //   dispatch(receive(data))
    // }).catch(err => {
    //   dispatch(error(err))
    // })
  };
}