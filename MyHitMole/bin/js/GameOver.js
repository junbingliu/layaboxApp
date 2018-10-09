var GameOver=(function(_super){
    function GameOver(){
        GameOver.super(this)
    }
    Laya.class(GameOver,"GameOver",_super)

    var _proto=GameOver.prototype

    _proto.playScore=function(){
        for(var i=0;i<10;i++){
            this.scoreNum.getChildByName("item"+i).autoPlay=true
        }
        Laya.timer.once(1000,this,function(){
            for(var i=0;i<10;i++){
                this.scoreNum.getChildByName("item"+i).autoPlay=false
            }
        })
    }

    _proto.showScore=function(score){
        this.data = {};
        this.temp = score;
        for(var i=9;i>=0;i--){
            this.data["item"+i] = {index:Math.floor(this.temp%10)};
            this.temp/=10;
        }
        this.scoreNum.dataSource = this.data;
    }

    return GameOver;
})(ui.GameOverUI)