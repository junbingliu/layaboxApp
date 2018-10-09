import React, { PropTypes, Component } from 'react';

export default class Dialog extends Component{
    render(){
        return(<div>
            <div className="TB_overlayBG"></div>
            <div className="TB_window" style={{top:'35%'}}>
                <div className="popup">
                    <div className="panel-msg fz36">{this.props.msg}？</div>
                    <div className="panel-btn">
                        <a href="javascript:void (0)" className="panel-cancel" onClick={this.props.cancelDilog}>取消</a>
                        <a href="javascript:void (0)" className="panel-ensure" onClick={this.props.okDilog}>确定</a>
                    </div>
                </div>
            </div>

        </div>)
    }
}