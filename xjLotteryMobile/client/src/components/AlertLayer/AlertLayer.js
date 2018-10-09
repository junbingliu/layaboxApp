import React, { PropTypes, Component } from 'react';

export const IconCry = 'ic_cry';//哭泣
export const IconSmile = 'ic_smile';//微笑
export const IconSigh = 'ic_sigh';//警告
export const IconSou = 'ic_gou';//打勾
class AlertLayer extends Component {
    render() {
        return (
            <div className="alertLayer" id="alertLayer" style={{top:'40%'}}>
                <div className="alertBox">
                    <span className="ic_sigh-2"></span>
                    <span className="alert_msg" id="alert_msg">{this.props.message}</span>
                </div>
            </div>
        )
    }
}
export default AlertLayer;