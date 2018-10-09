//#import pigeon.js
//#import jobs.js

var XinJingLotteryService = (function (pigeon) {
    var objPrefix = "xinjingLotteryServerObj";
    var listPrefix="xinjingLotteryServerList";

    var f = {
        /**
         *
         * @param jLottery
         * @param createUserId
         * @returns {*| }
         */
        addLottery: function (jLottery,createUserId,logo,nickName) {
            var id = f.getNewId();
            var curTime = new Date().getTime();
            jLottery.id = id;
            jLottery.createTime = curTime;
            jLottery.createUserId = createUserId;
            jLottery.createUserLogo = logo;
            jLottery.createUserNickName = nickName;

            pigeon.saveObject(id, jLottery);

            var key = f.getKeyByRevertCreateTime(curTime);
            //所有的
            var listId = f.getListName("all");
            pigeon.addToList(listId, key, id);

            //我发起的
            listId = f.getListName(createUserId);
            pigeon.addToList(listId, key, id);
            f.buildIndex(id);
            return id;
        },
        /**
         *
         * @param jLottery
         */
        updateLottery: function (jLottery) {
            var id = jLottery.id;
            pigeon.saveObject(id, jLottery);
        },
        /**
         * 获得一个抽奖对象
         * @param lotteryId
         * @returns {*|Object}
         */
        getLottery: function (lotteryId) {
            return pigeon.getObject(lotteryId);
        },
        /**
         * 抽奖活动关联的信息：包括报名人信息，中奖人信息
         * @param lotteryId
         */
        getLotteryRelInfo: function (lotteryId) {
            var id = objPrefix + "_RelInfo_" + lotteryId;
            return pigeon.getObject(id);
        },
        saveLotteryRelInfo: function (jLotteryRelInfo) {
            if(!jLotteryRelInfo.lotteryId){
                return;
            }
            if(!jLotteryRelInfo.id){
                jLotteryRelInfo.id = objPrefix + "_RelInfo_" + jLotteryRelInfo.lotteryId;
            }
            return pigeon.saveObject(jLotteryRelInfo.id, jLotteryRelInfo);
        },
        /**
         * 删除
         * @param id
         * @param deleteUserId
         */
        delLottery: function (id, deleteUserId) {
            var jActive = f.getLottery(id);
            if (!jActive) {
                return;
            }
            jActive.isDeleted = true;
            jActive.deleteTime = new Date().getTime();
            jActive.deleteUserId = deleteUserId;
            var key = f.getKeyByRevertCreateTime(jActive.createTime);
            var listId = f.getListName();
            pigeon.deleteFromList(listId, key, id);
            var recycleListId = f.getRecycleListName();
            pigeon.addToList(recycleListId, key, id);
            pigeon.saveObject(id, jActive);
            f.buildIndex(id);
        },
        /**
         * 获得一个唯一的内部id
         * @returns {string}
         */
        getNewId: function () {
            var idNum = pigeon.getId("xinjingLotteryServerObj");//50000,50001,50002
            return objPrefix + "_" + idNum;//platformFeedbackServerObj_50000
        },
        getAwardId: function () {
            var idNum = pigeon.getId("xinjingLotteryServerAward");
            return "award_" + idNum;
        },
        /**
         * 所有的抽奖
         * @returns {string}
         */
        getListName: function (userId) {
            return listPrefix + "_lottery_" + userId;
        },
        /**
         * 我参与的抽奖
         * @param userId
         * @returns {string}
         */
        getJoinListName: function (userId) {
            return listPrefix + "_lottery_join_" + userId;
        },
        /**
         * 我有中奖的抽奖
         * @param userId
         * @returns {string}
         */
        getWinListName: function (userId) {
            return listPrefix + "_lottery_win_" + userId;
        },
        /**
         * 已删除的抽奖
         * @returns {string}
         */
        getRecycleListName: function () {
            return listPrefix + "_lottery_recycle";
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
            var jobPageId = "services/XinJingLotteryBuildIndex.jsx";
            JobsService.runNow("xinjingLotteryServer", jobPageId, {ids: id});
        },
        /**
         * 获取所有抽奖总数
         * @returns {*}
         */
        getLotteryListSize: function (userId) {
            var listId = f.getListName(userId);
            return pigeon.getListSize(listId);
        },
        /**
         * 获取指定数量的活动
         */
        getLotteryList:function (userId, start, limit) {
            var listId = f.getListName(userId);
            return pigeon.getListObjects(listId, start, limit);
        },
        getJoinLotteryListSize: function (userId) {
            var listId = f.getJoinListName(userId);
            return pigeon.getListSize(listId);
        },
        getJoinLotteryList:function (userId, start, limit) {
            var listId = f.getJoinListName(userId);
            return pigeon.getListObjects(listId, start, limit);
        },
        getWinLotteryListSize: function (userId) {
            var listId = f.getWinListName(userId);
            return pigeon.getListSize(listId);
        },
        getWinLotteryList:function (userId, start, limit) {
            var listId = f.getWinListName(userId);
            return pigeon.getListObjects(listId, start, limit);
        },
        add2JoinLotteryList:function (userId, lotteryId) {
            var listId = f.getJoinListName(userId);
            pigeon.addToList(listId, lotteryId, lotteryId);
        },
        deleteFromJoinLotteryList:function (userId, lotteryId) {
            var listId = f.getJoinListName(userId);
            pigeon.deleteFromList(listId, lotteryId, lotteryId);
        },
        add2WinLotteryList:function (userId, lotteryId) {
            var listId = f.getWinListName(userId);
            pigeon.addToList(listId, lotteryId, lotteryId);
        },
        deleteFromWinLotteryList:function (userId, lotteryId) {
            var listId = f.getWinListName(userId);
            pigeon.deleteFromList(listId, lotteryId, lotteryId);
        },
        getPigeon:function () {
            return pigeon;
        }

    };
    return f;
})($S);