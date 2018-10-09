import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {UPDATEUSERINFO} from '../../consts';
import withStyles from '../../decorators/withStyles';
import withStat from '../../decorators/withStat';
import styles2 from "../../../static/css/style.css";
import AlertLayer from "../AlertLayer/AlertLayer.js"
import $ from 'jquery'
@withStyles(styles2)
class applyPage extends Component {

    constructor() {
        super();
        this.state = {name:"",mobile:""}
    }

    componentWillMount() {
    }
    getInputName(ev){
        let value=ev.target.value;
        this.setState({name:value});
    }
    toApply(){
        let name = this.state.name;
        let self = this;
        // let moblile = this.state.mobile;
        if(name==""){
            alert("请输入信息");
            return;
        }
        $.post(UPDATEUSERINFO, {name: name}, function (ret) {
            if(ret){
                    self.setState({showAlert:true,alertInfo: ret.msg});
                    setTimeout(function () {
                        self.setState({showAlert: false});
                        if (ret.state == "ok") {
                            window.location.href = "#/MyPubActive"
                        }
                    }, 1500)
            }
        }, 'json');
    }
    toLogin(){
            // weiXinLogin("http://youbei.is1.com.cn/choujiang#/applyPage");
    }
    toGiftListPage(){
        window.location.href="#/MyPubActive/1"
    }

    selectBtn(val){
        window.location.href="#/MyPubActive/"+val
    }
    render() {
        const {userId} = this.props;

        return (

            <div className="container" style={{paddingBottom: '2.5rem'}}>

                <div className="newHead">

                </div>



                <article className="rowTop ">
                    <div className="lottery" style={{position: 'fixed',height: '100%'}}>
                        <div className="rotary">
                            <ul className="wk-flex">
                                <li className={this.state.showType=="1"?"my-item mi-1 active":"my-item mi-1"} onClick={this.selectBtn.bind(this,"1")}><a href="javascript:void (0)" ><p>我发起的</p></a></li>
                                <li className={this.state.showType=="2"?"my-item mi-2 active":"my-item mi-2"} onClick={this.selectBtn.bind(this,"2")}><a href="javascript:void (0)" ><p>我中奖的</p></a></li>
                                <li className={this.state.showType=="3"?"my-item mi-3 active":"my-item mi-3"} onClick={this.selectBtn.bind(this,"3")}><a href="javascript:void (0)" ><p>我参与的</p></a></li>
                            </ul>
                            <div className="play">
                                <p>我要报名</p>
                            </div>
                        </div>
                        <div className="record">
                            <div className="import"><em>姓名:</em><input type="text" placeholder="请输入姓名" onChange={this.getInputName.bind(this)} value={this.state.name} /></div>
                            {/*<div className="import" style={{borderTop: 'none'}}><em>手机:</em><input type="text" placeholder="请输入手机号码" onChange={this.getInputMobile.bind(this)} value={this.state.mobile}/></div>*/}
                        </div>

                        <div className="button" onClick={this.toApply.bind(this)}>
                            <p>完善信息</p>
                        </div>
                       <div className="button" onClick={this.toGiftListPage.bind(this)}>
                            <p>会员中心</p>
                        </div>

                    </div>


                </article>
                {this.state.showAlert && <AlertLayer message={this.state.alertInfo}></AlertLayer>}
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
export default connect(selectFunc)(applyPage);