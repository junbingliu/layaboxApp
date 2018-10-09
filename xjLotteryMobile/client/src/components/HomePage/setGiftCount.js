import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {XINJINGSETGIFTCOUNT,XINJINGGETUSERS} from '../../consts';
import withStyles from '../../decorators/withStyles';
import styles2 from "../../../static/css/style.css";
import createHistory from "../../history.js"
import $ from 'jquery'
@withStyles(styles2)
class setGiftCount extends Component {

    constructor() {
        super();
        this.state = {Fcount: "", Scount:"", Tcount: ""}
    }

    componentWillMount() {
        let self = this;
        $.post(XINJINGGETUSERS, {}, function (ret) {
            if (ret) {
                let Fcount=0;
                let Scount=0;
                let Tcount=0;
                let users=ret.users;
                if(users.Fcount){
                    Fcount=users.Fcount;
                }
                if(users.Scount){
                    Scount=users.Scount;
                }
                if(users.Tcount){
                    Tcount=users.Tcount;
                }
                self.setState({Fcount: Fcount,Scount:Scount,Tcount:Tcount});
            }
        }, 'json');

    }

    back() {
        let history = createHistory();
        history.go(-1);
    }

    setCount(val,ev) {
        let value=ev.target.value;
        if(val=="1"){
            this.setState({Fcount:value});
        }
        else if(val=="2"){
            this.setState({Scount:value});
        }
        else {
            this.setState({Tcount:value});
        }
    }
    toSetCount(){
        let {userId} = this.props;
        if(!userId){
            alert("请先登录");
            return;
        }
        let Fcount=this.state.Fcount;
        let Scount=this.state.Scount;
        let Tcount=this.state.Tcount;
        if(!Fcount||Fcount==""||!Scount||Scount==""||!Tcount||Tcount==""){
            alert("请设置数量");
            return;
        }
        $.post(XINJINGSETGIFTCOUNT,{Fcount:Fcount,Scount:Scount,Tcount:Tcount},function (ret) {
            if(ret){
                alert(ret.msg);
            }
        },'json');
    }




    render() {
        const {userId} = this.props;

        return (

            <div className="container" style={{paddingBottom: '2.5rem'}}>

                <div className="newHead">
                    <nav className="w-nav">
                        <div className="w-nav-back" onClick={this.back.bind(this)}>
                            <a href="javascript:void (0)" className="icon-back"></a>
                        </div>

                        <div className="w-nav-title">
                            抽奖中心
                        </div>
                    </nav>
                </div>


                <article className="rowTop ">
                    <div className="lottery" style={{position: 'fixed', height: '100%'}}>

                        <div className="rotary">
                            <div className="play">
                                <p>设置奖品数量</p>
                            </div>
                        </div>
                        <div className="record">
                            <div className="import"><em>一等奖:</em><input type="text" placeholder="请输入一等奖数量" onChange={this.setCount.bind(this,"1")} value={this.state.Fcount}/></div>
                            <div className="import" style={{borderTop: 'none'}}><em>二等奖:</em><input type="text"
                                                                                                    placeholder="请输入二等奖数量" onChange={this.setCount.bind(this,"2")} value={this.state.Scount}/>
                            </div>
                            <div className="import" style={{borderTop: 'none'}}><em>三等奖:</em><input type="text"
                                                                                                    placeholder="请输入三等奖数量" onChange={this.setCount.bind(this,"3")} value={this.state.Tcount} />
                            </div>
                        </div>

                        <div className="button" onClick={this.toSetCount.bind(this)}>
                            <p>确定设置</p>
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
export default connect(selectFunc)(setGiftCount);