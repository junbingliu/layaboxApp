import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {XINJINGAPPLYUSER, GET_USER} from '../../consts';
import withStyles from '../../decorators/withStyles';
import styles2 from "../../../static/css/style.css";
import {upLoadImg} from '../../actions/getActiveList'
import {UOLOADFILEIMG, ADDLOTTERYACTION} from '../../consts'
import AlertLayer from "../AlertLayer/AlertLayer.js"
import createHistory from "../../history.js"
import {getRelatedUrl} from "../../Core/Utils"
import $ from 'jquery'
@withStyles(styles2)
class publishActive extends Component {

    constructor() {
        super();
        this.state = {
            name: "2018一起抽奖",
            mobile: "",
            giftList: [{name:"奖品",count:1,imgUrl:null}],
            alertInfo: "",
            showAlert: false,
            activeContent: "祝一帆风顺，万事如意，大吉大利",
            activeTitle: "2018一起抽奖"
        }
    }

    componentWillMount() {

    }


    onChangeFront(val, event) {
        event.preventDefault();
        let self=this;
        var giftList = this.state.giftList;
        if (!giftList[val]) {
            return;
        }
        var target = event.target;
        var files = target.files;

        var count = files.length ? files.length : 1;
        var i;

        for (i = 0; i < count; i++) {
            if (files[i].type != "image/png" && files[i].type != "image/gif" && files[i].type != "image/jpg" && files[i].type != "image/jpeg") {
                files[i].message = "图片格式不支持，允许的格式：gif、jpg、png!";
                this.setState({showAlert: true, alertInfo: files[i].message});
                setTimeout(function () {
                    self.setState({showAlert: false});
                },2000)
                return;
            } else if (files[i].size > 8015200) {
                files[i].message = "你所上传的图片太大，最大尺寸为：7M";
                this.setState({showAlert: true, alertInfo: files[i].message});
                setTimeout(function () {
                    self.setState({showAlert: false});
                },2000)
                return;
            }
        }


        if (files[0] && files[0] && !files[0].message) {
            this.props.dispatch(upLoadImg(UOLOADFILEIMG, files[0], function (ret) {
                if (ret.state == 'ok' && ret.fileId) {
                    giftList[val].fileId = ret.fileId
                    giftList[val].imgUrl = ret.ImgUrl
                    self.setState({giftList: giftList});
                }
                else {
                    self.setState({showAlert: true, alertInfo: "上传失败请重试:"+JSON.stringify(ret)});
                    setTimeout(function () {
                        self.setState({showAlert: false});
                    },2000)
                }
            }));
        }


    }

    addGift() {
        var giftList = this.state.giftList;
        var obj = {};
        obj.imgUrl = null;
        obj.name = "";
        obj.count = 1;
        giftList.push(obj);
        this.setState({giftList: giftList});
    }

    changeTitle(val, ev) {
        var giftList = this.state.giftList;
        if (giftList[val]) {
            if(ev.target.value.length>50){
                return;
            }
            giftList[val].name = ev.target.value;
            this.setState({giftList: giftList});
        }
    }

    changeNum(val, ev) {
        var giftList = this.state.giftList;
        if (giftList[val]) {
            giftList[val].count = ev.target.value;
            this.setState({giftList: giftList});
        }
    }

    deleteGift(val) {
        var giftList = this.state.giftList;
        if (giftList[val]) {
            giftList.splice(val, 1);
            this.setState({giftList: giftList});
        }
    }

    initGiftDiv() {
        var giftList = this.state.giftList;
        var returnHtml = [];
        for (var i = 0; i < giftList.length; i++) {
            var htmlContent = (
                <div className="add-cont">
                    <div className="cont">
                        <div className="settings">
                            <span className="name">奖品名称：</span>
                            <input type="text" placeholder="请输入奖品名称" value={giftList[i].name}
                                   onChange={this.changeTitle.bind(this, i)}/>
                        </div>
                        <div className="settings">
                            <span className="name">奖品数量：</span>
                            <input type="text" placeholder="请输入奖品数量" value={giftList[i].count}
                                   onChange={this.changeNum.bind(this, i)}/>
                        </div>
                        <div className="add-prize clearfix">
                            <span className="txt">添加奖品：</span>
                            <ul className="add">
                                <li className="item">
                                    <a href="javascript:void (0)"><input type="file" style={{
                                        position: 'absolute',
                                        width: '50px',
                                        height: '50px',
                                        opacity: '0'
                                    }} onChange={this.onChangeFront.bind(this, i)}/><img
                                        src={ giftList[i].imgUrl ? getRelatedUrl(giftList[i].imgUrl,"300x300") : require("../../../static/images/ico-add.png")}/>
                                    </a>

                                </li>
                            </ul>
                        </div>
                        {/*<div className="del-btn clearfix" onClick={this.deleteGift.bind(this, i)}>
                            <div className="btn-ico fr">
                                <em className="add-del"></em>
                                <span>删除</span>
                            </div>

                        </div>*/}
                    </div>
                </div>);
            returnHtml.push(htmlContent);
        }


        return returnHtml;


    }

    updateActiveContent(ev) {
        let value = ev.target.value;
        this.setState({activeContent: value});
    }

    ActiveTitle(ev) {
        let value = ev.target.value;
        this.setState({activeTitle: value});
    }

    addActive_Click() {
        let self=this;
        let activeContent = this.state.activeContent;
        let activeTitle = this.state.activeTitle;
        let giftList = this.state.giftList;
        if (!activeContent || activeContent == "" || !activeTitle || activeTitle == "") {
            alert("主题或者内容不能为空");
            return;
        }
        if (activeContent.length>100||activeTitle.length>50) {
            alert("主题限制为50个字，内容为100个字");
            return;
        }
        if (!giftList || giftList.length == 0) {
            alert("请添加礼物");
            return;
        }
        $.post(ADDLOTTERYACTION, {
            title: activeTitle,
            desc: activeContent,
            giftList: JSON.stringify(giftList)
        }, function (ret) {
            if (ret) {
                self.setState({showAlert:true,alertInfo: ret.msg});
                setTimeout(function () {
                    self.setState({showAlert: false});
                    if (ret.state == "ok") {
                        window.location.href = "#/MyPubActive/1"
                    }
                }, 1500)

            }

        }, 'json')
    }

    back() {
        let history = createHistory();
        history.go(-1);
    }
    selectBtn(val){
        window.location.href="#/MyPubActive/"+val
    }

    render() {
        const {userId} = this.props;

        return (

            <div className="container">

                <div className="newHead">

                </div>


                <article className="rowTop">
                    <div className="lottery" style={{paddingTop: '0.5rem'}}>
                        <div className="rotary">
                            <ul className="wk-flex">
                                <li className={this.state.showType=="1"?"my-item mi-1 active":"my-item mi-1"} onClick={this.selectBtn.bind(this,"1")}><a href="javascript:void (0)" ><p>我发起的</p></a></li>
                                <li className={this.state.showType=="2"?"my-item mi-1 active":"my-item mi-2"} onClick={this.selectBtn.bind(this,"2")}><a href="javascript:void (0)" ><p>我中奖的</p></a></li>
                                <li className={this.state.showType=="3"?"my-item mi-1 active":"my-item mi-3"} onClick={this.selectBtn.bind(this,"3")}><a href="javascript:void (0)" ><p>我参与的</p></a></li>

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
                                        <input type="text" placeholder="请输入活动主题" onChange={this.ActiveTitle.bind(this)}
                                               value={this.state.activeTitle}/>
                                    </div>
                                    {/*<div className="settings">*/}
                                    {/*<span className="name">活动主题：</span>*/}
                                    {/*<select name="">*/}
                                    {/*<option value="">请输入开奖时间</option>*/}
                                    {/*<option value="">2</option>*/}
                                    {/*<option value="">3</option>*/}
                                    {/*</select>*/}
                                    {/*</div>*/}
                                    <div className="">
                                        {this.initGiftDiv()}
                                        {/*<div className="add-btn" onClick={this.addGift.bind(this)}>
                                            <em className="add-ico"></em>
                                            <span>添加奖项</span>
                                        </div>*/}
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
                                    <textarea placeholder="请输入活动描述,字数不超过500"
                                              onChange={this.updateActiveContent.bind(this)}
                                              value={this.state.activeContent}></textarea>
                                </div>
                            </div>
                            <div className="button" onClick={this.addActive_Click.bind(this)}>
                                <p>发起活动</p>
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
export default connect(selectFunc)(publishActive);