export default function nav(state={isBack:false},action=null){
    switch(action.type){
        case "nav_back":
            return Object.assign({},state,{'isBack':true});
        case "nav_forward":
            return Object.assign({},state,{'isBack':false});
        case "nav_updowm":
            return Object.assign({},state,{'isBack':false,'isUp':action.enable});
        default:
            return state;

    }
}