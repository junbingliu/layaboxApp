var Util=(function(){
   var f={
       pushArr:function(ARRAY_LEN,arr,array){
            while(true){
                for(var i=0;i<arr.length;i++){
                    if(array.length<ARRAY_LEN){
                        array.push(arr[i])
                    }else{
                        return
                    }
                }
            }  
        },
        totalWidthDraw:function(obj){
            var perWidth,perHeight
            perWidth=(obj.totalWidth-obj.initX*2-(obj.col-1)*obj.interval)/obj.col
            perHeight=(obj.totalHeight-obj.initY*2-(obj.row-1)*obj.interval)/obj.row
            this.perWidthDraw(obj.row,obj.col,obj.initX,obj.initY,perWidth,perHeight,obj.interval,obj.color)
        },
        perWidthDraw:function(row,col,initX,initY,perWidth,perHeight,interval,color){
            for(var j=0;j<row;j++){
                if(j==0){
                    y=initY
                }else if(j>0){
                    y=j*perHeight+interval*j+initY
                }
                for(var i=0;i<col;i++){
                    if(i==0){
                        x=initX
                    }else if(i>0){
                        x=i*perWidth+interval*i+initX
                    }
                    var imgUrl="ui/avatar/"+imgs[0].imgUrl+".jpg"
                    var sp=new Laya.Sprite()
                    playPlace.addChild(sp)
                    sp.loadImage(imgUrl,x,y,perWidth,perHeight)
                    imgs.shift()
                    //画圆形遮罩
                    var mask=new Laya.Sprite()
                    mask.pos(x,y)
                    mask.graphics.drawCircle(perWidth/2,perHeight/2,perWidth/2,"#ffffff")
                    sp.mask=mask
                }
            }
        }
   }
    
    
    return f;
})()