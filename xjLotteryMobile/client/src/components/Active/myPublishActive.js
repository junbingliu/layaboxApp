import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {GETMYACTIVE,GETALLACTIVELIST} from '../../consts';
import withStyles from '../../decorators/withStyles';
import {getActiveArray} from "../../actions/getActiveList"
import styles2 from "../../../static/css/style.css";
import $ from 'jquery'
@withStyles(styles2)
class myPublishActive extends Component {

    constructor() {
        super();
        this.state = {name:"",mobile:"",showType:"1",lotteryList:[]}
    }

    componentWillMount() {
        this.props.dispatch(getActiveArray(GETMYACTIVE,{},function (ret) {
            
        }));
        var val =this.props.params.types;
        let self=this;
        // if(val=="2"){
        //     $.post(GETALLACTIVELIST,{},function (ret) {
        //         self.setState({showType:val,lotteryList:ret.lotteryList});
        //     },'json')
        // }
        self.setState({showType:val});
    }


    selectBtn(val){
        let self=this;
        this.props.dispatch(getActiveArray(GETMYACTIVE));
        this.setState({showType:val});
       // $.post(GETMYACTIVE,{},function (ret) {
       //     if(val=="3"){
       //         self.setState({showType:val,lotteryList:ret.activeJoinList});
       //     }
       //     else if (val=="2"){
       //         self.setState({showType:val,lotteryList:ret.winningList});
       //     }
       //     else if(val=="1"){
       //         self.setState({showType:val,lotteryList:ret.activeAddList});
       //     }
       //
       //  },'json')

    }
    toAddActive(){
        window.location.href="#/publishActive"
    }
    checkActiveDetail(id){
        window.location.href="#/activeDetail/"+id;
    }


    render() {
        const {activeAddList,activeJoinList,winningList} = this.props;
        let showType=this.state.showType;
        var showList=[];
        if(showType=="1"){
            showList=activeAddList;

        }
        else if(showType=="2"){
            showList=winningList;
        }
        else if(showType=="3"){
            showList=activeJoinList
        }



        return (

            <div className="container" style={{paddingBottom: '2.5rem'}}>

                <div className="newHead">
                </div>



                <article className="rowTop">
                    <div className="lottery" style={{position: 'fixed', height: '100%'}}>
                        <div className="rotary">
                            <ul className="wk-flex">
                                <li className={this.state.showType=="1"?"my-item mi-1 active":"my-item mi-1"} onClick={this.selectBtn.bind(this,"1")}><a href="javascript:void (0)" ><p>我发起的</p></a></li>
                                <li className={this.state.showType=="2"?"my-item mi-2 active":"my-item mi-2"} onClick={this.selectBtn.bind(this,"2")}><a href="javascript:void (0)" ><p>我中奖的</p></a></li>
                                <li className={this.state.showType=="3"?"my-item mi-3 active":"my-item mi-3"} onClick={this.selectBtn.bind(this,"3")}><a href="javascript:void (0)" ><p>我参与的</p></a></li>
                            </ul>
                        </div>
                        {showType=="1"&& <div className="awards">
                            <div className="inner">
                                <div className="ico-side side-1"><img src={require("../../../static/images/ico-side-1.png")}/></div>
                                <div className="ico-side side-2"><img src={require("../../../static/images/ico-side-2.png")}/></div>
                                <div className="ico-side side-3"><img src={require("../../../static/images/ico-side-4.png")}/></div>
                                <div className="ico-side side-4"><img src={require("../../../static/images/ico-side-3.png")}/></div>
                                {showList&&showList.length>0&&<h3>活动列表！</h3>}
                             <ul className="list my-enter">
                                 {showList&&showList.length>0&&showList.map((obj,index)=> <li className="item-2" onClick={this.checkActiveDetail.bind(this,obj.id)}>
                                        <span className="name">活动主题：</span>
                                        <span className="number">{obj.title} </span>
                                        <span className="time">{obj.time}</span>
                                        <em className="arrows"></em>
                                    </li>
                                 )}
                                </ul>
                                {showList&&showList.length==0&&<div className="hint">
                                    <div className="hint-pic">
                                        <img src={require("../../../static/images/hint-img.png")}/>
                                    </div>
                                    <p className="txt">您还未发起抽奖，赶紧发起一个吧！</p>
                                </div>}
                            </div>
                        </div>}

                        {this.state.showType=="2"&&<div className="prize">
                            {showList&&showList.length>0&&showList.map((ol,kIndex)=><div className="awards">
                                <div className="inner">
                                    <div className="ico-side side-1"><img src={require("../../../static/images/ico-side-1.png")}/></div>
                                    <div className="ico-side side-2"><img src={require("../../../static/images/ico-side-2.png")}/></div>
                                    <div className="ico-side side-3"><img src={require("../../../static/images/ico-side-4.png")}/></div>
                                    <div className="ico-side side-4"><img src={require("../../../static/images/ico-side-3.png")}/></div>
                                     <div>
                                    <div className="prize-name">活动名称:{ol.title}</div>
                                         {ol.giftList&&ol.giftList.length>0&&ol.giftList.map((op,od)=><div className="result clearfix">
                                             <div className="left">
                                                 <img src={op.imgUrl}/>
                                             </div>
                                             <p className="right">恭喜您<em></em>抽到<em>{op.name}</em></p>
                                         </div>
                                             )}
                                    </div>
                                </div>
                            </div>)}
                        </div>}


                        {this.state.showType=="1"&&<div className="button" onClick={this.toAddActive.bind(this)}>
                            <p>发起活动</p>
                        </div>
                        }


                        {showType=="3"&& <div className="awards">
                            <div className="inner">
                                <div className="ico-side side-1"><img src={require("../../../static/images/ico-side-1.png")}/></div>
                                <div className="ico-side side-2"><img src={require("../../../static/images/ico-side-2.png")}/></div>
                                <div className="ico-side side-3"><img src={require("../../../static/images/ico-side-4.png")}/></div>
                                <div className="ico-side side-4"><img src={require("../../../static/images/ico-side-3.png")}/></div>
                                {showList&&showList.length>0&&<h3>活动列表！</h3>}
                                <ul className="list my-enter">
                                    {showList&&showList.length>0&&showList.map((obj,index)=><li className="item-2" onClick={this.checkActiveDetail.bind(this,obj.id)}>
                                        <span className="name">活动主题：</span>
                                        <span className="number">{obj.title} </span>
                                        <span className="time">{obj.time}</span>
                                        <em className="arrows"></em>
                                    </li>
                                    )}
                                </ul>
                                {showList&&showList.length==0&&<div className="hint">
                                    <div className="hint-pic">
                                        <img src={require("../../../static/images/hint-img.png")}/>
                                    </div>
                                    <p className="txt">您还未发起抽奖，赶紧发起一个吧！</p>
                                </div>}
                            </div>
                        </div>}
                    </div>

                </article>

            </div>

        )
    }
}

function selectFunc(state) {
    let userId=null;
    let activeAddList=null;
    let activeJoinList=null;
    let winningList=null;

    if(state&&state.activeList&&state.activeList.activeAddList){
        activeAddList=state.activeList.activeAddList;
    }
    if(state&&state.activeList&&state.activeList.activeJoinList){
        activeJoinList=state.activeList.activeJoinList;
    }
    if(state&&state.activeList&&state.activeList.winningList){
        winningList=state.activeList.winningList;
    }

    return {activeAddList,activeJoinList,winningList}


}
export default connect(selectFunc)(myPublishActive);