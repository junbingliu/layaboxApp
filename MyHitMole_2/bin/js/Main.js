(function(){   
    Laya.init(1000,600)
    Laya.stage.bgColor="#ffcccc"
    var startGame;
    var game;
    var index;
    Laya.loader.load("res/atlas/ui.json",Laya.Handler.create(this,action),
    null,Laya.Loader.ATLAS)

    function action(){
        addIndex()
        index.playGame.on(Laya.Event.CLICK,this,function(){
            console.log("=====")
            console.log(index.nickName.text)
            index.removeSelf()
            addStartGame()
        })
    }

    function addStartGame(){
        startGame = new StartGame()
        startGame.centerX=0;
        startGame.centerY=0;
        Laya.stage.addChild(startGame)
        startGame.startBtn.on(Laya.Event.CLICK,this,function(){
            startGame.removeSelf()
            game=new Game()
            Laya.stage.addChild(game)
            var moles=game.getMoles()
            Laya.timer.loop(1000,this,runner,[moles])
        })
    }

    function addIndex(){
        index=new Index()
        index.centerX=0
        index.centerY=0
        Laya.stage.addChild(index)
    }

    function runner(moles){
        game.showMole(moles)
        checkGameState()
    }

    function checkGameState(){
        if(game.gameState==OVER){
            over()
        }
    }

    function over(){
        Laya.timer.clear(this,runner)
        var gameOver=new GameOver();
        gameOver.centerX=0;
        gameOver.centerY=30;
        //gameOver.playScore()
        gameOver.showScore(game.score)
        Laya.stage.addChild(gameOver)
        gameOver.scoreSort.on(Laya.Event.CLICK,this,function(){
            Laya.Browser.window.location.href="test.html"
        })
        gameOver.restartBtn.on(Laya.Event.CLICK,this,function(){
            gameOver.removeSelf()
            game.removeSelf()
            action()
        })
    }
})()


