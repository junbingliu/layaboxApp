var Hammer = (function(_super){
    function Hammer(){
        Hammer.super(this);
    }
    Laya.class(Hammer,"Hammer",_super);
    var _proto = Hammer.prototype;
    //开始使用
    _proto.start = function(){
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.CLICK,this,this.fingerClick);
    }
    
    //结束使用
    _proto.end = function(){
        Laya.Mouse.show();
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