//#import Util.js
//#import login.js
//#import DateUtil.js
//#import user.js
//#import $xinjingLotteryServer:services/XinJingLotteryService.jsx
//#import $xinjingLotteryServer:services/XinJingLotteryUtil.jsx

(function () {

    var ret = {};
    ret.state = "error";

    var lotteryId = $.params.id;
    if (!lotteryId || lotteryId == "") {
        ret.msg = "参数错误";
        out.print(JSON.stringify(ret));
        return;
    }

    if(lotteryId.indexOf("?")==0){
        lotteryId = lotteryId.substring(1);
    }

    if (!lotteryId || lotteryId == "") {
        ret.msg = "参数错误";
        out.print(JSON.stringify(ret));
        return;
    }
    var jLottery = XinJingLotteryService.getLottery(lotteryId);
    if (!jLottery) {
        ret.msg = "抽奖活动不存在";
        out.print(JSON.stringify(ret));
        return;
    }
    jLottery.time = DateUtil.getShortDate(jLottery.createTime);

    var jLotteryRelInfo = XinJingLotteryService.getLotteryRelInfo(lotteryId);
    if(jLotteryRelInfo && jLotteryRelInfo.joinUserList){
      jLottery.userList = jLotteryRelInfo.joinUserList
    }
    else{
      jLottery.userList = [];
    }

    jLottery.canAwardUserList = XinJingLotteryUtil.getCanAwardUserList(jLotteryRelInfo);
    jLottery.hitAwardList = XinJingLotteryUtil.getHitAwardList(jLottery, jLotteryRelInfo);
    if(jLottery.hitUser){
        jLottery.isLotterying = true;
    }
    ret.jLottery = jLottery;
    ret.curTime = new Date().getTime();
    ret.state = "ok";
    out.print(JSON.stringify(ret));


})();
