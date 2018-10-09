//#import Util.js
//#import login.js
//#import DateUtil.js
//#import $xinjingLottery:services/xinJingLotteryService.jsx

(function () {

    var ret = {};
    ret.state = "error";
    var user = LoginService.getFrontendUser();
    if (!user) {
        ret.msg = "请先登录";
        out.print(JSON.stringify(ret));
        return;
    }

    var activeJoinList =[];
    var activeAddList =[];
    var winningList = [];
    if(user.xjLottery){
        var xjLottery=user.xjLottery;
        if(xjLottery.activeJoinList){
            activeJoinList=xjLottery.activeJoinList;
        }
        if(xjLottery.activeAddList ){
            activeAddList=xjLottery.activeAddList;
        }
        if(xjLottery.winningList){
            winningList=xjLottery.winningList;
        }
    }

    var Nums=xinJingLotteryService.getNumberSlideshow(0,500);
    if(Nums){
        for(var i=0;i<Nums.length;i++){
            if (Nums[i].createTime) {
                Nums[i].time = DateUtil.getShortDate(Nums[i].createTime);
            }
        }
    }
    ret.activeJoinList = activeJoinList;
    ret.activeAddList = activeAddList;
    ret.winningList = winningList;
    ret.Nums = Nums;
    ret.state = "ok";
    out.print(JSON.stringify(ret));

})();

