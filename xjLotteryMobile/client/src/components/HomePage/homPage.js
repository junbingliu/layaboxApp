import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {XINJINGBINDUSER,XINJINGGETUSERS,XINJINGRESETALL} from '../../consts';
import withStyles from '../../decorators/withStyles';
import withStat from '../../decorators/withStat';
import styles2 from "../../../static/css/style.css";
import print5 from '../../../static/images/print-5.png';
import print6 from '../../../static/images/print-6.png';
import print7 from '../../../static/images/print-7.png';
import Dialog from '../util/Dialog'
import $ from 'jquery'
var g_Timer;
var running=false;
var num=1;
@withStyles(styles2)
class homPage extends Component {

    constructor() {
        super();
        this.state = {g_Timer:1,runState:false,userList:[],gradeName:"一等奖",name:"",mobile:"",giftGrade:"1",showDilog:false}
    }

    componentWillMount() {

        var userList = [];
        let self = this;
        $.post(XINJINGGETUSERS, {}, function (ret) {
            if (ret&&ret.users) {
                var oldUserList=ret.users.userList;
                if(oldUserList.length>0){
                    oldUserList.forEach(ol=>{
                        if(!ol.getGift){
                            userList.push(ol);
                        }
                    });
                }
                self.setState({userList: userList});
            }
        }, 'json');
    }

    beginRndNum() {
        let {userId}=this.props;
        if(!userId){
            window.location.href="#/applyPage";
            return;
        }
        if(this.state.userList==0){
            alert("暂无人员参与");
            return;
        }
        if (running) {
            running=false;
            this.setState({runState:false});
            clearInterval(g_Timer);

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
        var userList=this.state.userList;
        num = Math.floor(Math.random() * 20 + 1);
        var name=userList[num-1]&&userList[num-1].name;
        var mobile=userList[num-1]&&userList[num-1].mobile;
        if(!name||!mobile){
            return;
        }
        if(this.state.giftGrade=="1"){
            $('#ResultNum').html("<em>"+name+"</em>抽到<br/><em>iphone手机</em>一台");
            $('#gradeImg').html("<img src="+print5+"/>");
        }
        else if(this.state.giftGrade=="2"){
            $('#ResultNum').html("<em>"+name+"</em>抽到<br/><em>国产手机</em>一台");
            $('#gradeImg').html("<img src="+print6+"/>");
        }
        else {
            $('#ResultNum').html("<em>"+name+"</em>抽到<br/><em>现金500元</em>");
            $('#gradeImg').html("<img src="+print7+"/>");
        }


        $('#ResultNum').val(name+","+mobile);
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
        var ol=$('#ResultNum').val().split(",");
        var name=ol[0];
        var mobile=ol[1];
        if(!name||name==""||!mobile||mobile==""){
            alert("请先开始抽奖");
            return;
        }
        $.post(XINJINGBINDUSER, {name:name,mobile:mobile,grade:this.state.giftGrade}, function (ret) {
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
        window.location.href="#/ourselfs"
    }
    linkToExhibitors(){
        let {userId}=this.props;
        if(!userId){
            window.location.href="#/applyPage";
            return;
        }
        window.location.href="#/exhibitors"
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
        let self=this;
        $.post(XINJINGRESETALL,{},function (ret) {
            if(ret){
                alert(ret.msg);
                self.setState({showDilog: false});
                self.componentWillMount();
            }
        },'json')
    }

    cancelDilog() {
        this.setState({showDilog: false});
    }
    showDilogCilck(){
        this.setState({showDilog:true});
    }




    render() {
        const {userId} = this.props;

        return (
            <div className="container">
                <div className="newHead">
                    <nav className="w-nav">
                        <div className="w-nav-back">
                            <a href="#" className="icon-back"></a>
                        </div>

                        <div className="w-nav-title">
                            抽奖中心
                        </div>
                    </nav>

                </div>


                <article className="rowTop">
                    <div className="lottery">
                        <div className="rotary">
                            <div className="play">
                                <p>奖励选择</p>
                            </div>
                        </div>
                        <div className="awards">
                            <div className="inner">
                                <div className="ico-side"><img src={require('../../../static/images/print-3.png')}/></div>
                                <div className="ico-side" style={{bottom: '0.175rem', top: 'inherit'}}><img src={require('../../../static/images/print-4.png')}/></div>
                                <h3>请选择你要抽的奖项</h3>
                                <ul className="clearfix">
                                    <li className="item">
                                        <div className={this.state.giftGrade=="1"?"check checkcur":"check"} onClick={this.selectIco.bind(this,"1")}></div>
                                        <div className="prize"><img src={require('../../../static/images/print-5.png')}/></div>
                                        <p className="txt"><em>iphone</em>手机</p>
                                    </li>
                                    <li className="item">
                                        <div className={this.state.giftGrade=="2"?"check checkcur":"check"} onClick={this.selectIco.bind(this,"2")}></div>
                                        <div className="prize"><img src={require('../../../static/images/print-6.png')}/></div>
                                        <p className="txt"><em>国产</em>手机</p>
                                    </li>
                                    <li className="item">
                                        <div className={this.state.giftGrade=="3"?"check checkcur":"check"} onClick={this.selectIco.bind(this,"3")}></div>
                                        <div className="prize"><img src={require('../../../static/images/print-7.png')}/></div>
                                        <p className="txt">现金<em>500</em>远</p>
                                    </li>
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

                                <div className="ico-side" style={{bottom: '0.175rem', top: 'inherit'}}><img src={require('../../../static/images/print-4.png')}/></div>
                                <div className="result clearfix">
                                    <div className="left" id="gradeImg">

                                    </div>
                                    <p className="right"  id="ResultNum">

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="button"  onClick={this.beginRndNum.bind(this)}>
                            <p>{this.state.runState?"停止":"开始"}</p>
                        </div>
                        <div className="button" onClick={this.bindUser.bind(this)}>
                            <p>绑定奖励</p>
                        </div>
                        <div className="button" onClick={this.linkToUserList.bind(this)}>
                            <p>查看参与人员</p>
                        </div>
                        {/*<div className="button" onClick={this.linkToExhibitors.bind(this)}>*/}
                            {/*<p>查看中奖名单</p>*/}
                        {/*</div>*/}
                        {/*<div className="button" onClick={this.linkToGiftCount.bind(this)}>*/}
                            {/*<p>设置奖品数量</p>*/}
                        {/*</div>*/}
                        {/*<div className="button" onClick={this.showDilogCilck.bind(this)}>*/}
                            {/*<p>重置活动信息</p>*/}
                        {/*</div>*/}
                    </div>

                </article>
                {this.state.showDilog && <Dialog msg="您确定要重置活动信息吗?" cancelDilog={this.cancelDilog.bind(this)}
                                                 okDilog={this.resetAll.bind(this)}></Dialog>}
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
export default connect(selectFunc)(homPage);