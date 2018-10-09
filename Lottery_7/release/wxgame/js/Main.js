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
        Laya.init(640,1618)
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = "noborder";
        Laya.stage.screenMode = "vertical";
        Laya.stage.bgColor="#ffffff"  
        Laya.loader.load("res/atlas/ui.atlas",Laya.Handler.create(this,action),
        null,Laya.Loader.ATLAS)
    })()
    
    function action(){
        background=new Background()
        Laya.stage.addChild(background)
        background.prizeName.text=PRIZE_NAME
        background.light_1.play(0)
        background.light_2.play(0)
        var game=new Game()
        Laya.stage.addChild(game)
        for(var i=0;i<=(ITEM_Length-1);i++){
            // game.getChildByName("item"+i).getChildByName("wight").visible=false
            game.getChildByName("item"+i).getChildByName("avatar").visible=false
        }
        Laya.loader.load("res/atlas/ui/avatar.atlas",Laya.Handler.create(this,function(){
             for(var i=0;i<=(PEOPLE-1);i++){
                var imgUrl="ui/avatar/"+imgsArr[i].imgUrl+".jpg"
                var wight=game.getChildByName("item"+i).getChildByName("wight")
                var avatar=game.getChildByName("item"+i).getChildByName("avatar")
                wight.visible=true
                avatar.visible=true
                avatar.skin=imgUrl
                game.getChildByName("item"+i).getChildByName("nickName").text=imgsArr[i].name
             }
        }),null,Laya.Loader.ATLAS)
        game.roll.play(0)
        game.button.on(Laya.Event.CLICK,game,game.lottery)
    }

})()