var Game=(function(_super){
    function Game(){
        Game.super(this)
        this.timeBar.value=1
        this.gameState=START;
        this.score=0;
        this.handler=Laya.Handler.create(this,this.setScore,null,false)
        this.showText.text="抢到0个"
    }
    Laya.class(Game,"Game",_super)

    var _proto = Game.prototype

    _proto.getMoles = function(){
        var moles=new Array(9)
        var normalState,hitState;
        for(var i=0;i<9;i++){
            normalState=this.getChildByName("item"+i).getChildByName("normalState");
            hitState=this.getChildByName("item"+i).getChildByName("hitState")
            scoreImg=this.getChildByName("item"+i).getChildByName("scoreImg")
            plus=this.getChildByName("item"+i).getChildByName("plus")
            moles[i]=new Mole(normalState,hitState,26,scoreImg,plus)
            moles[i].normalState.on(Laya.Event.CLICK,moles[i],moles[i].hit,[this.handler])
            moles[i].init()
        }
        return moles;
    }

    _proto.setScore=function(type){
        switch(type){
            case 1:
                this.score-=100;
                break;
            case 2:
                this.score+=100; 
                break;   
        }
        if(this.score<=0){
            this.score=0
        }
        this.showScore()
    }

    _proto.showScore=function(){
        this.data = {};
        this.temp = this.score;
        for(var i=9;i>=0;i--){
            this.data["item"+i] = {index:Math.floor(this.temp%10)};
            this.temp/=10;
        }
        this.scoreNum.dataSource = this.data;
        this.showText.text="抢到"+(this.score)/100+"个"
    }

    _proto.showMole = function(moles){
        this.timeBar.value-=(1/30)
        if(this.timeBar.value<=0){
            this.gameState=OVER;
            return;
        }
        var num=randomNum(2,5)
        var arr=[]
        arr=randomArr(num,0,8)
        for(var i=0;i<arr.length;i++){
            var index = arr[i]
            moles[index].show()
        }        

        //生成指定区间的一个随机数
        function randomNum(Min,Max){
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
        }
        //生成n个指定区间不重复的随机数组
        function randomArr(n,min,max){
            var arr=[];
            var arr2=[];
            for(i=0;i<max-min+1;i++){
                arr[i]=i+min;
            }
            for(var j,x,i=arr.length;i;j=parseInt(Math.random()*i),x=arr[--i],arr[i]=arr[j],arr[j]=x);
            for(i=0;i<n;i++){
                arr2[i]=arr[i];
            }
            return arr2;
        }
        
    }

    return Game;
})(ui.GameUI)