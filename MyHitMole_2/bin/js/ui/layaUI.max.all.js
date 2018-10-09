var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.timeBar=null;
		    this.scoreNum=null;
		    this.showText=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}

		STATICATTR$(GameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":1000,"value":1,"height":600,"clipX":10},"child":[{"type":"Image","props":{"y":8,"x":107,"width":786,"skin":"ui/back.png","height":584}},{"type":"Box","props":{"y":193,"x":245,"name":"item0"},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"ui/mouse_normal_1.png","name":"normalState"}},{"type":"Image","props":{"y":17,"x":8,"skin":"ui/mouse_hit_1.png","name":"hitState"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":-5,"x":63,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":-19,"x":-2,"text":"红包 + 1","strokeColor":"#e0bebd","name":"plus","fontSize":"33","color":"#e22906","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":192,"x":446,"name":"item1"},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"ui/mouse_normal_1.png","name":"normalState"}},{"type":"Image","props":{"y":17,"x":8,"skin":"ui/mouse_hit_1.png","name":"hitState"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":-3,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":-19,"x":-2,"text":"红包 + 1","strokeColor":"#e0bebd","name":"plus","fontSize":"33","color":"#e22906","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":198,"x":652,"name":"item2"},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"ui/mouse_normal_1.png","name":"normalState"}},{"type":"Image","props":{"y":17,"x":8,"skin":"ui/mouse_hit_1.png","name":"hitState"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":-3,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":-19,"x":-2,"text":"红包 + 1","strokeColor":"#e0bebd","name":"plus","fontSize":"33","color":"#e22906","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":289,"x":216,"name":"item3"},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"ui/mouse_normal_1.png","name":"normalState"}},{"type":"Image","props":{"y":17,"x":8,"skin":"ui/mouse_hit_1.png","name":"hitState"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":-3,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":-19,"x":-2,"text":"红包 + 1","strokeColor":"#e0bebd","name":"plus","fontSize":"33","color":"#e22906","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":291,"x":443,"name":"item4"},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"ui/mouse_normal_1.png","name":"normalState"}},{"type":"Image","props":{"y":17,"x":8,"skin":"ui/mouse_hit_1.png","name":"hitState"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":-3,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":-19,"x":-2,"text":"红包 + 1","strokeColor":"#e0bebd","name":"plus","fontSize":"33","color":"#e22906","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":288,"x":653,"name":"item5"},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"ui/mouse_normal_1.png","name":"normalState"}},{"type":"Image","props":{"y":17,"x":8,"skin":"ui/mouse_hit_1.png","name":"hitState"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":-3,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":-19,"x":-2,"text":"红包 + 1","strokeColor":"#e0bebd","name":"plus","fontSize":"33","color":"#e22906","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":393,"x":211,"name":"item6"},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"ui/mouse_normal_1.png","name":"normalState"}},{"type":"Image","props":{"y":17,"x":8,"skin":"ui/mouse_hit_1.png","name":"hitState"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":-3,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":-19,"x":-2,"text":"红包 + 1","strokeColor":"#e0bebd","name":"plus","fontSize":"33","color":"#e22906","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":396,"x":445,"name":"item7"},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"ui/mouse_normal_1.png","name":"normalState"}},{"type":"Image","props":{"y":17,"x":8,"skin":"ui/mouse_hit_1.png","name":"hitState"}},{"type":"Image","props":{"y":84,"x":-1,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":-3,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":-19,"x":-2,"text":"红包 + 1","strokeColor":"#e0bebd","name":"plus","fontSize":"33","color":"#e22906","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":397,"x":673,"name":"item8"},"child":[{"type":"Image","props":{"y":2,"x":4,"skin":"ui/mouse_normal_1.png","name":"normalState"}},{"type":"Image","props":{"y":17,"x":8,"skin":"ui/mouse_hit_1.png","name":"hitState"}},{"type":"Image","props":{"y":86,"x":-1,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":-3,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":-19,"x":-2,"text":"红包 + 1","strokeColor":"#e0bebd","name":"plus","fontSize":"33","color":"#e22906","bold":true,"align":"center"}}]},{"type":"ProgressBar","props":{"y":17,"x":12,"var":"timeBar","value":"1","skin":"ui/progress_time.png"}},{"type":"Box","props":{"y":57,"x":62,"var":"scoreNum"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":"10"}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":"10"}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":"10"}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":"10"}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":"10"}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":"10"}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":"10"}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":"10"}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":"10"}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":"10"}}]},{"type":"Text","props":{"y":92,"x":885,"width":72,"var":"showText","pivotY":20,"pivotX":5,"height":33,"fontSize":"33","color":"#e34d30","bold":true}},{"type":"Image","props":{"y":18,"x":795,"width":83,"skin":"ui/redPac.png","height":102}}]};}
		]);
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.restartBtn=null;
		    this.scoreNum=null;
		    this.scoreSort=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);
		}

		STATICATTR$(GameOverUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"y":-1,"x":29,"width":600,"height":400},"child":[{"type":"Image","props":{"y":24,"x":14,"width":510,"skin":"ui/overBg.png","height":343,"sizeGrid":"14,12,12,12"}},{"type":"Image","props":{"y":53,"x":78,"skin":"ui/total Score.png"}},{"type":"Button","props":{"y":255,"x":186,"var":"restartBtn","stateNum":"2","skin":"ui/btn_restart.png"}},{"type":"Box","props":{"y":142,"x":189,"var":"scoreNum"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]},{"type":"Button","props":{"y":187,"x":185,"width":184,"var":"scoreSort","skin":"ui/button.png","labelSize":20,"label":"查看分数排名","height":56}}]};}
		]);
		return GameOverUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;
		    this.hammer=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);
		}

		STATICATTR$(HammerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":62,"x":58,"width":98,"var":"hammer","skin":"ui/hammer.png","pivotY":48,"pivotX":52,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};}
		]);
		return HammerUI;
	})(View);
var IndexUI=(function(_super){
		function IndexUI(){
			
		    this.nickName=null;
		    this.playGame=null;

			IndexUI.__super.call(this);
		}

		CLASS$(IndexUI,'ui.IndexUI',_super);
		var __proto__=IndexUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(IndexUI.uiView);
		}

		STATICATTR$(IndexUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Label","props":{"y":158,"x":396,"width":184,"text":"请输入昵称","height":42,"fontSize":30,"color":"#f61512","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"TextInput","props":{"y":211,"x":244.5,"width":311,"var":"nickName","skin":"ui/textinput.png","height":53,"fontSize":20}},{"type":"Button","props":{"y":332,"x":289.5,"width":221,"var":"playGame","skin":"ui/button.png","labelSize":25,"label":"玩游戏","height":68}}]};}
		]);
		return IndexUI;
	})(View);
var StartGameUI=(function(_super){
		function StartGameUI(){
			
		    this.startBtn=null;

			StartGameUI.__super.call(this);
		}

		CLASS$(StartGameUI,'ui.StartGameUI',_super);
		var __proto__=StartGameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StartGameUI.uiView);
		}

		STATICATTR$(StartGameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":35.5,"x":8.5,"width":783,"skin":"ui/help.png","height":529}},{"type":"Button","props":{"y":455,"x":311,"var":"startBtn","stateNum":"2","skin":"ui/btn_start.png"}}]};}
		]);
		return StartGameUI;
	})(View);