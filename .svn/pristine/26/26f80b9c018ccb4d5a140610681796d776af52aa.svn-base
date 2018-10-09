import React from 'react';
import Router,{Redirect, Route,IndexRoute} from 'react-router';
// import '../static/style/businessArea.css';
//import HomePage from 'components/HomePage/PackageHomePage.js'

import HomePage from 'components/HomePage/applyPage'
import App from 'components/App/App';


import lotteryStart from "./components/HomePage/homPage";
import ourselfs from "./components/HomePage/ourselfs";
import exhibitors from "./components/HomePage/exhibitors";
import applyPage from "./components/HomePage/applyPage";
import publishActive from "./components/Active/publishActive";
import MyPubActive from "./components/Active/myPublishActive";
// import activeDetail from "./components/Active/activeDetail";
import startLotteryPage from "./components/Active/startLotteryPage";
import shareQrcode from "./components/AlertLayer/QRcode";
import activeDetail from "./components/Active/lotteryDetail";


const routes = (
        <Route path='/' component={App}>
            <IndexRoute name='home' component={HomePage} ></IndexRoute>
            <Route name='lotteryStart' path="lotteryStart/:id" component={lotteryStart}/>
            <Route name='ourselfs' path="ourselfs/:id" component={ourselfs}/>
            <Route name='exhibitors' path="exhibitors/:id" component={exhibitors}/>
            <Route name='applyPage' path="applyPage" component={applyPage}/>
            <Route name='publishActive' path="publishActive" component={publishActive}/>
            <Route name='MyPubActive' path="MyPubActive/:types" component={MyPubActive}/>
            {/*<Route name='activeDetail' path="activeDetail/:id" component={activeDetail}/>*/}
            <Route name='startLotteryPage' path="startLotteryPage/:id" component={startLotteryPage}/>
            <Route name='shareQrcode' path="shareQrcode/:id" component={shareQrcode}/>
            <Route name='activeDetail' path="activeDetail/:id" component={activeDetail}/>

        </Route>
);
export default routes;