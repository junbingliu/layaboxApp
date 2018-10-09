var Mole=(function(){
    function Mole(normalState,hitState,downY,scoreImg,plus){
        this.normalState=normalState;
        this.hitState=hitState
        this.downY=downY
        this.upY=this.normalState.y
        this.scoreImg=scoreImg
        this.plus=plus
        this.plus.anchorX=0.5
        this.plus.anchorY=0.5
    }
    var _proto=Mole.prototype

    _proto.init=function(){
        this.normalState.visible=false
        this.normalState.y=this.downY
        this.hitState.visible=false
        this.scoreImg.visible=false
        this.plus.visible=false
    }

    _proto.show=function(){
        this.type=Math.random()<0.2?1:2;
        this.normalState.skin="ui/mouse_normal_"+this.type+".png";
        this.hitState.skin="ui/mouse_hit_"+this.type+".png";
        this.scoreImg.skin="ui/score_"+this.type+".png";
        this.type==2?this.plus.text="红包 +1":this.plus.text="红包 -1"
        this.type==2?this.plus.color="#e22906":this.plus.color="#e29b05"
        this.normalState.visible=true
        Laya.Tween.to(this.normalState,{y:this.upY},300,Laya.Ease.backOut,
        Laya.Handler.create(this,this.stay));

    }
    _proto.stay=function(){
        Laya.timer.once(300,this,this.hide)
    }
    _proto.hide=function(){
        Laya.Tween.to(this.normalState,{y:this.downY},300,Laya.Ease.backIn);
        this.normalState.visible=false;
    }
    _proto.hit=function(handler){
        handler.runWith(this.type)
        this.normalState.visible=false;
        this.hitState.visible=true;
        Laya.timer.once(300,this,function(){
            this.hitState.visible=false;
        })
        // this.showScore()
        this.ifGet()
        Laya.timer.once(500,this,this.init);
    }

    _proto.ifGet=function(){
        this.plus.scale(0,0);
        this.plus.visible = true;
        Laya.Tween.to(this.plus,{scaleX:1,scaleY:1},300,Laya.Ease.backOut);
    }

    _proto.showScore=function(){
        this.scoreImg.scale(0,0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg,{scaleX:1,scaleY:1},300,Laya.Ease.backOut);
    }

    return Mole;
})()