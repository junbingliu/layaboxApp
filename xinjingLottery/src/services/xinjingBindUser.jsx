//#import Util.js
//#import login.js
//#import user.js
//#import $xinjingLottery:services/xinJingLotteryService.jsx

(function () {

    var ret = {};
    ret.state = "error";
    var user = LoginService.getFrontendUser();
    if (!user) {
        ret.msg = "请先登录";
        out.print(JSON.stringify(ret));
        return;
    }
    var uId = $.params.uId;
    var grade = $.params.grade;
    var objId = $.params.id;
    if (!uId || uId == "" || !grade || grade == "") {
        ret.msg = "中奖人员id不能为空";
        out.print(JSON.stringify(ret));
        return;
    }
    grade=Number(grade);
    var result = xinJingLotteryService.getLottery(objId);
    if(user.id!=result.creatUserId){
        ret.msg="您不是此活动的发起人";
        out.print(JSON.stringify(ret));
        return;
    }
    if (result) {
        var bindState = false;
        var giftList = result.giftList;
        for (var i = 0; i < result.userList.length; i++) {
            var obj = result.userList[i];
            if (obj.userId == uId && !obj.getGift) {
                bindState = true;
                obj.getGift = true;
                var giftObj = giftList[grade];
                if (!giftObj.personArray) {
                    giftObj.personArray = [];
                }
                if(giftObj.personArray.length==Number(giftObj.count)){
                    ret.msg="超过限制";
                    out.print(JSON.stringify(ret));
                    return;
                }
                var oll={};
                oll.userId=uId;
                oll.name=user.realName;
                giftObj.personArray.push(oll);
                var updateResult = xinJingLotteryService.updateLottery(result);
                if (updateResult) {
                    ret.state = "ok";
                    ret.msg = "绑定成功";
                }
                var needUpdateUser = UserService.getUser(uId);
                if (!needUpdateUser.xjLottery) {
                    needUpdateUser.xjLottery = {};
                }
                if (!needUpdateUser.xjLottery.winningList) {
                    needUpdateUser.xjLottery.winningList = [];
                }
                var giftInfo = {};
                giftInfo.name = giftObj.name;
                giftInfo.imgUrl = giftObj.imgUrl;
                giftInfo.ActiveId = result.id;
                giftInfo.title = result.title;
                needUpdateUser.xjLottery.winningList.push(giftInfo);
                UserService.updateUser(user, uId);
                ret.realName = user.realName;
                out.print(JSON.stringify(ret));
                return;
            }

        }
        if (!bindState) {
            ret.msg = "绑定失败";
            out.print(JSON.stringify(ret));
        }


    }


})();








