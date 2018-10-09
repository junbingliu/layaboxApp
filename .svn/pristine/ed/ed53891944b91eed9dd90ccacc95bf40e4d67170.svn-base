import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {XINJINGGETUSERS,XINJINGGIVEUPGIFT,ACTIVEDETAIL} from '../../consts';
import withStyles from '../../decorators/withStyles';
import withStat from '../../decorators/withStat';
import styles2 from "../../../static/css/style.css";
import createHistory from "../../history.js"
import Dialog from '../util/Dialog'
import $ from 'jquery'
@withStyles(styles2)
class exhibitors extends Component {

    constructor() {
        super();
        this.state = {userList:[],firstPrize:[],secondPrize:[],thirdPrize:[],showDilog: false, name: "", mobile: "",gradeVal:"",giftList:[]}
    }

    componentWillMount() {

        let self=this;
        let id=this.props.params.id;
        $.post(ACTIVEDETAIL,{id:id},function (ret) {
            if(ret){

                self.setState({giftList:ret.jLottery.hitAwardList});
            }
        },'json');


    }
    back(){
        let history = createHistory();
        history.go(-1);
    }
    cancelDilog() {
        this.setState({showDilog: false, name: "", mobile: ""});
    }

    okDilog() {
        let self = this;
        let name = this.state.name;
        let mobile = this.state.mobile;
        let gradeVal = this.state.gradeVal;
        if (name == "" || mobile == "") {
            alert("未选择一个用户");
            return;
        }
        $.post(XINJINGGIVEUPGIFT, {name: name, mobile: mobile,grade:gradeVal}, function (ret) {
            if (ret) {
                self.setState({showDilog: false});
                self.componentWillMount();
            }
        }, 'json');
    }

    deleteUser(name, mobile,gradeVal) {
        this.setState({showDilog: true, name: name, mobile: mobile,gradeVal:gradeVal});

    }
    selectBtn(val){
        window.location.href="#/MyPubActive/"+val
    }


    render() {
        const {} = this.props;
        let giftList=this.state.giftList;

        return (

            <div className="container" style={{paddingBottom: '2.5rem'}}>

                <div className="newHead">

                </div>



                <article className="rowTop ">
                    <div className="lottery" style={{position: 'fixed', height: '100%'}}>
                        <div className="rotary">
                            <ul className="wk-flex">
                                <li className={this.state.showType=="1"?"my-item mi-1 active":"my-item mi-1"} onClick={this.selectBtn.bind(this,"1")}><a href="javascript:void (0)" ><p>我发起的</p></a></li>
                                <li className={this.state.showType=="2"?"my-item mi-1 active":"my-item mi-2"} onClick={this.selectBtn.bind(this,"2")}><a href="javascript:void (0)" ><p>我中奖的</p></a></li>
                                <li className={this.state.showType=="3"?"my-item mi-1 active":"my-item mi-3"} onClick={this.selectBtn.bind(this,"3")}><a href="javascript:void (0)" ><p>我参与的</p></a></li>

                            </ul>
                            <div className="play">
                                <p>中奖人员信息</p>
                            </div>
                        </div>
                        {giftList.length>0&&giftList.map((obj,index)=>
                            <div className="prize">
                                <div className="awards">
                            <div className="inner">
                                <div className="ico-side side-1"><img src={require('../../../static/images/ico-side-1.png')}/></div>
                                <div className="ico-side side-2"><img src={require('../../../static/images/ico-side-2.png')}/></div>
                                <div className="ico-side side-3"><img src={require('../../../static/images/ico-side-4.png')}/></div>
                                <div className="ico-side side-4"><img src={require('../../../static/images/ico-side-3.png')}/></div>
                                <h3>恭喜以下人员得奖！</h3>
                                <ul className="list">
                                    <li className="item-2 clearfix">
                                        <span className="win">{obj.awardName}:</span>
                                        <div className="fl">

                                            {obj.personList&&obj.personList.length>0&&obj.personList.map((ou,yo)=> <div className="user">

                                                    <span className="name">{ou.nickName}</span>
                                                {/*<em className="ico-x" onClick={this.deleteUser.bind(this, obj.name, obj.mobile,"1")}></em>*/}
                                            </div>
                                            ) }

                                        </div>

                                    </li>


                                </ul>

                            </div>
                        </div>
                            </div>
                        )}
                        <div className="button" onClick={this.componentWillMount.bind(this)}>
                            <p>刷新中奖名单</p>
                        </div>
                    </div>

                </article>
                {this.state.showDilog && <Dialog msg="您确定要放弃大奖吗?" cancelDilog={this.cancelDilog.bind(this)}
                                                 okDilog={this.okDilog.bind(this)}></Dialog>}
            </div>

        )
    }
}

function selectFunc(state) {
    let merchantInfo = {};

    return {merchantInfo}

}
export default connect(selectFunc)(exhibitors);