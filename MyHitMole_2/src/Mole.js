var Mole=(function(){
    function Mole(normalState,hitState,downY,scoreImg,plus){
        this.normalState=normalState;
        this.hitState=hitState
        this.downY=downY
        this.upY=this.normalState.y
        var xx=this.hitState.localToGlobal({x:1,y:2})
        console.log('===='+xx)
        // this.initX=this.hitState.x
        // this.initY=this.hitState.y
        this.scoreImg=scoreImg
        this.plus=plus
    }
    var _proto=Mole.prototype

    _proto.init=function(){
        this.normalState.visible=false
        this.normalState.y=this.downY
        this.hitState.visible=false
        // this.hitState.x=this.initX
        // this.hitState.y=this.initY
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

        // var moveX=Math.abs(795-this.hitState.x);
        // var moveY=Math.abs(18-this.hitState.y);
        // console.log("moveX===="+moveX)
        // console.log("moveY===="+moveY)
        // Laya.Tween.to(this.hitState,{x:moveX,y:moveY,scaleX:0.5,scaleY:0.5},300,Laya.Ease.backIn);

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