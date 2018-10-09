import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {XINJINGBINDUSER,ACTIVEDETAIL} from '../../consts';
import withStyles from '../../decorators/withStyles';
import withStat from '../../decorators/withStat';
import styles2 from "../../../static/css/style.css";
import print5 from '../../../static/images/print-5.png';
import print6 from '../../../static/images/print-6.png';
import print7 from '../../../static/images/print-7.png';
import Dialog from '../util/Dialog'
import createHistory from "../../history.js"
import $ from 'jquery'
var g_Timer;
var running=false;
var num=1;
@withStyles(styles2)
class startLotteryPage extends Component {

    constructor() {
        super();
        this.state = {g_Timer:1,runState:false,userList:[],gradeName:"一等奖",name:"",mobile:"",giftGrade:"0",showDilog:false,activeObj:{},giftList:[],winnerName:"",giftName:"",winnerImgUrl:""}
    }

    componentWillMount() {

        var userList = [];
        var giftList = [];
        let self = this;
        let id = this.props.params.id;
        $.post(ACTIVEDETAIL, {id: id}, function (ret) {
            if (ret) {
                if (ret.jLottery) {
                    userList=ret.jLottery.canAwardUserList;
                    giftList=ret.jLottery.giftList;
                    self.setState({activeObj: ret.jLottery,userList:userList,giftList:giftList});
                }
                else {
                    alert(ret.msg);
                }
            }
        }, 'json');

    }

    beginRndNum() {
        let {userId}=this.props;
        let self=this;
        var giftList=this.state.giftList;
        var giftGrade=Number(this.state.giftGrade);
        if(!userId){
            window.location.href="#/applyPage";
            return;
        }
        if(this.state.userList==0){
            alert("暂无人员参与");
            return;
        }
        $.post(XINJINGBINDUSER, {lotteryId:this.props.params.id,awardId:giftList[giftGrade].id,isDoAward:"false"}, function (ret) {
            if (ret) {
                if(ret.state!="ok"){
                    alert(ret.msg);
                }
            }
        }, 'json');


        var giftObj=giftList[giftGrade];
        var giftImgUrl=giftObj&&giftObj.imgUrl;
        var giftName=giftObj&&giftObj.name;
        this.setState({winnerImgUrl:giftImgUrl,giftName:giftName});
        if (running) {
            running=false;
            this.setState({runState:false});
            clearInterval(g_Timer);
            $.post(XINJINGBINDUSER, {lotteryId:this.props.params.id,awardId:giftList[giftGrade].id,isDoAward:"true"}, function (ret) {
                if (ret) {
                   self.setState({winnerName:ret.hitUser&&ret.hitUser.nickName+"抽到"})
                }
            }, 'json');
            self.componentWillMount();
            // $(trigger).val("开始");
            // $('#ResultNum').css('color', 'red');
        }
        else {
            running=true;
            this.setState({runState:true});
            // $('#ResultNum').css('color', 'black');
            // $(trigger).val("停止");
            this.beginTimer();
        }
    }

    updateRndNum() {
        if(this.state.userList.length==0){
            alert("暂无人员抽奖");
            return;
        }
        if(this.state.giftList.length==0){
            alert("暂无奖品");
            return;
        }
        var userList=this.state.userList;
        var giftList=this.state.giftList;
        var giftGrade=this.state.giftGrade;
        var giftObj=giftList[giftGrade];
        var giftName=giftObj&&giftObj.name;
        // var giftImgUrl=giftObj&&giftObj.imgUrl;
        num = Math.floor(Math.random() * 20 + 1);
        var name=userList[num-1]&&userList[num-1].nickName+"抽到";
        var userId=userList[num-1]&&userList[num-1].userId;
        if(!name){
            return;
        }
        this.setState({winnerName:name});
            // $('#ResultNum').html("<em>"+name+"</em>抽到<br/><em>"+giftName+"</em>");
            // $('#gradeImg').html("<img src="+giftImgUrl+"/>");

        $('#ResultNum').val(userId);
    }

    beginTimer() {
        let self=this;

        g_Timer=setInterval(function(){ self.updateRndNum(); }, 1);

    }

    bindUser(){
        if(this.state.runState){
            return;
        }
        let self=this;
        var userId=$('#ResultNum').val();
        if(!userId||userId==""){
            alert("请先开始抽奖");
            return;
        }
        $.post(XINJINGBINDUSER, {uId:userId,grade:this.state.giftGrade,id:this.props.params.id}, function (ret) {
            if (ret) {
                alert(ret.msg);
                self.componentWillMount();
            }
        }, 'json');


    }
    selectIco(val){
        let {userId}=this.props;
        if(!userId){
            window.location.href="#/applyPage";
            return;
        }
        this.setState({giftGrade:val});
    }
    linkToUserList(){
        let {userId}=this.props;
        if(!userId){
            window.location.href="#/applyPage";
            return;
        }
        window.location.href="#/ourselfs/"+this.props.params.id;
    }
    linkToExhibitors(){
        let {userId}=this.props;
        if(!userId){
            window.location.href="#/applyPage";
            return;
        }
        window.location.href="#/exhibitors/"+this.props.params.id;
    }
    linkToGiftCount(){
        let {userId}=this.props;
        if(!userId){
            window.location.href="#/applyPage";
            return;
        }
        window.location.href="#/setGiftCount"
    }

    resetAll(){
        // let self=this;
        // $.post(XINJINGRESETALL,{},function (ret) {
        //     if(ret){
        //         alert(ret.msg);
        //         self.setState({showDilog: false});
        //         self.componentWillMount();
        //     }
        // },'json')
    }

    cancelDilog() {
        this.setState({showDilog: false});
    }
    showDilogCilck(){
        this.setState({showDilog:true});
    }
    back(){
        let history = createHistory();
        history.go(-1);
    }
    selectBtn(val){
        window.location.href="#/MyPubActive/"+val
    }



    render() {
        const {userId} = this.props;
        let giftList=this.state.giftList;
        return (
            <div className="container">
                <div className="newHead">

                </div>


                <article className="rowTop">
                    <div className="lottery">

                        <div className="rotary">
                            <ul className="wk-flex">
                                <li className={this.state.showType=="1"?"my-item mi-1 active":"my-item mi-1"} onClick={this.selectBtn.bind(this,"1")}><a href="javascript:void (0)" ><p>我发起的</p></a></li>
                                <li className={this.state.showType=="2"?"my-item mi-2 active":"my-item mi-2"} onClick={this.selectBtn.bind(this,"2")}><a href="javascript:void (0)" ><p>我中奖的</p></a></li>
                                <li className={this.state.showType=="3"?"my-item mi-3 active":"my-item mi-3"} onClick={this.selectBtn.bind(this,"3")}><a href="javascript:void (0)" ><p>我参与的</p></a></li>
                            </ul>
                            <div className="play">
                                <p>奖励选择</p>
                            </div>
                        </div>
                        <div className="awards">
                            <div className="inner">
                                <div className="ico-side side-1"><img src={require('../../../static/images/ico-side-1.png')}/></div>
                                <div className="ico-side side-2"><img src={require('../../../static/images/ico-side-2.png')}/></div>
                                <div className="ico-side side-3"><img src={require('../../../static/images/ico-side-4.png')}/></div>
                                <div className="ico-side side-4"><img src={require('../../../static/images/ico-side-3.png')}/></div>
                                <h3>请选择你要抽的奖项</h3>

                                <ul className="clearfix">
                                    {giftList.length > 0 &&giftList.map((obj,index)=> <li className="item" onClick={this.selectIco.bind(this,index)}>
                                        <div className={this.state.giftGrade==index?"check checkcur":"check"} ></div>
                                        <div className="prize"><img src={obj.imgUrl}/></div>
                                        <p className="txt"><em>{obj.name}</em></p>
                                    </li>
                                        )}
                                </ul>

                            </div>
                        </div>
                        <div className="rotary">
                            <div className="play">
                                <p>抽奖结果</p>
                            </div>
                        </div>
                        <div className="awards">
                            <div className="inner">
                                <div className="ico-side side-1"><img src={require('../../../static/images/ico-side-1.png')}/></div>
                                <div className="ico-side side-2"><img src={require('../../../static/images/ico-side-2.png')}/></div>
                                <div className="ico-side side-3"><img src={require('../../../static/images/ico-side-4.png')}/></div>
                                <div className="ico-side side-4"><img src={require('../../../static/images/ico-side-3.png')}/></div>
                                <div className="result clearfix">
                                    <div className="left" id="gradeImg">
                                        {this.state.winnerImgUrl!=""&&<img src={this.state.winnerImgUrl} alt=""/>}
                                    </div>
                                    <p className="right" id="ResultNum">
                                        <em>{this.state.winnerName}</em><br/><em>{this.state.giftName}</em>
                                     </p>
                                </div>
                            </div>
                        </div>
                        <div className="button" onClick={this.beginRndNum.bind(this)}>
                            <p>{this.state.runState?"停止":"开始"}</p>
                        </div>
                        {/*<div className="button" onClick={this.bindUser.bind(this)}>*/}
                            {/*<p>绑定奖励</p>*/}
                        {/*</div>*/}
                        <div className="button" onClick={this.linkToUserList.bind(this)}>
                            <p>查看参与人员</p>
                        </div>
                        <div className="button" onClick={this.linkToExhibitors.bind(this)}>
                        <p>查看中奖名单</p>
                        </div>
                    </div>

                </article>
            </div>

        )
    }
}

function selectFunc(state) {
    let userId=null;
    if(state&&state.login&&state.login.userId){
        userId=state.login.userId;
    }
    return {userId}

}
export default connect(selectFunc)(startLotteryPage);