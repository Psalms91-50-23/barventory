import { getAllReports, addReportAPI, deleteReportAPI } from "../apis/reportsApi";

const REQUEST = "barventory/reports/request";
const RECEIVE = "barventory/reports/receive";
const ERROR = "barventory/reports/error";

const initialState = {
  loading: true,
  reports: [],
  error: undefined,
};

// Reducers
export default function reportsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        loading: true,
        reports: [],
        error: undefined,
      };
    case RECEIVE:
      return {
        loading: false,
        reports: action.reports,
        error: undefined,
      };
    case ERROR:
      return {
        loading: false,
        reports: [],
        error: action.error,
      };
    default:
      return state;
  }
}

// Actions
function receive(reports) {
  return {
    type: RECEIVE,
    reports: reports,
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

// Dispatch Actions
export function fetchReports() {
  return (dispatch) => {
    dispatch(request());
    getAllReports()
    .then(data => {
      dispatch(receive(data))
    }).catch(err => {
      dispatch(error(err))
    })
  };
}

export function addReport(report) {
  return (dispatch) => {
    dispatch(request());
    addReportAPI(report)
    .then(data => {
      dispatch(receive([data]))
    }).catch(err => {
      dispatch(error(err))
    })
  };
}

export function deleteReport(reportId) {
  return (dispatch) => {
    dispatch(request());
    deleteReportAPI(reportId)
    .then(data => {
      dispatch(receive(data))
    }).catch(err => {
      dispatch(error(err))
    })
  };
}
