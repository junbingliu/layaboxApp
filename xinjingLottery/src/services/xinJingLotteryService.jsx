//#import pigeon.js
//#import jobs.js

var xinJingLotteryService = (function (pigeon) {
    var objPrefix = "xinjingLotteryObj";
    var listPrefix="xinjingLotteryList";

    var f = {
        /**
         *
         * @param jUser
         * @param createUserId
         * @returns {*| }
         */
        addLottery: function (jUser,creatUserId) {
            var id = f.getNewId();
            var curTime = new Date().getTime();
            jUser.id = id;
            jUser.createTime = curTime;
            jUser.creatUserId = creatUserId;
            pigeon.saveObject(id, jUser);
            var listId = f.getListName();
            var key = f.getKeyByRevertCreateTime(curTime);
            pigeon.addToList(listId, key, id);
            f.buildIndex(id);
            return id;
        },
        /**
         *
         * @param jUser
         */
        updateLottery: function (jUser) {
            var id = jUser.id;
            pigeon.saveObject(id, jUser);
            return "修改成功";
        },
        /**
         * 获得一个抽奖对象
         * @param id
         * @returns {*|Object}
         */
        getLottery: function (id) {
            return pigeon.getObject(id);
        },
        /**
         * 获得一个唯一的内部id
         * @returns {string}
         */
        getNewId: function () {
            var idNum = pigeon.getId("xinjingLotteryObj");//50000,50001,50002
            return objPrefix + "_" + idNum;//platformFeedbackServerObj_50000
        },
        /**
         * 对象列表名称
         * @returns {string}
         */
        getListName: function () {
            return listPrefix + "_lottery_all";
        },
        /**
         * 辅助方法：按时间倒序排序的key
         * @param dateTime
         * @returns {*}
         */
        getKeyByRevertCreateTime: function (dateTime) {
            dateTime = parseInt(dateTime / 1000);
            return pigeon.getRevertComparableString(dateTime, 11);//倒序 11111=00000099999
            //return pigeon.getComparableString(dateTime, 11);//升序 11111=00000011111
        },
        /**
         * 重建索引
         * @param id
         */
        buildIndex: function (id) {
            var jobPageId = "services/xinjingLotteryBuildIndex.jsx";
            JobsService.runNow("xinjingLottery", jobPageId, {ids: id});
        },
        /**
         * 获取总数
         * @returns {*}
         */
        getAllLotteryListSize: function () {
            var listId = f.getListName();
            return pigeon.getListSize(listId);
        },
        /**
         * 获取指定数量的活动
         */
        getNumberSlideshow:function (start, limit) {
            var listId = f.getListName();
            return pigeon.getListObjects(listId, start, limit);
        },
        /**
         * 删除
         * @param id
         */
        delLottery: function (id) {
            var jActive = f.getLottery(id);
            if (!jActive) {
                return;
            }
            var key = f.getKeyByRevertCreateTime(jActive.createTime);
            var listId = f.getListName();
            pigeon.deleteFromList(listId, key, id);
            pigeon.saveObject(id, null);
            f.buildIndex(id);
        }

    };
    return f;
})($S);