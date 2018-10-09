import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {ACTIVEDETAIL, JOINACTIVE} from '../../consts';
import withStyles from '../../decorators/withStyles';
import styles2 from "../../../static/css/style.css";
import createHistory from "../../history.js"
import AlertLayer from "../AlertLayer/AlertLayer.js"
import {getRelatedUrl} from "../../Core/Utils"
import {openImages} from "../util/Util"
import $ from 'jquery'
@withStyles(styles2)
class lotteryDetail extends Component {

    constructor() {
        super();
        this.setIntervalId =0;
        this.state = {activeObj: {}, alertInfo: "", showAlert: false,isLotterying:false}
    }

    componentWillMount() {
        clearInterval(this.setIntervalId);
        let self = this;
        let id = this.props.params.id;
        $.post(ACTIVEDETAIL, {id: id}, function (ret) {
            if (ret) {
                if (ret.jLottery) {
                    self.setState({activeObj: ret.jLottery});
                    var jLottery = ret.jLottery;
                    wx.onMenuShareAppMessage({
                        title: "邀请您参与抽奖活动,主题是"+jLottery.title, // 分享标题
                        desc: "描述:"+jLottery.desc,
                        link: "http://youbei.is1.com.cn/xinjingLotteryApi/pages/checkLogin.jsx?id=" + id,
                        imgUrl: jLottery.createUserLogo ,
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
    componentWillUnmount(){
        clearInterval(this.setIntervalId);
    }

    back() {
        let history = createHistory();
        history.go(-1);
    }

    apply_click() {
        let self = this;
        let id = this.props.params.id;
        if (!id || id == "") {
            self.setState({showAlert: true, alertInfo: "活动id不存在"});
            setTimeout(function () {
                self.setState({showAlert: false});
            }, 1000)
            return;
        }
        $.post(JOINACTIVE, {id: id}, function (ret) {
            if (ret) {
                self.setState({showAlert: true, alertInfo: ret.msg});
                setTimeout(function () {
                    self.setState({showAlert: false});
                    if (ret.msg == "必须先完善昵称信息后才能报名") {
                        window.location.href = "#/";
                    }
                    if(ret.state=="ok"){

                        $.post(ACTIVEDETAIL, {id: id}, function (ret) {
                            if (ret) {
                                if (ret.jLottery) {
                                    self.setState({activeObj: ret.jLottery});
                                }
                            }
                        }, 'json');

                    }
                }, 1000)
            }
        }, 'json')

    }

    toStart_click(id) {
        window.location.href = "#/startLotteryPage/" + id;
    }

    selectBtn(val) {
        window.location.href = "#/MyPubActive/" + val
    }

    shareUrl_click() {
        let id = this.props.params.id;
        window.location.href = "#/shareQrcode/" + id;
    }
    getGameIsStart(){
        let self = this;
        clearInterval(this.setIntervalId);

        this.setIntervalId = setInterval(()=>{

            let id = this.props.params.id;
            $.post(ACTIVEDETAIL, {id: id}, function (ret) {
                if (ret) {
                    let jLottery=ret.jLottery;
                    if(jLottery&&jLottery.isLotterying){
                        self.setState({isLotterying:true});
                    }
                    else {
                        self.setState({isLotterying:false});
                    }

                }
            }, 'json');

        },2000)
    }


    render() {
        const {userId} = this.props;
        let activeObj = this.state.activeObj;
        return (

            <div className="container">

                <div className="newHead">
                    {/*<nav className="w-nav">*/}
                        {/*<div className="w-nav-back">*/}

                        {/*</div>*/}

                        {/*<div className="w-nav-title">*/}
                            {/*活动详情*/}
                        {/*</div>*/}
                    {/*</nav>*/}
                </div>


                <article className="rowTop">
                    <div className="lottery" style={{paddingTop: '0.5rem'}}>


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
                                    <div className="settings clearfix">
                                        <div className="xq-name">
                                            <div className="pic"><img src={activeObj && activeObj.createUserLogo}/>
                                            </div>
                                            <p className="name">{activeObj && activeObj.createUserNickName}</p>
                                        </div>
                                        <div className="details">{activeObj && activeObj.title}</div>
                                        <div className="details" style={{fontWeight:'400'}}>{activeObj && activeObj.desc}</div>
                                    </div>

                                    <div className="">

                                        <ul className="clearfix" style={{borderBottom:'1px solid #e8e8e8',margin:'0.25rem 0',}}>
                                            {activeObj && activeObj.giftList && activeObj.giftList.length > 0 && activeObj.giftList.map((op, lo) =>
                                                <li className="item" onClick={openImages.bind(null,[op.imgUrl])}>
                                                    <p className="tit">奖品</p>
                                                    <div className="prize" style={{backgroundImage:"url(" + (op.imgUrl?getRelatedUrl(op.imgUrl,"300x300"):require("../../../static/images/print-12.png")) + ")",backgroundSize:"cover"}}></div>
                                                    <p className="txt"><em>{op.name}</em></p>
                                                </li>
                                            )}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="inner" style={{marginTop:'1rem'}}>
                                <div className="ico-side side-1"><img
                                    src={require("../../../static/images/ico-side-1.png")}/></div>
                                <div className="ico-side side-2"><img
                                    src={require("../../../static/images/ico-side-2.png")}/></div>
                                <div className="ico-side side-3"><img
                                    src={require("../../../static/images/ico-side-4.png")}/></div>
                                <div className="ico-side side-4"><img
                                    src={require("../../../static/images/ico-side-3.png")}/></div>


                                {!this.state.isLotterying&& <div className="details-join">
                                    <p className="tit">参与人员</p>
                                    <ul>
                                        {activeObj && activeObj.userList && activeObj.userList.length > 0 && activeObj.userList.map((io, ik) =>
                                            < li className="item">
                                                <div className="pic"><img src={io.logo}/></div>
                                                <p className="name">{io.nickName}</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>}
                                {this.state.isLotterying&&<div  className="details-join">
                                    <iframe src="http://youbei.is1.com.cn/lotteryOpenLaya/index.html" style={{borderWidth:"0px",width:"100%"}}></iframe>
                                </div>}
                                {this.getGameIsStart()}
                            </div>

                            <div className="base-link">
                                <div className="button" onClick={this.apply_click.bind(this)}>
                                    <p>我要报名</p>
                                </div>
                                <div className="skip clearfix">
                                    {userId == activeObj.createUserId && <div className="begin fl" onClick={this.toStart_click.bind(this, activeObj.id)}>
                                        前往抽奖 >
                                    </div>
                                    }
                                    <div className="share fr" onClick={this.shareUrl_click.bind(this)}>
                                        分享给好友 >
                                    </div>
                                </div>
                            </div>
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
export default connect(selectFunc)(lotteryDetail);