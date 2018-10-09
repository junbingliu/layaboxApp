import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QRCode  from "qrcode.react";
import withStyles from '../../decorators/withStyles';
import styles2 from "../../../static/css/style.css";
import withStat from '../../decorators/withStat';
@withStat('QRcode')
@withStyles(styles2)
class QRcode extends Component{
    componentWillMount(){

    }
    backUrl(){
        window.location.href="#/activeDetail/"+this.props.params.id;
    }
    render(){
        const {} = this.props;
        return(
            <div>
                <div className="lottery" style={{position: 'fixed', height: '100%',color:"#fff", paddingTop:'4rem'}}>
                    <div className="newHead-bar">
                        <header className="new_head">
                            <div className="new_midKey">
                                <h2 className="midKey" style={{textAlign:'center', padding: '0.5rem', fontSize: '0.75rem',color:"#fff"}}>分享二维码</h2>
                            </div>
                            <div className="new_fr"></div>
                        </header>
                    </div>

                    <section className="mem_order row-top" style={{textAlign: 'center'}}>

                        <div className="myQrcode" >
                            <div className="qrcode">
                               <div className="code"><QRCode value={"http://youbei.is1.com.cn/xinjingLotteryApi/pages/checkLogin.jsx?id=" +this.props.params.id} size="150"></QRCode></div>
                                <p style={{marginTop: "0.5rem"}}>扫一扫上方的二维码，参加抽奖 </p>
                            </div>
                        </div>
                        <div className="button" onClick={this.backUrl.bind(this)}>
                            <p>关闭</p>
                        </div>

                    </section>
                </div>
            </div>
        )
    }
}
function Func(state){

}

export default connect(Func,{}) (QRcode);
