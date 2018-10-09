import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import $ from 'jquery'
const store = configureStore()
import {getUser} from './actions/loginAction'
//import {PACKAGE_PAGE,PACJAGE_PAGE_URL} from './consts';
import {HOME_PAGE,HOME_PAGE_URL} from './consts';

// import {loadPage} from './actions/pageActions';

//var loadPage=require('./actions/pageActions');
import FastClick from 'fastclick';

FastClick.attach(document.body);

$.ajaxSetup({
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    }
});

//store.dispatch(loadPage(PACKAGE_PAGE,PACJAGE_PAGE_URL));
// store.dispatch(loadPage(HOME_PAGE,HOME_PAGE_URL));
store.dispatch(getUser());
render(
    <Root store={store} />,
    document.getElementById('app')
)

