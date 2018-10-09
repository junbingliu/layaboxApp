const INITIAL="0"
const RUNNING="1"
const STOPPING="2"
const STOPPED="3"
const PRIZE_NAME="奖品iPhoneX"
var superUI;
var PEOPLE;
var ITEM_Length;
var imgs=[]
var imgsArr=[
        {
            imgUrl:"7fc1995ea79f0b3f!400x400_big",name:"大毛"
        },{
            imgUrl:"13e33182a5b29532!400x400_big",name:"小毛"
        },{
            imgUrl:"293b16abef4eb814!400x400_big",name:"一毛"
        },{
            imgUrl:"80259f821c4afb2f!400x400_big",name:"二毛"
        },{
            imgUrl:"852578a55f7be00f!400x400_big",name:"三毛"
        },{
            imgUrl:"afc29da0ce3dfeac!400x400_big",name:"毛毛"  
        },{
            imgUrl:"avatar",name:"Rose"  
        }
    ];

var propObj={
    row:10,
    col:10,
    initX:10,
    initY:10,
    totalWidth:523,
    totalHeight:523,
    interval:5,
    color:'#0000cc'
}


