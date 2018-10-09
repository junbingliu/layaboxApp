let initialState = {
    fetch:false,
    activeJoinList:[],
    activeAddList:[],
    winningList:[]
}

function activeList(state = initialState, action = null){
    switch(action.type){
        case 'active_List':

            return Object.assign({},state,{activeJoinList:action.activeJoinList,activeAddList:action.activeAddList,winningList:action.winningList});
        case 'active_none':
            return Object.assign({},state,{fetch:false});
        default:
            return state;
    }
}

export default activeList   ;