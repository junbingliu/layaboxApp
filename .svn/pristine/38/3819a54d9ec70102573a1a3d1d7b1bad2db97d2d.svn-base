//#import Util.js
//#import login.js
//#import $xinjingLottery:services/xinJingLotteryService.jsx
;
(function () {
    var user = LoginService.getFrontendUser();
    var id = $.params.id;
    if (!user) {
        if(id){
          var backUrl = "http://youbei.is1.com.cn/xinjingLotteryApi/pages/checkLogin.jsx?id=" + id;
        }
        else{
          var backUrl = "http://youbei.is1.com.cn/xinjingLotteryApi/pages/checkLogin.jsx";
        }
        var fUrl = "http://youbei.is1.com.cn/wechatInterface/handler/login.jsx?goUrl=" + backUrl;
        response.sendRedirect(fUrl);
    }
    else {
        if(id){
          response.sendRedirect("http://youbei.is1.com.cn/choujiang/index.html#/activeDetail/" + id);
        }
        else{
          response.sendRedirect("http://youbei.is1.com.cn/choujiang/index.html#/MyPubActive/1");
        }
    }
})();
