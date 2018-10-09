let initState = {
    userName:null,
    userId:null,
    fetching:false
}
function login(state=initState,action=null){
    switch(action.type){
        case 'login_update':
            return Object.assign({},state,{loginMessage:action.loginMessage,userId:action.userId,userName:action.userName,fetching:false});
        case 'login_fetching':{
            return Object.assign({},state,{fetching:true});
        }
        case 'login_out':{
            return Object.assign({},state,{fetching:false});
        }
        case 'login_userId':{
            return Object.assign({},state,{userId:action.userId,userName:action.userName,fetching:false});
        }
        default:
            return state;
    }
}
export default login;