//#import Util.js
//#import login.js
//#import user.js
//#import DateUtil.js
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
    var userId = user.id;
    var realName = user.realName;

    if (!realName || realName == "") {
        ret.msg = "请下先填写昵称";
        out.print(JSON.stringify(ret));
        return;
    }
    if (!activeId || activeId == "") {
        ret.msg = "活动id不存在";
        out.print(JSON.stringify(ret));
        return;
    }
    var activeObj = xinJingLotteryService.getLottery(activeId);
    for(var n=0;n<activeObj.userList.length;n++){
        if(activeObj.userList[n].userId==userId){
            ret.msg="请不要重复报名";
            out.print(JSON.stringify(ret));
            return;
        }
    }
    if (activeObj) {
        var saveObj = {};
        saveObj.name = realName;
        saveObj.userId = userId;
        activeObj.userList.push(saveObj);
    }

    var updateMsg = xinJingLotteryService.updateLottery(activeObj, userId);
    var activeList = [];
    var activeObjs = {};
    activeObjs.id = activeObj.id;
    activeObjs.desc = activeObj.desc;
    activeObjs.title = activeObj.title;
    if (activeObj.createTime) {
        activeObjs.time = DateUtil.getShortDate(activeObj.createTime);
    }
    if (!user.xjLottery) {
        user.xjLottery = {};
    }
    if (!user.xjLottery.activeJoinList) {
        activeList.push(activeObjs);
        user.xjLottery.activeJoinList = activeList;
    }
    else {
        user.xjLottery.activeJoinList.push(activeObjs);
    }

    UserService.updateUser(user, userId);
    ret.state = "ok";
    ret.msg = "报名成功";
    ret.updateMsg = updateMsg;
    out.print(JSON.stringify(ret));
})();
