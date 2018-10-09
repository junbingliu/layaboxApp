//#import Util.js
//#import login.js
//#import user.js
//#import DateUtil.js
//#import $xinjingLotteryServer:services/XinJingLotteryService.jsx
//#import $xinjingLotteryServer:services/XinJingLotteryUtil.jsx
;
(function () {

    var ret = {};
    ret.state = "error";
    var userId = LoginService.getFrontendUserId();
    if (!userId) {
        ret.msg = "请先登录";
        out.print(JSON.stringify(ret));
        return;
    }

    var isDoAward = $.params.isDoAward || "false";
    var lotteryId = $.params.lotteryId;
    var awardId = $.params.awardId;
    if (!lotteryId || lotteryId == "" || !awardId || awardId == "") {
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
    var createUserId = jLottery.createUserId;
    if (userId != createUserId) {
        ret.msg = "您不是活动的发起人，无法进行抽奖";
        out.print(JSON.stringify(ret));
        return;
    }

    var jAward = XinJingLotteryUtil.getAwardByAwardId(jLottery, awardId);
    if (!jAward) {
        ret.msg = "ID为【" + awardId + "】的奖品不存在";
        out.print(JSON.stringify(ret));
        return;
    }

    var joinUserList = [];
    var jLotteryRelInfo = XinJingLotteryService.getLotteryRelInfo(lotteryId);
    if (jLotteryRelInfo) {
        joinUserList = jLotteryRelInfo.joinUserList || [];
    }
    if (joinUserList.length == 0) {
        ret.msg = "抽奖人为空";
        out.print(JSON.stringify(ret));
        return;
    }

    // var jLotteryRelInfo = XinJingLotteryService.getLotteryRelInfo(lotteryId);
    var canAwardUserList = XinJingLotteryUtil.getCanAwardUserList(jLotteryRelInfo);
    if (canAwardUserList.length == 0) {
        ret.msg = "无满足条件的抽奖人";
        out.print(JSON.stringify(ret));
        return;
    }

    // var isCanDoAward = XinJingLotteryUtil.checkCanDoAwardByAwardId(jLottery, jLotteryRelInfo, awardId);
    // if (!isCanDoAward) {
    //     ret.msg = "当前奖品已经被抽完，不能再抽";
    //     out.print(JSON.stringify(ret));
    //     return;
    // }

    var isNeedDoAward = false;
    if (isDoAward && isDoAward == "true") {
        isNeedDoAward = true;
    }

    if (isNeedDoAward) {
        //开始抽奖
        var hitAwardIndex = Math.floor(Math.random() * canAwardUserList.length);
        var hitUser = canAwardUserList[hitAwardIndex];//中奖人
        var hitAwardName = jAward.name;//奖品名称

        var lockId = "xinjingJoinLottery_" + lotteryId;
        var myPigeon = XinJingLotteryService.getPigeon();
        myPigeon.lock(lockId);
        try {
            var jLotteryRelInfo = XinJingLotteryService.getLotteryRelInfo(lotteryId);
            if (!jLotteryRelInfo) {
                jLotteryRelInfo = {};
                jLotteryRelInfo.lotteryId = lotteryId;
            }
            var winInfo = jLotteryRelInfo.winInfo;
            if (!winInfo) {
                winInfo = {};
                jLotteryRelInfo.winInfo = winInfo;
            }
            var winUserList = winInfo[awardId];
            if (!winUserList) {
                winUserList = [];
                winInfo[awardId] = winUserList;
            }

            var curTime = new Date().getTime();
            var jWin = {};
            jWin.awardId = awardId;
            jWin.awardName = hitAwardName;
            jWin.userId = hitUser.userId;
            jWin.userNickName = hitUser.nickName;
            jWin.createTime = new Date().getTime();
            jWin.formatCreateTime = DateUtil.getLongDate(curTime);
            winUserList.push(jWin);
            XinJingLotteryService.saveLotteryRelInfo(jLotteryRelInfo);

            //添加到我中奖的抽奖活动列表
            XinJingLotteryService.add2WinLotteryList(hitUser.userId, lotteryId);

            jLottery.isLotterying=false;
            jLottery.curAwardId=awardId;
            jLottery.hitUser = hitUser;
            XinJingLotteryService.updateLottery(jLottery);

        } finally {
            myPigeon.unlock(lockId);
        }

        ret.state = "ok";
        ret.hitUser = hitUser;
        ret.hitAwardName = hitAwardName;

        ret.msg = "抽奖成功";
    } else {
        jLottery.isLotterying=true;
        jLottery.curAwardId=awardId;
        XinJingLotteryService.updateLottery(jLottery);
        ret.curAwardId=awardId;
        ret.state = "ok";
        ret.msg = "可以开始抽奖";
    }
    out.print(JSON.stringify(ret));

})();
