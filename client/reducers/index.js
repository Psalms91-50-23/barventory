import { combineReducers } from 'redux'

// import stuff from './stuff'
import inventory from './inventory'
import auth from './auth'
import reports from './reports'
import bottles from './bottles'

export default combineReducers({
  // stuff
  inventory,
  bottles,
  reports,
  auth

})
