//#import Util.js
//#import login.js
//#import user.js
//#import $xinjingLottery:services/xinJingLotteryService.jsx

(function () {

    var ret = {};
    ret.state = "error";
    var name = $.params.name;
    var user = LoginService.getFrontendUser();
    if (!user) {
        ret.msg = "请先登录";
        out.print(JSON.stringify(ret));
        return;
    }
    user.nickName = name;

    UserService.updateUser(user, user.id);
    ret.state = "ok";
    ret.msg = "修改昵称成功!";
    out.print(JSON.stringify(ret));

})();

