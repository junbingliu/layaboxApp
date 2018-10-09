//#import Util.js
//#import login.js
//#import DateUtil.js
//#import $xinjingLottery:services/xinJingLotteryService.jsx

(function () {

    var ret = {};
    ret.state = "error";
    var user = LoginService.getFrontendUser();
    var id=$.params.id;
    if (!user) {
        ret.msg = "请先登录";
        out.print(JSON.stringify(ret));
        return;
    }
    if (!id||id=="") {
        ret.msg = "empty_id";
        out.print(JSON.stringify(ret));
        return;
    }


    var obj=xinJingLotteryService.getLottery(id);
            if (obj.createTime) {
                obj.time = DateUtil.getShortDate(obj.createTime);
            }

    ret.activeObj = obj;
    ret.state = "ok";
    out.print(JSON.stringify(ret));

})();

