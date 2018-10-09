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

        var currentPage = $.params["page"];
        if (!currentPage) {
            currentPage = 1;
        }
        var pageLimit = 50;
        var start = (currentPage - 1) * pageLimit;


        var totalRecords = XinJingLotteryService.getLotteryListSize("all");
        var allLotteryList = XinJingLotteryService.getLotteryList("all", start, pageLimit);
        setFormatValue(allLotteryList);

        ret.lotteryList = allLotteryList;
        ret.state = "ok";
        out.print(JSON.stringify(ret));
    } catch (e) {
        $.log("\n.............................e="+e);
        ret.msg = "系统异常，请稍后再试";
        out.print(JSON.stringify(ret));
    }

})();

function setFormatValue(lotteryList){
    if(lotteryList){
        for (var i = 0; i < lotteryList.length; i++) {
            var jLottery = lotteryList[i];
            jLottery.time = DateUtil.getShortDate(jLottery.createTime);
        }
    }
}

