import $ from 'jquery'
import {GET_USER} from '../consts';

// export function loginAction(url, mobile, password, callback) {
//     return (dispatch, getState)=> {
//         dispatch({type: "login_fetching"});
//         $.post(url, {type: 'json', mobile: mobile, password: password}, function (ret) {
//             dispatch({type: "login_update", loginMessage: ret,userId:ret.userId,userName:ret.userName});
//             if (callback) {
//                 callback(ret);
//             }
//         }, 'json');
//     }
// }

export function getUser() {
    return (dispatch, getState)=> {
        $.post(GET_USER,function (ret) {
            if(ret.state=='ok'){
                dispatch({type: "login_userId",userId:ret.userId,userName:ret.userName});
            }
        }, 'json');
    }
}

