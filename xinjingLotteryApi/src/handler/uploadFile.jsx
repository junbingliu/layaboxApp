//#import Util.js
//#import login.js
//#import user.js
//#import UserUtil.js
//#import file.js
//#import DateUtil.js
//#import sysArgument.js

(function () {


    var ret = {
        state:false,
        errorCode:""
    }
    var imgData= $.params.imgData;
    var user = LoginService.getFrontendUser();
    if (user) {
        $.log("user ok.");
    } else {
        ret.errorCode="notLogin";
        out.print(JSON.stringify(ret));
        $.log("notLogin....")
        return;
    }
    if(imgData){
        imgData=JSON.parse(imgData);
        var pos = imgData.indexOf("base64,");
        imgData = imgData.substring(pos+"base64,".length);
        var fileInfo = FileService.addFileByBytes(imgData,"testOne.jpg");
        if(fileInfo&&fileInfo.fileId){
            $.log("before generateSmallPics," + fileInfo.fileId);
            $.generateSmallPics(fileInfo.fileId,"300x300");

            var ImgUrl=FileService.getFullPath(fileInfo.fileId);
            $.log("after generateSmallPics," + fileInfo.fileId+"," + ImgUrl);


            ret = {
                state:"ok",
                fileId:fileInfo.fileId,
                ImgUrl:ImgUrl
            }
        }
    }
    out.print(JSON.stringify(ret));
})();