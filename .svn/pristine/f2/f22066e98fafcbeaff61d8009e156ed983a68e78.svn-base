import  httpClient from './HttpClient'
import {WeiXin_URL,WeiXinTicket_URL,MOBILE_URL_PREFIX} from "../consts";
import $ from "jquery";
import weChatSign from 'wechat-sign';
import wx from "weixin-js-sdk";
import logo from "../../static/images/payScuess.png"
//
//export function createNonceStr() {
//    return Math.random().toString(36).substr(2, 15);
//}
//
//export function createTimestamp() {
//    return parseInt(new Date().getTime() / 1000) + '';
//}


var jsApiList = ['checkJsApi',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',
    'translateVoice',
    'startRecord',
    'stopRecord',
    'onRecordEnd',
    'playVoice',
    'pauseVoice',
    'stopVoice',
    'uploadVoice',
    'downloadVoice',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'hideOptionMenu',
    'showOptionMenu',
    'closeWindow',
    'scanQRCode',
    'chooseWXPay',
    'openProductSpecificView',
    'addCard',
    'chooseCard',
    'openCard',
    'getLocalImgData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//
//export function createNonceStr() {
//    return Math.random().toString(36).substr(2, 15);
//}
//
//export function createTimestamp() {
//    return parseInt(new Date().getTime() / 1000) + '';
//}
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

export function isWeiXin(){

    if (browser.versions.mobile) {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }else
    {
        return false;
    }
}

export function browserType()
{

    if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            //在微信中打开
            return "weixin";
        }
        if (ua.match(/WeiBo/i) == "weibo") {
            //在新浪微博客户端打开
            return "weibo";
        }
        if (ua.match(/QQ/i) == "qq") {
            //在QQ空间打开
            return "qzone";
        }
        if (browser.versions.ios) {
            //是否在IOS浏览器打开
            return ios;
        }
        if(browser.versions.android){
            //是否在安卓浏览器打开
            return "android";
        }
    } else {
        //否则就是PC浏览器打开
        return "pc";
    }
}

//登录跳转页面
export function weiXinLogin(gotoUrl){
    window.location.href = WeiXin_URL+gotoUrl;
}
//获取微信ticket
export function weiXinTicket(callBack) {

    let oldTime = window.localStorage["weiXinSignTime"];
    let timestamp = new Date().getTime();
    //console.log("oldTime==",isNaN(oldTime));
    var bln = false;
    if (isNaN(oldTime)) {
        window.localStorage["weiXinSignTime"] = timestamp;
        bln = true;
    } else if ((timestamp - oldTime) / 1000 > 7000) {
        window.localStorage["weiXinSignTime"] = timestamp;
        bln = true;
    }

    var objData = window.localStorage["weiXinSign"];
    if (objData) {
        objData = JSON.parse(objData);
    }
    if (bln || (!objData)) {
        $.post(WeiXinTicket_URL, {}, function (data) {
            if (data.state == "ok") {
                objData = data;
                window.localStorage["weiXinSign"] = JSON.stringify(data);
                if (callBack) {
                    callBack(objData);
                }
            }
        }, 'json');
    } else {
        console.log("==不需要再请求=ticket===");
        if (callBack) {
            callBack(objData);
        }
    }
}
export  function wxScanQRCode()
{
    weiXinConfig(()=> {
        wx.scanQRCode({
            needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                if(Number(result)==1)
                {
                    let tmp ="";
                    for(var str in res)
                    {
                        tmp+=str+"=:"+res[str];
                    }
                    alert(tmp);
                }
            }
        });
    });
}
//微信注册

export function weiXinConfig(callBack)
{
    weiXinTicket((data)=>{
        //console.log("=微信注册=11====",data);
        if(data&&data.state=="ok")
        {
            var url = document.location.href.split('#')[0];
            let objSign = weChatSign(data.ticket,encodeURI(url));
            //if(window.blnResellerTest)
            //{
            //    alert("signature=="+objSign.signature);
            //}
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp:objSign.timestamp, // 必填，生成签名的时间戳
                nonceStr: objSign.nonceStr, // 必填，生成签名的随机串
                signature: objSign.signature,// 必填，签名，见附录1
                jsApiList: jsApiList
            });
        }
        wx.ready(function(){
            //console.log("==微信注册=wx.ready=====");
            wx.checkJsApi({
                jsApiList:jsApiList,
                success: function (res) {
                    console.log("==wx.checkJsApi=="+res.errMsg);
                    //alert(JSON.stringify(res));
                }
            });
            if(callBack) {
                callBack();
            }
        });
        wx.error(function(res) {
            //if(window.blnResellerTest)
            //{
            //    alert("weiXinConfig=error=="+res.errMsg);
            //}
            console.log("==微信注册=weiXinConfig.errMsg=="+res.errMsg);
        });
    });

}
export function wxShareQQ(shareUrl="",content="",title="")
{
    if(shareUrl=="")
    {
        shareUrl = document.location.href;
    }
    if(content=="")
    {
        content = document.title;
    }

    weiXinConfig(()=>{
        wx.onMenuShareQQ({
            title: title,
            desc: content,
            link: shareUrl,
            imgUrl: encodeURI(MOBILE_URL_PREFIX+logo),
            trigger: function (res) {
                // alert('用户点击分享到QQ');
            },
            complete: function (res) {
                //alert(JSON.stringify(res));
            },
            success: function (res) {
                //alert('已分享');
            },
            cancel: function (res) {
                //alert('已取消');
            },
            fail: function (res) {
                // alert(JSON.stringify(res));
            }
        })
    });
}
//分享到朋友
export function wxShareGoodFriend(shareUrl="",content="",title="")
{
    if(shareUrl=="")
    {
        shareUrl = document.location.href;
    }
    if(content=="")
    {
        content = document.title;
    }
    weiXinConfig(()=> {
        var imgUrl = encodeURI(MOBILE_URL_PREFIX+logo);
        wx.onMenuShareAppMessage({
            title:title, // 分享标题
            desc: content, // 分享描述
            link: shareUrl, // 分享链接
            imgUrl:imgUrl, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                console.log('用户点击分享到朋友');
            },
            success: function (res) {
                //alert('已分享');
                //if (window.blnResellerTest) {
                //    alert('已分享==' + JSON.stringify(res));
                //}
                console.log('已分享==:' + JSON.stringify(res));
            },
            cancel: function (res) {
                //if (window.blnResellerTest) {
                //    alert('已取消分享' + JSON.stringify(res));
                //}
                console.log('已取消分享==:' + JSON.stringify(res));
            },
            fail: function (res) {
                console.log('分享失败==:' + JSON.stringify(res));
                //if (window.blnResellerTest) {
                //    alert('分享失败==:' + JSON.stringify(res));
                //}
            }
        });
    });
}
//分享到朋友圈
export function wxShare(shareUrl="",content="")
{
    if(shareUrl=="")
    {
        shareUrl = document.location.href;
    }
    if(content=="")
    {
        content = document.title;
    }
    weiXinConfig(()=> {
        var imgUrl = encodeURI(MOBILE_URL_PREFIX+logo);
        wx.onMenuShareTimeline({
            title: content,
            link: shareUrl,
            imgUrl: imgUrl,
            trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                console.log('用户点击分享到朋友圈');
            },
            success: function (res) {
                //alert('已分享');
                //if (window.blnResellerTest) {
                //    alert('已分享==' + JSON.stringify(res));
                //}
                //alert('已分享=='+JSON.stringify(res));
                console.log('已分享==:' + JSON.stringify(res));
            },
            cancel: function (res) {
                //if (window.blnResellerTest) {
                //    alert('已取消分享' + JSON.stringify(res));
                //}
                console.log('已取消分享==:' + JSON.stringify(res));
            },
            fail: function (res) {
                console.log('分享失败==:' + JSON.stringify(res));
                //if (window.blnResellerTest) {
                //    alert('分享失败==:' + JSON.stringify(res));
                //}
            }
        });
    });
}

export function chooseImage(callBack)
{
    weiXinConfig(()=> {
        //wx.previewImage({
        //    current: 'http://www.yataijia.com/img/2017/8/7/34800842335929694836606_200X200.jpg', // 当前显示图片的http链接
        //    urls:["http://www.yataijia.com/img/2017/8/7/34800842335929694836606_200X200.jpg"] // 需要预览的图片http链接列表
        //});
        wx.chooseImage({
            count: 1, // 可选择图片张数
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var localId = res.localIds[0];
                wx.getLocalImgData({
                    localId: localId.toString(), // 图片的localID
                    success: function (res) {
                        var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                        //alert("==localData==:"+localData);
                        if (callBack) {
                            callBack(localData);
                        }
                        //self.props.updateMerchantIcon(localData,"headerIcon");
                    }
                });
            }
        });
    });


}