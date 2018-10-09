import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import RouteCSSTransitionGroup from '../util/RouteCSSTransitionGroup.js'
import withStyles from '../../decorators/withStyles';
import { connect } from 'react-redux'
import styles from './App.css'
import AlertLayer from '../AlertLayer/AlertLayer'


@withStyles(styles)
class App extends React.Component {
    routerWillLeave(nextLocation) {
        // return false to prevent a transition w/o prompting the user,
        // or return a string to allow the user to decide:
        console.log("routerWillLeave======:"+nextLocation);
    }


    render() {
        let {pathname,isBack,isUp,weiXinDialog,alertLayer,selectDialog} = this.props;
        console.log("////////////////////",alertLayer);
        let className="page";
        if(isUp){
            className="pageU"
        }
        return (
            <div>
                {alertLayer&&alertLayer.show && <AlertLayer message={alertLayer.message} icon={alertLayer.icon}></AlertLayer>}
            <ReactCSSTransitionGroup
                component="div" transitionName={isBack?"pager":className} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                <div key={pathname}>
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
            </div>
        )
    }
}
let select = function(state) {
    var alertLayer = state.alertLayer;
    var selectDialog = state.selectDialog;
    return {pathname: state.router.location.pathname, isBack: state.nav.isBack,isUp:state.nav.isUp,alertLayer,selectDialog};
}
export default connect(select,{
})(App);
