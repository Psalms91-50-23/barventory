import { getBottles } from "../apis/bottlesApi";

const REQUEST = "barventory/bottles/request";
const RECEIVE = "barventory/bottles/receive";
const ERROR = "barventory/bottles/error";

const initialState = {
  loading: true,
  bottles: [],
  error: undefined,
};

export default function bottlesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        loading: true,
        bottles: [],
        error: undefined,
      };
    case RECEIVE:
      return {
        loading: false,
        bottles: action.bottles,
        error: undefined,
      };
    case ERROR:
      return {
        loading: false,
        bottles: [],
        error: action.error,
      };
    default:
      return state;
  }
}

//Add actions here
function receive(bottles) {
  return {
    type: RECEIVE,
    bottles: bottles,
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

export function fetchBottles() {
  return (dispatch) => {
    dispatch(request());
    getBottles()
    .then(data => {
      dispatch(receive(data))
    }).catch(err => {
      dispatch(error(err))
    })
  };
}
