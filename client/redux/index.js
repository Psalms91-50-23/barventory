import { combineReducers } from 'redux'

// import stuff from './stuff'
import inventory from './inventory'
import reports from './reports'
import bottles from './bottles'

export default combineReducers({
  // stuff
  inventory,
  bottles,
  reports
})