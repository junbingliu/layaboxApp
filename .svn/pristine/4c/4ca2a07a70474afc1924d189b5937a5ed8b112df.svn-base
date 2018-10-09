//#import Util.js
//#import login.js
//#import user.js
//#import DateUtil.js
//#import $xinjingLottery:services/xinJingLotteryService.jsx
;
(function () {

    var ret = {};
    ret.state = "error";
    var desc = $.params.desc;
    var title = $.params.title;
    var giftList = JSON.parse($.params.giftList);

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
    if (!title || title == "") {
        ret.msg = "请下先主题";
        out.print(JSON.stringify(ret));
        return;
    }
    var saveObj = {};
    // var theUser = {};
    // theUser.name = realName;
    // theUser.userId = userId;
    saveObj.userList = [];
    // saveObj.userList.push(theUser);
    saveObj.desc = desc;
    saveObj.giftList = giftList;
    saveObj.initiator = user.realName;
    saveObj.title = title;
    var id = xinJingLotteryService.addLottery(saveObj, userId);
    var newObj = xinJingLotteryService.getLottery(id);
    var activeList = [];
    var activeObjs = {};
    activeObjs.id = newObj.id;
    activeObjs.title = newObj.title;
    activeObjs.desc = newObj.desc;
    if (newObj.createTime) {
        activeObjs.time = DateUtil.getShortDate(newObj.createTime);
    }
    if (!user.xjLottery) {
        user.xjLottery = {};
    }
    if (!user.xjLottery.activeAddList) {
        activeList.push(activeObjs);
        user.xjLottery.activeAddList = activeList;
    }
    else {
        user.xjLottery.activeAddList.push(activeObjs);
    }
    UserService.updateUser(user, userId);
    ret.state = "ok";
    ret.msg = "添加成功";
    ret.id = id;
    out.print(JSON.stringify(ret));
})();
