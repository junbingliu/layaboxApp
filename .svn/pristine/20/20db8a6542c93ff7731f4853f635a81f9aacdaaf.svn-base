//#import Util.js
//#import login.js
//#import user.js
//#import DateUtil.js
//#import $xinjingLotteryServer:services/XinJingLotteryService.jsx
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

        var lotteryId = $.params.id;
        if (!lotteryId || lotteryId == "") {
            ret.msg = "参数错误";
            out.print(JSON.stringify(ret));
            return;
        }

        //todo:


        ret.state = "ok";
        ret.msg = "删除功能待实现";
        ret.id = id;
        out.print(JSON.stringify(ret));
    } catch (e) {
        $.log("\n.............................e="+e);
        ret.msg = "系统异常，请稍后再试";
        out.print(JSON.stringify(ret));
    }
})();
