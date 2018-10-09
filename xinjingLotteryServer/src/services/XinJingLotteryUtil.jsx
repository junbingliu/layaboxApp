//#import $xinjingLotteryServer:services/XinJingLotteryService.jsx

var XinJingLotteryUtil = (function () {
    var f = {

        /**
         * 判断用户是否已经报名参加了某个抽奖
         * @param lotteryId
         * @param userId
         * @returns {boolean}
         */
        hasJoinLottery: function (lotteryId, userId) {
            var jLotteryRelInfo = XinJingLotteryService.getLotteryRelInfo(lotteryId);
            if (!jLotteryRelInfo) {
                return false;
            }
            var joinUserList = jLotteryRelInfo.joinUserList;
            if (!joinUserList || joinUserList.length == 0) {
                return false;
            }
            for (var i = 0; i < joinUserList.length; i++) {
                if (joinUserList[i].userId == userId) {
                    return true;
                }
            }

            return false;
        },
        /**
         * 获取可抽奖的用户列表，排除了已中奖的用户
         * @param jLotteryRelInfo
         * @returns {boolean}
         */
        getCanAwardUserList: function (jLotteryRelInfo) {
          // return jLotteryRelInfo.joinUserList;
            var recordList = [];
            if (jLotteryRelInfo) {
                var joinUserList = jLotteryRelInfo.joinUserList;
                if (joinUserList) {
                    /*for (var i = 0; i < joinUserList.length; i++) {
                        if (!f.checkHasHitAward(jLotteryRelInfo, joinUserList[i])) {
                            recordList.push(joinUserList[i]);
                        }
                    }*/
                    return joinUserList
                }
            }
            return recordList;
        },
        /**
         * 判断用户是否已经中奖过
         * @param jLotteryRelInfo
         * @param joinUser
         * @returns {boolean}
         */
        checkHasHitAward: function (jLotteryRelInfo, joinUser) {
            if (jLotteryRelInfo && joinUser) {
                var winInfo = jLotteryRelInfo.winInfo;
                if (winInfo) {
                    for (var key in winInfo) {
                        var winUserList = winInfo[key];
                        for (var i = 0; i < winUserList.length; i++) {
                            if (winUserList[i].userId == joinUser.userId) {
                                return true;
                            }
                        }
                    }
                }
            }

            return false;
        },
        /**
         * 获取某个抽奖活动的中奖用户列表
         * @param jLottery
         * @param jLotteryRelInfo
         * @returns {Array}
         */
        getHitAwardList: function (jLottery, jLotteryRelInfo) {
            var recordList = [];
            if (jLottery) {
                var awardList = jLottery.giftList;
                if (awardList) {
                    for (var i = 0; i < awardList.length; i++) {
                        var hitAward = {};
                        hitAward.awardId = awardList[i].id;
                        hitAward.awardName = awardList[i].name;
                        hitAward.personList = f.getPersonList(jLotteryRelInfo, hitAward.awardId);
                        recordList.push(hitAward);
                    }
                }
            }

            return recordList;
        },
        getPersonList: function (jLotteryRelInfo, awardId) {
            var personList = [];
            if (jLotteryRelInfo) {
                var winInfo = jLotteryRelInfo.winInfo;
                if (winInfo) {
                    var winUserList = winInfo[awardId];
                    if (winUserList) {
                        for (var i = 0; i < winUserList.length; i++) {
                            var jWin = winUserList[i];
                            personList.push({nickName: jWin.userNickName, userId: jWin.userId});
                        }
                    }
                }
            }
            return personList;
        },
        /**
         * 给奖品设置奖品ID
         * @param awardList
         */
        generateAwardId: function (awardList) {
            if (awardList) {
                for (var i = 0; i < awardList.length; i++) {
                    if (!awardList[i].id) {
                        awardList[i].id = XinJingLotteryService.getAwardId();
                    }
                }
            }
        },
        /**
         * 根据奖品ID获得奖品
         * @param jLottery
         * @param awardId
         * @returns {*}
         */
        getAwardByAwardId: function (jLottery, awardId) {
            if (jLottery) {
                var awardList = jLottery.giftList;
                if (awardList) {
                    for (var i = 0; i < awardList.length; i++) {
                        if (awardList[i].id == awardId) {
                            return awardList[i];
                        }
                    }
                }
            }
            return null;
        },
        /**
         * 获得用户在某个抽奖活动的昵称
         * @param userId
         * @param lotteryId
         * @param defaultNickName
         * @returns {*}
         */
        getUserNickName: function (userId, lotteryId, defaultNickName) {
            var jUserNickName = XinJingLotteryService.getUserNickNameInfo(userId);
            if (jUserNickName) {
                return jUserNickName[lotteryId] || defaultNickName;
            }
            return defaultNickName;
        },
        /**
         * 判断某个奖品是否还能继续抽奖
         * @param jLottery
         * @param jLotteryRelInfo
         * @param awardId
         * @returns {*}
         */
        checkCanDoAwardByAwardId: function (jLottery, jLotteryRelInfo, awardId) {
            if (!jLottery || !jLotteryRelInfo) {
                return false;
            }
            var jAward = f.getAwardByAwardId(jLottery, awardId);
            if (!jAward) {
                return false;
            }
            var count = Number(jAward.count);

            var winInfo = jLotteryRelInfo.winInfo;
            if (winInfo) {
                var winUserList = winInfo[awardId] || [];
                if (winUserList.length >= count) {
                    //当某个奖品中奖数量大于等于奖品数量的时候，则不可再抽奖
                    return false;
                }
            }
            return true;
        }

    };
    return f;
})();