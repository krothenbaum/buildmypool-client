import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import counter from './counter'
import booster from './booster';

export default combineReducers({
  router: routerReducer,
  booster
})
