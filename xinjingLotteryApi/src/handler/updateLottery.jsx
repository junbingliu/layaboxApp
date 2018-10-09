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
        var userId = LoginService.getFrontendUserId();
        if (!userId) {
            ret.msg = "请先登录";
            out.print(JSON.stringify(ret));
            return;
        }

        var desc = $.params.desc || "";
        var title = $.params.title;
        var giftList = $.params.giftList;
        if (!title || title == "") {
            ret.msg = "活动标题不能为空";
            out.print(JSON.stringify(ret));
            return;
        }
        if (!giftList || giftList == "") {
            ret.msg = "活动奖品不能为空";
            out.print(JSON.stringify(ret));
            return;
        }

        var awardList = JSON.parse(giftList);
        XinJingLotteryUtil.generateAwardId(awardList);

        var jLottery = {};
        jLottery.userList = [];
        jLottery.desc = desc;
        jLottery.giftList = awardList;
        jLottery.title = title;
        XinJingLotteryService.updateLottery(jLottery);

        ret.state = "ok";
        ret.msg = "添加成功";
        ret.id = id;
        out.print(JSON.stringify(ret));
    } catch (e) {
        $.log("\n.............................e="+e);
        ret.msg = "系统异常，请稍后再试";
        out.print(JSON.stringify(ret));
    }
})();
