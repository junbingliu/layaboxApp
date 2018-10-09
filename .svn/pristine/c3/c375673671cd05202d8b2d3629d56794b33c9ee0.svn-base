let initialState = {
  show:false,
  message:''
}

function AlertLayer(state = initialState, action = null){
    switch(action.type){
        case 'alert_show':

            return Object.assign({},state,{show:true,message:action.message,icon:action.icon});
        case 'alert_hide':
            return Object.assign({},state,{show:false}); 
        default:
            return state;   
    }
}

export default AlertLayer   ;