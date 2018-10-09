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
    try {
        var lotteryId = $.params.id;
        var nickName = $.params.nickName;
        var user = LoginService.getFrontendUser();
        if (!user) {
            ret.msg = "请先登录";
            out.print(JSON.stringify(ret));
            return;
        }
        var userId = user.id;

        if (!nickName || nickName == "") {
            nickName = user.nickName;
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

        if (XinJingLotteryUtil.hasJoinLottery(lotteryId, userId)) {
            ret.msg = "您已经报名该抽奖活动，无需重复报名";
            out.print(JSON.stringify(ret));
            return;
        }

        var lockId = "xinjingJoinLottery_" + lotteryId;
        var myPigeon = XinJingLotteryService.getPigeon();
        myPigeon.lock(lockId);
        try {
            var jLotteryRelInfo = XinJingLotteryService.getLotteryRelInfo(lotteryId);
            if (!jLotteryRelInfo) {
                jLotteryRelInfo = {};
                jLotteryRelInfo.lotteryId = lotteryId;
            }
            var joinUserList = jLotteryRelInfo.joinUserList;
            if (!joinUserList) {
                joinUserList = [];
                jLotteryRelInfo.joinUserList = joinUserList;
            }
            var jObj = {userId: userId, nickName: nickName,logo:user.logo};
            joinUserList.push(jObj);
            XinJingLotteryService.saveLotteryRelInfo(jLotteryRelInfo);

            //添加到我参与的抽奖活动列表
            XinJingLotteryService.add2JoinLotteryList(userId, lotteryId);
        } finally {
            myPigeon.unlock(lockId);
        }

        ret.state = "ok";
        ret.msg = "报名成功";
        out.print(JSON.stringify(ret));
    } catch (e) {
        $.log("\n.............................e=" + e);
        ret.msg = "系统异常，请稍后再试";
        out.print(JSON.stringify(ret));
    }
})();
