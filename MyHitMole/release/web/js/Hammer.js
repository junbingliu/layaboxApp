var Hammer = (function(_super){
    function Hammer(){
        Hammer.super(this);
    }

    Laya.class(Hammer,"Hammer",_super);

    var _proto = Hammer.prototype;

    _proto.start = function(){
        this.visible=false;
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.CLICK,this,this.fingerClick);
    }
    
    _proto.end = function(){
        Laya.Mouse.show();
        this.visible=false
        Laya.stage.off(Laya.Event.CLICK,this,this.fingerClick);
    }
    _proto.fingerClick = function(){
        this.visible=true;
        this.hit.play(0,false);
        this.pos(Laya.stage.mouseX-this.width/2,Laya.stage.mouseY-this.height/3);
        Laya.timer.once(300,this,this.hide);
    }
    _proto.hide=function(){
        this.visible=false;
    }
    return Hammer;
})(ui.HammerUI);