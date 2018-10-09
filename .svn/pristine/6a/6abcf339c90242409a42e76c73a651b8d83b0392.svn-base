//#import Util.js
//#import login.js
//#import $xinjingLottery:services/xinJingLotteryService.jsx
;
(function () {

    var ret = {};
    ret.state = "error";
    var activeId = $.params.id;
    var user = LoginService.getFrontendUser();
    if (!user) {
        ret.msg = "请先登录";
        out.print(JSON.stringify(ret));
        return;
    }


    var activeObj = xinJingLotteryService.getLottery(activeId);
    if (activeObj) {
        xinJingLotteryService.delLottery(activeObj.id);
        ret.state = "ok";
        ret.msg = "删除成功";
    }
    out.print(JSON.stringify(ret));
})();
