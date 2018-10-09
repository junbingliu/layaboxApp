(function(){
    (function(){
        PEOPLE=imgsArr.length
        if(PEOPLE<=8){
            superUI=ui.Game8UI
            ITEM_Length=8
        }else if(PEOPLE<=12){
            superUI=ui.Game12UI
            ITEM_Length=12
        }else if(PEOPLE<=24){
            superUI=ui.Game24UI
            ITEM_Length=24
        }else{
            alert("人数过多")
            return
        }
        Laya.init(640,1610,Laya.WebGL)
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = "showall";
        Laya.stage.screenMode = "vertical";
        Laya.stage.bgColor="#ffffff"  
        Laya.loader.load(["res/atlas/ui.atlas","res/atlas/ui/avatar.atlas"],Laya.Handler.create(this,action),
        null,Laya.Loader.ATLAS)
    })()
    
    function action(){
        background=new ui.BackgroundUI()
        Laya.stage.addChild(background)
        background.prizeName.text=PRIZE_NAME
        var sp=new Laya.Sprite()
        background.place.addChild(sp)
        sp.size(150,25)
        sp.graphics.drawRect(0,0,150,25,"#ef8fd0")
        sp.pos(-3,-2)
        var initX=sp.x, initY=sp.y, maxX=577, maxY=575, interval=1, step=2
        Game.walk(sp,initX,initY,maxX,maxY,interval,step)
        var game=new Game()
        console.log(Game.prototype)
        Laya.stage.addChild(game)
        for(var i=0;i<=(ITEM_Length-1);i++){
            game.getChildByName("item"+i).getChildByName("avatar").visible=false
        }
        for(var i=0;i<=(PEOPLE-1);i++){
            var imgUrl="ui/avatar/"+imgsArr[i].imgUrl+".jpg"
            var wight=game.getChildByName("item"+i).getChildByName("wight")
            var avatar=game.getChildByName("item"+i).getChildByName("avatar")
            wight.visible=true
            avatar.visible=true
            avatar.skin=imgUrl
            game.getChildByName("item"+i).getChildByName("nickName").text=imgsArr[i].name
        }
        game.roll.play(0)
        game.button.on(Laya.Event.CLICK,game,game.lottery)
        // background.getChildByName("btn").on(Laya.Event.CLICK,background,function(){
        //     location.href="winners.html"
        // })
    }

})()