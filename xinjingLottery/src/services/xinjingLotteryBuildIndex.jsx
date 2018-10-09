//#import pigeon.js
//#import Util.js
//#import search.js
//#import $xinjingLottery:services/xinJingLotteryService.jsx

(function () {
    if (typeof ids == "undefined") {
        return;//do nothing
    }

    var idArray = ids.split(",");
    var docs = [];
    for (var i = 0; i < idArray.length; i++) {
        var id = idArray[i];
        var jRecord =xinJingLotteryService.getUsers(id);
        if (jRecord) {
            var doc = {};
            doc.id = jRecord.id;
            doc.keyword_text = jRecord.title + "|" + jRecord.content;
            doc.createTime = jRecord.createTime;
            doc.createUserId = jRecord.createUserId;
            doc.ot = "xinjingLottery";
            docs.push(doc);
        }
    }
    if (docs.length == 0) {
        return;
    }
    SearchService.index(docs, ids);

})();