import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import DevTools from './DevTools'
import Perf from 'react-addons-perf';

import withStyles from '../decorators/withStyles'
// import pullrefreshcss from "../components/pull-to-refresh/pull-to-refresh.css"
import styles from "../../static/css/style.css"

// @withStyles(pullrefreshcss)
@withStyles(styles)
class Root extends Component {
  componentDidMount(){
    //console.log(Perf);
    if(!window.Perf){
      window.Perf = Perf;
    }
  }
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;