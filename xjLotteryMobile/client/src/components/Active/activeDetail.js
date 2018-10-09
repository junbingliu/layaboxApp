import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {ACTIVEDETAIL, JOINACTIVE} from '../../consts';
import withStyles from '../../decorators/withStyles';
import styles2 from "../../../static/css/style.css";
import createHistory from "../../history.js"
import AlertLayer from "../AlertLayer/AlertLayer.js"
import {getRelatedUrl} from "../../Core/Utils"
import $ from 'jquery'
@withStyles(styles2)
class activeDetail extends Component {

    constructor() {
        super();
        this.state = {activeObj: {},alertInfo: "", showAlert: false}
    }

    componentWillMount() {
        let self = this;
        let id = this.props.params.id;
        $.post(ACTIVEDETAIL, {id: id}, function (ret) {
            if (ret) {
                if (ret.jLottery) {
                    self.setState({activeObj: ret.jLottery});
                    var jLottery=ret.jLottery;
                    wx.onMenuShareAppMessage({
                        title: jLottery.title, // 分享标题
                        desc: jLottery.desc,
                        link: "http://youbei.is1.com.cn/xinjingLotteryApi/pages/checkLogin.jsx?id="+id,
                        imgUrl: "http://youbei.is1.com.cn/upload/share_l.png",
                        type: "",
                        dataUrl: "",
                        success: function () {
                            console.log("分享成功")
                        },
                        cancel: function () {
                            console.log("分享取消")
                        }
                    });
                }
            }
        }, 'json');


    }

    back() {
        let history = createHistory();
        history.go(-1);
    }

    apply_click() {
        let self=this;
        let id = this.props.params.id;
        if (!id || id == "") {
            self.setState({showAlert:true,alertInfo:"活动id不存在"});
            setTimeout(function () {
                self.setState({showAlert: false});
            },1000)
            return;
        }
        $.post(JOINACTIVE, {id: id}, function (ret) {
            if (ret) {
                self.setState({showAlert:true,alertInfo:ret.msg});
                setTimeout(function () {
                    self.setState({showAlert: false});
                    if(ret.msg=="必须先完善昵称信息后才能报名"){
                        window.location.href="#/";
                    }
                },1000)
            }
        },'json')
    }
    toStart_click(id){
        window.location.href="#/startLotteryPage/"+id;
    }
    selectBtn(val){
        window.location.href="#/MyPubActive/"+val
    }
    shareUrl_click(){
        let id = this.props.params.id;
        window.location.href="#/shareQrcode/"+id;
    }


    render() {
        const {userId} = this.props;
        let activeObj = this.state.activeObj;
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

                        </div>
                        <div className="awards">
                            <div className="inner">
                                <div className="ico-side side-1"><img
                                    src={require("../../../static/images/ico-side-1.png")}/></div>
                                <div className="ico-side side-2"><img
                                    src={require("../../../static/images/ico-side-2.png")}/></div>
                                <div className="ico-side side-3"><img
                                    src={require("../../../static/images/ico-side-4.png")}/></div>
                                <div className="ico-side side-4"><img
                                    src={require("../../../static/images/ico-side-3.png")}/></div>
                                <div className="sponsor">
                                    <div className="settings">
                                        <span className="name">活动主题：</span>
                                        <input type="text" placeholder="" disabled="disabled" value={activeObj.title}/>
                                    </div>
                                    <div className="">
                                        <p className="txt">奖品信息</p>
                                        <div className="add-cont">
                                            {activeObj.giftList && activeObj.giftList.length > 0 && activeObj.giftList.map((obj, index) =>
                                                <div className="cont">
                                                    <div className="settings">
                                                        <span className="name">奖品名称：</span>
                                                        <input type="text" placeholder="" disabled="disabled"
                                                               value={obj.name}/>
                                                    </div>
                                                    <div className="settings">
                                                        <span className="name">奖品数量：</span>
                                                        <input type="text" placeholder="" disabled="disabled"
                                                               value={obj.count}/>
                                                    </div>
                                                    <div className="add-prize clearfix">
                                                        <span className="txt">奖品图片：</span>
                                                        <ul className="add">
                                                            <li className="item">
                                                                <a href=""><img src={getRelatedUrl(obj.imgUrl,"300×300")}/></a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            )}

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="inner">
                                <div className="ico-side side-1"><img
                                    src={require("../../../static/images/ico-side-1.png")}/></div>
                                <div className="ico-side side-2"><img
                                    src={require("../../../static/images/ico-side-2.png")}/></div>
                                <div className="ico-side side-3"><img
                                    src={require("../../../static/images/ico-side-4.png")}/></div>
                                <div className="ico-side side-4"><img
                                    src={require("../../../static/images/ico-side-3.png")}/></div>
                                <div className="describe clearfix">
                                    <span className="fl">活动描述：</span>
                                    <textarea placeholder="" value={activeObj.desc} disabled="disabled"></textarea>
                                </div>
                            </div>
                            <div className="button" onClick={this.apply_click.bind(this)}>
                                <p>我要报名</p>
                            </div>
                            <div className="button" onClick={this.shareUrl_click.bind(this)}>
                                <p>分享活动</p>
                            </div>
                            {userId==activeObj.createUserId&&<div className="button" onClick={this.toStart_click.bind(this,activeObj.id)}>
                                <p>开始抽奖</p>
                            </div>
                            }
                        </div>
                    </div>
                </article>
                {this.state.showAlert && <AlertLayer message={this.state.alertInfo}></AlertLayer>}
            </div>

        )
    }
}

function selectFunc(state) {
    let userId = null;
    if (state && state.login && state.login.userId) {
        userId = state.login.userId;
    }
    return {userId}

}
export default connect(selectFunc)(activeDetail);