import { combineReducers } from 'redux'

import inventory from './inventory'
import reports from './reports'
import bottles from './bottles'

export default combineReducers({
  inventory,
  bottles,
  reports
})