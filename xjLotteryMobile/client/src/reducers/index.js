import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'


import nav from './alertLayer'
import alertLayer from './nav'
import login from './login'
import activeList from './activeList'

const rootReducer = combineReducers({
    router,
    nav,
    alertLayer,
    login,
    activeList
})

export default rootReducer