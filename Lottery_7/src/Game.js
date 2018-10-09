var Game=(function(){
    function Game(){
        this.i=0
        this.interval=50
        this.state=INITIAL
    }

    var _proto=Game.prototype

    _proto.lottery=function(){
        if(this.state==RUNNING){
            this.state=STOPPING
            this.button.skin="ui/btn-2-1.png"//等待抽奖
        }else if(this.state==STOPPING){
            return;
        }else if(this.state==STOPPED){
            this.state=RUNNING
            this.button.skin="ui/btn-1-1.png"//开始抽奖
        }else if(this.state==INITIAL){
            this.state=RUNNING;
        }
        this.looper()
    }

    _proto.looper=function(){
        if(this.state==STOPPING){
            this.interval+=100
            if(this.interval>1000){
                this.interval=50
                this.state=STOPPED
                this.button.skin="ui/btn-1-1.png"//开始抽奖
                this.checkPrizer()
                // this.sendHttp()
                background.message.text="恭喜"+this.winner.name+"抽中"+background.prizeName.text
                this.showWinning()
                return 
            }
        }
        if(this.i!=0){
            this.getChildByName("item"+(this.i-1)).getChildByName("glow").visible=false   
        }
        if(this.i==0){
            this.getChildByName("item"+(PEOPLE-1)).getChildByName("glow").visible=false 
        }
        this.getChildByName("item"+this.i).getChildByName("glow").visible=true 
        this.i<(PEOPLE-1)?this.i++:this.i=0
        Laya.timer.once(this.interval,this,this.looper)
    }

    _proto.sendHttp=function(){
        var xhr = new Laya.HttpRequest();
        xhr.once(Event.ERROR,this,errorHandler);
        xhr.send('/LotteryServer/saveData.jsx'+'?nickName='+this.winner.name+'&prize='+background.prizeName.text,"","get","text");
        function errorHandler(data){
            alert(data.code,data.msg)
        }
    }

    _proto.checkPrizer=function(){
        for(var i=0;i<PEOPLE;i++){
            var item=this.getChildByName("item"+i)
            if(item.getChildByName("glow").visible){
                this.winner={
                    avatar:item.getChildByName("avatar").skin,
                    name:item.getChildByName("nickName").text
                }
                break;
            }
        }
    }

    _proto.showWinning=function(){
        var winning=new ui.WinningUI()
        winning.prizeName.text=background.prizeName.text
        var masker=new ui.MaskerUI()
        winning.avatar.skin=this.winner.avatar
        winning.scale(0,0)
        winning.centerX=0
        winning.centerY=-50
        Laya.stage.addChild(masker)
        Laya.stage.addChild(winning)
        Laya.Tween.to(winning,{scaleX:1,scaleY:1},1000,Laya.Ease.backInOut)
        winning.button.on(Laya.Event.CLICK,this,function(){
            winning.removeSelf()
            masker.removeSelf()
        })
    }

    return Game;
})()



