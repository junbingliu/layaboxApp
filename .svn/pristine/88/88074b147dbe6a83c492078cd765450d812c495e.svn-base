import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {XINJINGGETUSERS, XINJINGDELETEUSER,ACTIVEDETAIL} from '../../consts';
import withStyles from '../../decorators/withStyles';
import withStat from '../../decorators/withStat';
import styles2 from "../../../static/css/style.css";
import AlertLayer from '../AlertLayer/AlertLayer'
import Dialog from '../util/Dialog'
import createHistory from "../../history.js"
import $ from 'jquery'
@withStyles(styles2)
class ourselfs extends Component {

    constructor() {
        super();
        this.state = {userList: [], showDilog: false, name: "", mobile: ""}
    }

    componentWillMount() {
        var userList = [];
        var id=this.props.params.id;
        let self = this;
        $.post(ACTIVEDETAIL, {id:id}, function (ret) {
            if (ret) {
                userList = ret.jLottery.userList;
                self.setState({userList: userList});
            }
        }, 'json');


    }
    back(){
        let history = createHistory();
        history.go(-1);
    }

    deleteUser(name, mobile) {
        this.setState({showDilog: true, name: name, mobile: mobile});

    }

    cancelDilog() {
        this.setState({showDilog: false, name: "", mobile: ""});
    }

    okDilog() {
        // let self = this;
        // let name = this.state.name;
        // let mobile = this.state.mobile;
        // if (name == "" || mobile == "") {
        //     alert("未选择一个用户");
        //     return;
        // }
        // $.post(XINJINGDELETEUSER, {name: name, mobile: mobile}, function (ret) {
        //     if (ret) {
        //         self.setState({showDilog: false});
        //         self.componentWillMount();
        //     }
        // }, 'json');
    }
    selectBtn(val){
        window.location.href="#/MyPubActive/"+val
    }

    render() {
        const {} = this.props;
        let userList = this.state.userList;

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
                                <p>参与抽奖名单</p>
                            </div>
                        </div>
                        <div className="awards">
                            <div className="inner">
                                <div className="ico-side side-1"><img src={require('../../../static/images/ico-side-1.png')}/></div>
                                <div className="ico-side side-2"><img src={require('../../../static/images/ico-side-2.png')}/></div>
                                <div className="ico-side side-3"><img src={require('../../../static/images/ico-side-4.png')}/></div>
                                <div className="ico-side side-4"><img src={require('../../../static/images/ico-side-3.png')}/></div>

                                <ul className="list">
                                    {userList.length > 0 && userList.map((obj, index) =>
                                        <li className="item-2">
                                            <span className="name">{obj.nickName}</span>
                                            {/*<span className="number">{obj.mobile}</span>*/}
                                            {/*<em className="ico-del"*/}
                                                {/*onClick={this.deleteUser.bind(this, obj.name, obj.mobile)}></em>*/}
                                        </li>)}
                                </ul>

                            </div>
                        </div>

                    </div>

                </article>
                {/*<AlertLayer message="删除成功"></AlertLayer>*/}
                {/*{this.state.showDilog && <Dialog msg="您确定要删除这个用户吗?" cancelDilog={this.cancelDilog.bind(this)}*/}
                                                 {/*okDilog={this.okDilog.bind(this)}></Dialog>}*/}
            </div>

        )
    }
}

function selectFunc(state) {
    let merchantInfo = {};

    return {merchantInfo}

}
export default connect(selectFunc)(ourselfs);