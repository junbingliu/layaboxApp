var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var BackgroundUI=(function(_super){
		function BackgroundUI(){
			
		    this.light_1=null;
		    this.light_2=null;
		    this.prizeName=null;
		    this.message=null;

			BackgroundUI.__super.call(this);
		}

		CLASS$(BackgroundUI,'ui.BackgroundUI',_super);
		var __proto__=BackgroundUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BackgroundUI.uiView);

		}

		BackgroundUI.uiView={"type":"View","props":{"width":640,"height":1698},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/bg.jpg"}},{"type":"Image","props":{"y":440,"x":30,"skin":"ui/cont-bg.png"}},{"type":"Text","props":{"y":477,"x":320,"width":477,"var":"prizeName","pivotY":23,"pivotX":238,"height":49,"fontSize":50,"color":"#f1af06","align":"center"}},{"type":"Image","props":{"y":442,"x":63,"skin":"ui/light-1.png"},"compId":287},{"type":"Image","props":{"y":544,"x":33,"skin":"ui/light-2.png"},"compId":288},{"type":"Image","props":{"y":1163,"x":30,"skin":"ui/hint.png"}},{"type":"Image","props":{"y":1269,"x":26,"skin":"ui/rule.png"}},{"type":"Text","props":{"y":1314,"x":36,"wordWrap":true,"width":567,"text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.","height":258,"fontSize":30,"color":"#f8ca15"}},{"type":"Text","props":{"y":1188,"x":136,"width":215,"var":"message","height":39,"fontSize":25,"color":"#f3e008","align":"left"}}],"animations":[{"nodes":[{"target":287,"keyframes":{"x":[{"value":63,"tweenMethod":"linearNone","tween":true,"target":287,"key":"x","index":0}],"skin":[{"value":"ui/light-1.png","tweenMethod":"linearNone","tween":false,"target":287,"key":"skin","index":0},{"value":"ui/light-10.png","tweenMethod":"linearNone","tween":false,"target":287,"key":"skin","index":20},{"value":"ui/light-1.png","tweenMethod":"linearNone","tween":false,"target":287,"key":"skin","index":39}]}}],"name":"light_1","id":2,"frameRate":24,"action":0},{"nodes":[{"target":288,"keyframes":{"x":[{"value":33,"tweenMethod":"linearNone","tween":true,"target":288,"key":"x","index":0}],"skin":[{"value":"ui/light-2.png","tweenMethod":"linearNone","tween":false,"target":288,"key":"skin","index":0},{"value":"ui/light-20.png","tweenMethod":"linearNone","tween":false,"target":288,"key":"skin","index":20},{"value":"ui/light-2.png","tweenMethod":"linearNone","tween":false,"target":288,"key":"skin","index":39}]}}],"name":"light_2","id":3,"frameRate":24,"action":0}]};
		return BackgroundUI;
	})(View);
var Game12UI=(function(_super){
		function Game12UI(){
			
		    this.roll=null;
		    this.button=null;

			Game12UI.__super.call(this);
		}

		CLASS$(Game12UI,'ui.Game12UI',_super);
		var __proto__=Game12UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(Game12UI.uiView);

		}

		Game12UI.uiView={"type":"View","props":{"width":640,"height":1698},"child":[{"type":"Box","props":{"y":568,"x":58,"name":"item0"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":568,"x":189,"name":"item1"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":568,"x":320,"name":"item2"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":568,"x":451,"name":"item3"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":699,"x":58,"name":"item11"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":699,"x":451,"name":"item4"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":830,"x":58,"name":"item10"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":830,"x":451,"name":"item5"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":961,"x":58,"name":"item9"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":961,"x":189,"name":"item8"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":961,"x":320,"name":"item7"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":961,"x":451,"name":"item6"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":130,"skin":"ui/img-bg-1.png","name":"wight","height":130}},{"type":"Image","props":{"y":0,"x":0,"width":130,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":130}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":26,"width":76,"skin":"ui/Image.png","name":"avatar","height":76},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":76,"renderType":"mask","height":75},"child":[{"type":"Circle","props":{"y":37,"x":39,"radius":36,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Image","props":{"y":829,"x":321,"width":218,"skin":"ui/btn-2.png","rotation":360,"pivotY":109,"pivotX":109,"height":218},"compId":97},{"type":"Image","props":{"y":730,"x":222,"width":198,"var":"button","skin":"ui/btn-1-1.png","height":198}}],"animations":[{"nodes":[{"target":97,"keyframes":{"y":[{"value":829,"tweenMethod":"linearNone","tween":true,"target":97,"key":"y","index":0}],"x":[{"value":321,"tweenMethod":"linearNone","tween":true,"target":97,"key":"x","index":0}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":97,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":97,"key":"rotation","index":100}],"pivotY":[{"value":109,"tweenMethod":"linearNone","tween":true,"target":97,"key":"pivotY","index":0}],"pivotX":[{"value":109,"tweenMethod":"linearNone","tween":true,"target":97,"key":"pivotX","index":0}]}}],"name":"roll","id":1,"frameRate":24,"action":0}]};
		return Game12UI;
	})(View);
var Game24UI=(function(_super){
		function Game24UI(){
			
		    this.roll=null;
		    this.button=null;

			Game24UI.__super.call(this);
		}

		CLASS$(Game24UI,'ui.Game24UI',_super);
		var __proto__=Game24UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(Game24UI.uiView);

		}

		Game24UI.uiView={"type":"View","props":{"width":640,"height":1698},"child":[{"type":"Box","props":{"y":572,"x":63,"name":"item0"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":572,"x":166,"name":"item1"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":572,"x":269,"name":"item2"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":572,"x":372,"name":"item3"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":572,"x":475,"name":"item4"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":675,"x":63,"name":"item9"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":675,"x":166,"name":"item8"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":675,"x":269,"name":"item7"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":675,"x":372,"name":"item6"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":675,"x":475,"name":"item5"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":778,"x":63,"name":"item10"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":778,"x":166,"name":"item11"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":778,"x":372,"name":"item12"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":778,"x":475,"name":"item13"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":881,"x":63,"name":"item18"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":881,"x":166,"name":"item17"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":881,"x":269,"name":"item16"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":881,"x":372,"name":"item15"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":881,"x":475,"name":"item14"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":984,"x":63,"name":"item19"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":984,"x":166,"name":"item20"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":984,"x":269,"name":"item21"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":984,"x":372,"name":"item22"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":984,"x":475,"name":"item23"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":102,"skin":"ui/img-bg-1.png","name":"wight","height":102}},{"type":"Image","props":{"y":0,"x":0,"width":102,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":102}},{"type":"Text","props":{"y":37,"x":43,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":16,"x":21,"width":60,"skin":"ui/Image.png","name":"avatar","height":60},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":60,"renderType":"mask","height":60},"child":[{"type":"Circle","props":{"y":30,"x":30,"radius":30,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Image","props":{"y":831,"x":320,"width":90,"skin":"ui/btn-2.png","rotation":360,"pivotY":45,"pivotX":45,"height":90},"compId":237},{"type":"Image","props":{"y":790,"x":279,"width":82.5,"var":"button","skin":"ui/btn-1-1.png","height":82.5}}],"animations":[{"nodes":[{"target":237,"keyframes":{"x":[{"value":320,"tweenMethod":"linearNone","tween":true,"target":237,"key":"x","index":0}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":237,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":237,"key":"rotation","index":100}]}}],"name":"roll","id":1,"frameRate":24,"action":0}]};
		return Game24UI;
	})(View);
var Game8UI=(function(_super){
		function Game8UI(){
			
		    this.roll=null;
		    this.button=null;

			Game8UI.__super.call(this);
		}

		CLASS$(Game8UI,'ui.Game8UI',_super);
		var __proto__=Game8UI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(Game8UI.uiView);

		}

		Game8UI.uiView={"type":"View","props":{"width":640,"height":1698},"child":[{"type":"Box","props":{"y":566,"x":58,"name":"item0"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":172,"skin":"ui/img-bg-1.png","name":"wight","height":172}},{"type":"Image","props":{"y":0,"x":0,"width":172,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":172}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":33,"width":109,"skin":"ui/Image.png","name":"avatar","height":109},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":109,"renderType":"mask","height":109},"child":[{"type":"Circle","props":{"y":54,"x":55,"radius":52,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":566,"x":235,"name":"item1"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":172,"skin":"ui/img-bg-1.png","name":"wight","height":172}},{"type":"Image","props":{"y":0,"x":0,"width":172,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":172}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":33,"width":109,"skin":"ui/Image.png","name":"avatar","height":109},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":109,"renderType":"mask","height":109},"child":[{"type":"Circle","props":{"y":54,"x":55,"radius":52,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":566,"x":412,"name":"item2"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":172,"skin":"ui/img-bg-1.png","name":"wight","height":172}},{"type":"Image","props":{"y":0,"x":0,"width":172,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":172}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":33,"width":109,"skin":"ui/Image.png","name":"avatar","height":109},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":109,"renderType":"mask","height":109},"child":[{"type":"Circle","props":{"y":54,"x":55,"radius":52,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":743,"x":58,"name":"item7"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":172,"skin":"ui/img-bg-1.png","name":"wight","height":172}},{"type":"Image","props":{"y":0,"x":0,"width":172,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":172}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":33,"width":109,"skin":"ui/Image.png","name":"avatar","height":109},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":109,"renderType":"mask","height":109},"child":[{"type":"Circle","props":{"y":54,"x":55,"radius":52,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":743,"x":412,"name":"item3"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":172,"skin":"ui/img-bg-1.png","name":"wight","height":172}},{"type":"Image","props":{"y":0,"x":0,"width":172,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":172}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":33,"width":109,"skin":"ui/Image.png","name":"avatar","height":109},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":109,"renderType":"mask","height":109},"child":[{"type":"Circle","props":{"y":54,"x":55,"radius":52,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":920,"x":58,"name":"item6"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":172,"skin":"ui/img-bg-1.png","name":"wight","height":172}},{"type":"Image","props":{"y":0,"x":0,"width":172,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":172}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":33,"width":109,"skin":"ui/Image.png","name":"avatar","height":109},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":109,"renderType":"mask","height":109},"child":[{"type":"Circle","props":{"y":54,"x":55,"radius":52,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":920,"x":235,"name":"item5"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":172,"skin":"ui/img-bg-1.png","name":"wight","height":172}},{"type":"Image","props":{"y":0,"x":0,"width":172,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":172}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":33,"width":109,"skin":"ui/Image.png","name":"avatar","height":109},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":109,"renderType":"mask","height":109},"child":[{"type":"Circle","props":{"y":54,"x":55,"radius":52,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":920,"x":412,"name":"item4"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":172,"skin":"ui/img-bg-1.png","name":"wight","height":172}},{"type":"Image","props":{"y":0,"x":0,"width":172,"visible":false,"skin":"ui/img-bg-2.png","name":"glow","height":172}},{"type":"Text","props":{"y":50,"x":56,"visible":false,"text":"text","name":"nickName"}},{"type":"Image","props":{"y":25,"x":33,"width":109,"skin":"ui/Image.png","name":"avatar","height":109},"child":[{"type":"Sprite","props":{"y":1,"x":0,"width":109,"renderType":"mask","height":109},"child":[{"type":"Circle","props":{"y":54,"x":55,"radius":52,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Image","props":{"y":831,"x":323,"width":160,"skin":"ui/btn-1.png","rotation":360,"pivotY":80,"pivotX":80,"height":160},"compId":64},{"type":"Image","props":{"y":758,"x":250,"width":145,"var":"button","skin":"ui/btn-1-1.png","height":145}}],"animations":[{"nodes":[{"target":64,"keyframes":{"width":[{"value":160,"tweenMethod":"linearNone","tween":true,"target":64,"key":"width","index":0}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":64,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":64,"key":"rotation","index":100}],"height":[{"value":160,"tweenMethod":"linearNone","tween":true,"target":64,"key":"height","index":0}]}}],"name":"roll","id":1,"frameRate":24,"action":0}]};
		return Game8UI;
	})(View);
var MaskerUI=(function(_super){
		function MaskerUI(){
			

			MaskerUI.__super.call(this);
		}

		CLASS$(MaskerUI,'ui.MaskerUI',_super);
		var __proto__=MaskerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MaskerUI.uiView);

		}

		MaskerUI.uiView={"type":"View","props":{"width":640,"height":1698},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":640,"height":1698,"alpha":0.5},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":1,"height":1698,"fillColor":"#170707"}}]}]};
		return MaskerUI;
	})(View);
var WinningUI=(function(_super){
		function WinningUI(){
			
		    this.button=null;
		    this.avatar=null;
		    this.prizeName=null;

			WinningUI.__super.call(this);
		}

		CLASS$(WinningUI,'ui.WinningUI',_super);
		var __proto__=WinningUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(WinningUI.uiView);

		}

		WinningUI.uiView={"type":"View","props":{"width":600,"height":750},"child":[{"type":"Image","props":{"y":375,"x":299,"width":595,"skin":"ui/winning-bg.png","pivotY":366,"pivotX":297,"height":732}},{"type":"Image","props":{"y":576,"x":191,"var":"button","skin":"ui/ico-btn.png"}},{"type":"Image","props":{"y":238,"x":256,"width":97,"var":"avatar","skin":"ui/Image.png","height":97}},{"type":"Text","props":{"y":444,"x":152,"text":"幸运儿！恭喜您抽中了","fontSize":30,"color":"#f9f6f6","bold":true}},{"type":"Text","props":{"y":518,"x":313,"width":322,"var":"prizeName","pivotY":27,"pivotX":161,"height":49,"fontSize":35,"color":"#f1c309","bold":true,"align":"center"}},{"type":"Text","props":{"y":600,"x":242,"text":"再抽一次","fontSize":30,"color":"#f6f0da","bold":true}}]};
		return WinningUI;
	})(View);