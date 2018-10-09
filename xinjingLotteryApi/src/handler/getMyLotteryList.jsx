//#import Util.js
//#import login.js
//#import DateUtil.js
//#import $xinjingLotteryServer:services/XinJingLotteryService.jsx

(function () {

    var ret = {};
    ret.state = "error";
    try {
        var userId = LoginService.getFrontendUserId();
        if (!userId) {
            ret.msg = "请先登录";
            out.print(JSON.stringify(ret));
            return;
        }


        //我发起的抽奖
        var myLotteryList = XinJingLotteryService.getLotteryList(userId, 0, 100);
        setFormatValue(myLotteryList);

        //我参与的抽奖
        var joinLotteryList = XinJingLotteryService.getJoinLotteryList(userId, 0, 100);
        setFormatValue(joinLotteryList);

        //我有中奖的抽奖
        var winLotteryList = XinJingLotteryService.getWinLotteryList(userId, 0, 100);
        setFormatValue(winLotteryList);

        ret.activeJoinList = joinLotteryList;
        ret.activeAddList = myLotteryList;
        ret.winningList = winLotteryList;
        ret.state = "ok";
        out.print(JSON.stringify(ret));
    } catch (e) {
        $.log("\n.............................e=" + e);
        ret.msg = "系统异常，请稍后再试";
        out.print(JSON.stringify(ret));
    }

})();

function setFormatValue(lotteryList) {
    if (lotteryList) {
        for (var i = 0; i < lotteryList.length; i++) {
            var jLottery = lotteryList[i];
            jLottery.time = DateUtil.getShortDate(jLottery.createTime);
        }
    }
}

