//#import Util.js
//#import login.js
//#import $xinjingLottery:services/xinJingLotteryService.jsx
;
(function () {

    var user = LoginService.getFrontendUser();
    if (!user) {
        var backUrl = "http://youbei.is1.com.cn/xinjingLottery/services/checkLogin.jsx";
        var fUrl = "http://youbei.is1.com.cn/wechatInterface/handler/login.jsx?goUrl=" + backUrl;
        response.sendRedirect(fUrl);
    }
    else {

        if (!user.realName) {
            response.sendRedirect("http://youbei.is1.com.cn/choujiang/index.html");
        }
        else {
            response.sendRedirect("http://youbei.is1.com.cn/choujiang/#/MyPubActive");

        }
    }


})();
