/**
 * Created by zhengxiangyang on 16/3/22.
 */
import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import httpClient from "../Core/HttpClient"
import {STAT_URL} from "../consts.js"
let views = {};
let parent = null;

//时不常将数据发送到服务器
async function sendViewsToServer(){
    let toBeSent = [];
    let now = new Date().getTime();
    for(let k in views){

        let v = views[k];
        if(v.leave){
            if(parent){
                v.pHref = parent.href;
                v.pEnter = parent.enter;
            }
            parent = v;
            toBeSent.push(v);
        }
        else{
            if(v.enter){
                if(now - v.enter>5*60*1000){
                    //如果大于5分钟,则发送到服务器
                    toBeSent.push(v)
                }
            }
        }
    }

    if(toBeSent.length>0){
        let ret = await httpClient.post(STAT_URL,{views:JSON.stringify(toBeSent)});
        if(ret && ret.state == 'ok'){
            toBeSent.map((v)=>{delete views[v.enter]})
        }
    }
}



function withStat(tag) {
    return (ComposedComponent) => class WithStyles extends Component {
        constructor(){
            super();
            this.viewId = "";
            this.href= null;
        }
        componentDidMount(){
            this.href = window.location.href;
            let pos = this.href.indexOf("?");
            if(pos>=0){
                this.href = this.href.substring(0,pos);
            }
            this.enter = new Date().getTime();
            this.viewId = this.enter;

            views[this.viewId] = {enter:this.enter,href:this.href,tag:tag};

        }

        componentWillUnmount(){
            console.log("willUnmount",tag);
            let view = views[this.viewId];
            if(view){
                let now = new Date().getTime();
                if(now - this.enter<600){
                    delete views[this.viewId];
                }
                else{
                    view.leave = now;
                    console.warn(view);
                }

            }
        }

        render(){
            return <ComposedComponent {...this.props} />;
        }


    }
}

export default withStat;