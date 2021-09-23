const REQUEST = "barventory/inventory/request";
const RECEIVE = "barventory/inventory/receive";
const ERROR = "barventory/inventory/error";

const initialState = {
  loading: true,
  inventory: [],
  error: undefined,
};

export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
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


export function fetchInventory() {
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