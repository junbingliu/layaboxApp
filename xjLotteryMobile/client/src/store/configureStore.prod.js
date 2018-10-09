import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from '../history'
import routes from '../routes'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
const finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ routes, createHistory })
)(createStore)
export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
