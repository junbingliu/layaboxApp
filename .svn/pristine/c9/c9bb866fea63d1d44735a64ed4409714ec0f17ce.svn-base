import $ from  'jquery'
import { SCAN_LOGIN_URL,PRODUCT_UPLOADPICS } from '../consts'
import {getWeChatUser} from "../actions/loginAction"
import {showLayer} from '../actions/alertAction'
// import {IconCry,IconSmile} from '../components/AlertLayer/AlertLayer'

export function getImageDataUrl(url, spec, callBack, nTimes){
  if (!nTimes) {
    nTimes = 1;
  }
  if (nTimes > 6) {
    callBack( null );
    return;
  }
  var img = new Image();
  if (!url) {
    callBack( null );
    return;
  }

  img.onload = function (){
    var canvas = document.createElement( "canvas" );
    canvas.width = this.width;
    canvas.height = this.height;
    var ctx = canvas.getContext( "2d" );
    ctx.drawImage( this, 0, 0 );
    var dataURL = canvas.toDataURL( "image/png" );
    callBack( dataURL );
  };

  img.onerror = function (){
    setTimeout( ()=>{
      getImageDataUrl( url, spec, callBack, nTimes++ );
    }, 400 );
  }
  url = url.replace( /[0-9]+(X|x)[0-9]+/, spec );
  img.src = url;
}


export function getRelatedUrl(url, spec){
  console.log("getRelatedUrl");
  if(url.indexOf("img.is1.com.cn")==-1){
    console.log("do not contain img.is1.com.cn",url);
    return url;
  }

  //已经有spec
  var pattern = /[0-9]+(X|x)[0-9]+/
  if(pattern.test(url)){
    url = url.replace( /[0-9]+(X|x)[0-9]+/, spec );
    console.log("already contains spec",spec);
    return url;
  }

  var lastIndex = url.lastIndexOf(".");
  if(lastIndex < url.length - 8){
    //没有ext
    url = url + "_" + spec;
    console.log("do not contain ext",url);
    return url;
  }
  else{
    //有ext
    var fileName = url.substring(0,lastIndex);
    var ext = url.substring(lastIndex+1);
    url = fileName + "_" + spec + "." + ext;
    console.log("do not contains spec",url);
    return url;
  }
}

export function getOriginUrl(url){
  url = url.replace( /_[0-9]+(X|x)[0-9]+/, "" );
  return url;
}

export function getResellerId(){
  var pattern = /index_([0-9]+)\.html/g;
  var path = window.location.pathname;
  var arr;
  if ((arr = pattern.exec( path )) != null) {
    var resellerId = "u_" + arr[ 1 ];
    return resellerId;
  }
  else {
    return null;
  }
}
const shopUrlDir = "xyfs_60";
export function getShopUrl(userId){
  var pattern = /u_([0-9]+)/g;
  var arr;
  if ((arr = pattern.exec( userId )) != null) {
    var finalUrl = "http://youbei.is1.com.cn/"+shopUrlDir+"/index_" + arr[ 1 ] + ".html#/storeIndex";
  }
  else {
    var finalUrl = "http://youbei.is1.com.cn/"+shopUrlDir + "/index_0.html#/storeIndex";
  }
  var shareUrl = "http://youbei.is1.com.cn/wechatInterface/handler/login.jsx?goUrl=" + encodeURIComponent( finalUrl );
  return shareUrl;
}

export function getProductUrl(userId,productId){
  var pattern = /u_([0-9]+)/g;
  var arr;
  if ((arr = pattern.exec( userId )) != null) {
    var finalUrl = "http://youbei.is1.com.cn/"+shopUrlDir + "/index_" + arr[ 1 ] + ".html#/merProductDetail/" + productId + "/" + userId;
  }
  else {
    var finalUrl = "http://youbei.is1.com.cn/index_0.html#/storeIndex";
  }

  var shareUrl = "http://youbei.is1.com.cn/wechatInterface/handler/login.jsx?goUrl=" + encodeURIComponent( finalUrl );
  return shareUrl;
}

export function getSharedCoqutryUrl(coquetryId){
  var finalUrl = "http://youbei.is1.com.cn/"+shopUrlDir + "/index_0.html#/saJiaoUserPay/" + coquetryId;
  var shareUrl = "http://youbei.is1.com.cn/wechatInterface/handler/login.jsx?goUrl=" + encodeURIComponent( finalUrl );
  return shareUrl;
}

export function doShare(scene, thumbData, title, description, url, successCallback, errCallback){
  Wechat.share( {
    message: {
      title: title,
      description: description,
      thumb: thumbData,
      mediaTagName: "webpage",
      media: {
        type: Wechat.Type.WEBPAGE,
        webpageUrl: url
      }
    },
    scene: scene   // share to Timeline
  }, function (){
    if (successCallback) {
      successCallback();
    }

  }, function (reason){
    if (errCallback) {
      errCallback();
    }
  } );
}


export function isCordova(){
  if (typeof window.underCordova == 'undefined') {
    return false;
  }
  return window.underCordova;
}

export function getDateString(d,defaultString){
  if(!d){
    return defaultString;
  }
  d = new Date( Number( d ) );
  var fullYear = d.getFullYear();
  var month = d.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var day = d.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  var hour = d.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }

  var minutes = d.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var seconds = d.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return fullYear + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + minutes + ":" + seconds;
}

export function formatMoney(fen){
  return (Number(fen)+0.00001).toFixed( 2 );
}
export function truncate(s, length){
  if (!s) {
    return s;
  }
  if (length > s.length) {
    length = s.length;
  }
  return s.substring( 0, length );
}

export function getDuration(milliseconds){
  if (isNaN( milliseconds )) {
    return "-";
  }
  var minutes = Math.floor( milliseconds / 1000 / 60 );
  var left = milliseconds - minutes * 60 * 1000;
  var seconds = Math.floor( left / 1000 );
  if (minutes > 0) {
    return minutes + "分" + seconds + "秒"
  }
  else {
    return seconds + "秒"
  }
}



export function setDefaultFontSize(){
  var wWidth = $( window ).width();
  var font = 20; //Math.round( wWidth / 14 );
  if (wWidth >= 364 && wWidth <= 375) {
    font = 22;
  } else if (wWidth == 360 || wWidth == 361) {
    font = 18;
  } else if (wWidth > 640) {
    font = 22;
  }

  $( "#html" ).css( "fontSize", font );
}

export function getTimeDiff(t){
  var now = new Date().getTime();
  var diff = now - t;
  var minutes = Math.floor( diff / 1000 / 60 );
  if (minutes < 1) {
    return "刚刚"
  }
  if (minutes < 60) {
    return minutes + "分钟前";
  }

  var hours = Math.floor( minutes / 60 );

  var days = Math.floor( minutes / 60 / 24 );
  if (days > 0) {
    var hours = hours - 24 * days;
    minutes = minutes - 1440 * days - 60 * hours;
    if (hours > 0) {
      return days + "天" + hours + '小时' + minutes + "分前";
    }
    else {
      return days + "天" + minutes + "分前";
    }
  }
  else {
    if (hours > 0) {
      minutes = minutes - hours * 60;
      return hours + '小时' + minutes + "分前";
    }
    else {
      return minutes + "分前";
    }
  }
}


export function scan(){
  cloudSky.zBar.scan(
    {
      camera: "back", // defaults to "back"
      flash: "off", // defaults to "auto". See Quirks
      drawSight: true, // defaults to true, create a red sight/line in the center of the scanner view.
      connected: false, // defaults to false, triggers the appearance of the login button if false
      askOpen: false // shows openDialogPopup if the barcode is an external url
    },
    function (result){
      var url = "";
      if (device.platform == 'Android') {
        url = result.text;
      }
      else {
        url = result;
      }

      if (url.indexOf( SCAN_LOGIN_URL ) == 0) {
        $.post( url, {}, function (ret){
        }, 'json' )
      }
      else{
        if(url.indexOf("youbei.is1.com.cn/index")>0){
          var hashIndex = url.indexOf("#");
          var hash = url.substring(hashIndex);
          window.location.href = hash;
          return;
        }
        else if(url.indexOf("youbei.is1.com.cn/wechatInterface")>0){
          var idx = url.indexOf("goUrl=");
          if(idx>0){
            var realUrl = url.substring(idx+6);
            realUrl = decodeURIComponent(realUrl);
            var hashIndex = realUrl.indexOf("#");
            var hash = realUrl.substring(hashIndex);
            window.location.href = hash;
            return;
          }
        }
        else{
           //打开外部浏览器
          var ref = cordova.InAppBrowser.open(url, '_blank','EnableViewPortScale=yes,location=no,toolbarposition=top');
        }
      }
    },
    function (error){
      console.log( "failed." )
    }
  );
}
//根据时间生成m位随机数，最大13位随机数，并且不能保证首位不为0
export function randomNumber(m) {
  m = m > 13 ? 13 : m;
  var num = new Date().getTime();
  return num.toString().substring(13 - m);
}

//插入字符串
export function insertStringAtIndex(str, addString, index){
  if (str == undefined || str.length < 0) {
    return "";
  }
  var endIndex = index + addString.length - 1;
  var tmp1 = str.substring( 0, endIndex );
  var tmp2 = str.substring( endIndex );
  var newstr = tmp1 + addString + tmp2;
  return newstr;
}

//验检手机号
export function isphoneNumber(str){
  if (str == undefined || str.length < 0) {
    return false;
  }
  let strValue = cleanKeywordHandle(str, ' ');//去掉空格
  if (strValue.length <11)
  {
    return false;
  }
  var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  return reg.test(strValue);
}
//手机号格式 xxx-xxxx-xxxx
export function phoneFormactHandle(str){
  if (!str){
    return "";
  }
  let strValue = cleanKeywordHandle(str, '-');//去掉-
  strValue = cleanKeywordHandle(strValue, ' ');//去掉空格
  let infolenNum = strValue.length;
  if (infolenNum > 3) {
    strValue = insertStringAtIndex( strValue, "-", 3 );
    if (infolenNum > 7) {
      strValue = insertStringAtIndex( strValue, "-", 8 );
    }
  }
  return strValue;
}

export function cleanKeywordHandle(str, keyword){
  if (str == undefined || str.length < 0) {
    return "";
  }
  var reg = new RegExp( keyword, "g" ); //创建正则RegExp对象
  let strValue = str.replace( reg, "" );
  return strValue;
}

export function doLogin(dispatch){
  var scope = "snsapi_userinfo",
    state = "_" + (+new Date());
  Wechat.auth( scope, state, function (response){
    let code = response.code;
    dispatch( getWeChatUser( code, ()=>{
      window.location.hash = "#/";
    } ) );
  }, function (reason){
    console.log( '=====微信登录=失败==11===' );
    dispatch(showLayer( "登录失败:" + reason, 1 ));
  } );
}

export function getPriceRange(product,selectedSkus){
  function getSkuPrice(skuId,headSkuId){
    var price = product.price;
    var priceValues = price.values;

    var skuPrices = priceValues[skuId];
    if(skuPrices){
      var key ="entitytype_usergroup_c_101";
      var memberPrices = skuPrices[key];
      if (memberPrices) {
        //在多个prices中找到我们想要的
        for (var i = 0; i < memberPrices.length; i++) {
          var p = memberPrices[i];
          if (p.payable == 'Y' && p.moneyTypeId == 'moneytype_RMB') {
            return Number(p.unitPrice);
          }
        }
      }
    }
    if(headSkuId && skuId!=headSkuId){
      return getSkuPrice(headSkuId,headSkuId);
    }
    else{
      return null;
    }
  }

  var minPrice = 99999999,maxPrice = 0;
  var skus = product.skus;
  var headSkuId = "";
  if(skus)
  {
    skus.forEach(sku=>{
      if(sku&&sku.isHead){
        headSkuId = sku.id;
      }
    });
  }
  if(!selectedSkus || selectedSkus.length==0){
    selectedSkus = skus;
  }
  if(selectedSkus)
  {
    selectedSkus.forEach(sku=>{
      var price = getSkuPrice(sku.id,headSkuId);
      if(minPrice>price){
        minPrice = price;
      }
      if(maxPrice<price){
        maxPrice = price;
      }
    });
  }

  minPrice = (minPrice/100).toFixed(2);
  maxPrice = (maxPrice/100).toFixed(2);

  var providePriceRange = [minPrice,maxPrice];

  var resellerPriceRange = [minPrice,maxPrice];
  //计算售价
  if(selectedSkus&&product.resellerPrice){
    var minResellerPrice = 99999999, maxResellerPrice = 0;
    selectedSkus.forEach(sku=>{
      var price = getSkuPrice(sku.id,headSkuId);
      var resellerPrice;
      if(product.resellerPrice.shopFixedRate){
        resellerPrice = price * product.resellerPrice.resellerDefaultPercent/100;
      }
      else if(product.resellerPrice.fixedRate){
        resellerPrice = price * product.resellerPrice.percent/100;
      }
      else{
        resellerPrice = product.resellerPrice[sku.id]*100;
      }
      if(!resellerPrice){
        resellerPrice = price;
      }
      if(minResellerPrice>resellerPrice){
        minResellerPrice = resellerPrice;
      }
      if(maxResellerPrice<resellerPrice){
        maxResellerPrice = resellerPrice;
      }
    });
    minResellerPrice = (minResellerPrice / 100).toFixed(2);
    maxResellerPrice = (maxResellerPrice / 100).toFixed(2);
    resellerPriceRange = [minResellerPrice,maxResellerPrice];
  }
  return {providePriceRange,resellerPriceRange}
}

export function getAttr(target,attrName){
  var attr = target.getAttribute( attrName );
  var n = 0;
  while(!attr){
    n++;
    if(n>20){
      return null;
    }
    target = target.parentElement;
    if(!target){
      return null;
    }
    attr = target.getAttribute( attrName );
  }
  return attr;
}

export function unique(arr,func){
  var newArr = [];
  var old = [];
  if(!arr){
    return arr;
  }
  arr.forEach((e)=>{
    var v = func(e);
    if(old.indexOf(v)==-1){
      old.push(v);
      newArr.push(e);
    }
  });
  return newArr;
}

export function openPage(url)
{
  if (window.deviceReady)
  {
    cordova.InAppBrowser.open( url, '_blank', "closebuttoncaption=返回,disallowoverscroll=yes,enableViewportScale=yes" );
  }
  else {
    window.open( url );
  }
}

const transitionOptions = {
  "direction"        : "left", // 'left|right|up|down', default 'left' (which is like 'next')
  "duration"         :  400, // in milliseconds (ms), default 400
  "slowdownfactor"   :    4, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
  // "slidePixels"      :   20, // optional, works nice with slowdownfactor -1 to create a 'material design'-like effect. Default not set so it slides the entire page.
  "iosdelay"         :  70, // ms to wait for the iOS webview to update before animation kicks in, default 60
  "androiddelay"     :  100, // same as above but for Android, default 70
  "winphonedelay"    :  100, // same as above but for Windows Phone, default 200,
  "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
  "fixedPixelsBottom":   0  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
}

export function slide(direction,url){
  transitionOptions.direction = direction;
  transitionOptions.href = url;
  transitionOptions.iosdelay = 70;
  transitionOptions.androiddelay = 100;
  console.log("transitionOptions",transitionOptions);
  window.plugins.nativepagetransitions.slide(
    transitionOptions,
    function (msg) {console.log("success: " + msg)}, // called when the animation has finished
    function (msg) {alert("error: " + msg)} // called in case you pass in weird values
  );
}



export function back(){
  if(window.plugins && window.plugins.nativepagetransitions && window.plugins.nativepagetransitions.slide) {
    transitionOptions.direction = "right";
    transitionOptions.iosdelay = -1;
    transitionOptions.androiddelay = -1;
    transitionOptions.href = null;
    window.plugins.nativepagetransitions.slide(
      transitionOptions,
      function (msg) {console.log("success: " + msg)}, // called when the animation has finished
      function (msg) {alert("error: " + msg)} // called in case you pass in weird values
    );

    history.go(-1);
    setTimeout(()=>{
      window.plugins.nativepagetransitions.executePendingTransition(
        function (msg) {console.log("success: " + msg)}, // called when the animation has finished
        function (msg) {alert("error: " + msg)} // called in case you pass in weird values
      );
    },100);
  }
  else{

    var event = document.createEvent('UIEvents');
    event.initEvent('Back', true, true);
    document.dispatchEvent(event);
    //history.go(-1);
  }
}


export function flip(url){

  var options = {
    "direction": "up", // 'left|right|up|down', default 'right' (Android currently only supports left and right)
    "duration": 400, // in milliseconds (ms), default 400
    "iosdelay": 50, // ms to wait for the iOS webview to update before animation kicks in, default 60
    "androiddelay": 100,  // same as above but for Android, default 70
    "winphonedelay": 150, // same as above but for Windows Phone, default 200
    "href" : url
  }
  window.plugins.nativepagetransitions.flip(
    options,
    function (msg) {console.log("success: " + msg)}, // called when the animation has finished
    function (msg) {alert("error: " + msg)} // called in case you pass in weird values
  );

}

var goCount = 0;
export function go(url){
  if(window.plugins && window.plugins.nativepagetransitions && window.plugins.nativepagetransitions.slide) {
    goCount++;
    if (goCount % 3 == 0) {
      flip( url );
    }
    else {
      slide( "left", url );
    }
  }
  else{
    console.log("===go==go===");
    location.href = url;
  }

}

