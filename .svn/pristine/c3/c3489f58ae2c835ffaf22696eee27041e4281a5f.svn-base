(function(){
    (function(LayaSample){
        //初始化引擎
        Laya.init(800,600);
        //设置水平和垂直居中
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //保持原始高宽比的情况下，将舞台铺满屏幕，超出比例的部分会有黑边
        Laya.stage.scaleMode = "exactfit";
        //自动横屏，游戏的水平方向始终与浏览器屏幕较短边保持垂直
        Laya.stage.screenMode = "horizontal";
        //设置stage颜色
        Laya.stage.bgColor = "#ffcccc";
        //加载资源
        Laya.loader.load("res/atlas/ui.json",Laya.Handler.create(this,onLoaded),null,Laya.Loader.ATLAS)
    })();
    function onLoaded(){
        // var game = new Game();
        // Laya.stage.addChild(game);
        LayaSample.gameStart = new GameStart();
        Laya.stage.addChild(LayaSample.gameStart);
    }
})(window.LayaSample || (window.LayaSample = {}));