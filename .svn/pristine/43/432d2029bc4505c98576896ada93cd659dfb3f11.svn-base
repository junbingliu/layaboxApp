//#import Util.js
//#import search.js
//#import $xinjingLotteryServer:services/XinJingLotteryService.jsx

(function () {
    if (typeof ids == "undefined") {
        return;//do nothing
    }

    var idArray = ids.split(",");
    var docs = [];
    for (var i = 0; i < idArray.length; i++) {
        var id = idArray[i];
        var jRecord =XinJingLotteryService.getLottery(id);
        if (jRecord) {
            var doc = {};
            doc.id = jRecord.id;
            doc.keyword_text = jRecord.title + "|" + jRecord.content;
            doc.createTime = jRecord.createTime;
            doc.createUserId = jRecord.createUserId;
            doc.ot = "xinjingLotteryObject";
            docs.push(doc);
        }
    }
    SearchService.index(docs, ids);

})();