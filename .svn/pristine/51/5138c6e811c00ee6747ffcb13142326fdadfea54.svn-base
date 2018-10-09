import $ from 'jquery'
import {} from '../consts';

export function getActiveArray(url,callBack) {
    return (dispatch, getState)=> {
        $.post(url,{},function (ret) {
            if(ret.state=='ok'){
                console.log("====================123444555=",ret);
                dispatch({type: "active_List",activeJoinList:ret.activeJoinList,activeAddList:ret.activeAddList,winningList:ret.winningList});
            }
        }, 'json');
    }
}
export function upLoadImg(url,img,callback) {
    return (dispatch, getState)=> {
        var reader = new FileReader();
        reader.onload = function(event){
            var image = new Image();
            image.onload = function (imageEvent){
                // Resize the image
                var canvas = document.createElement( 'canvas' ),
                  max_size = 600,
                  width = image.width,
                  height = image.height;
                if (width > height) {
                  if (width > max_size) {
                    height *= max_size / width;
                    width = max_size;
                  }
                } else {
                  if (height > max_size) {
                    width *= max_size / height;
                    height = max_size;
                  }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext( '2d' ).drawImage( image, 0, 0, width, height );
                var dataUrl = canvas.toDataURL( 'image/jpeg' );
                $.post( url, { type: 'json', imgData: JSON.stringify( dataUrl ) }, function (ret){
                  if (callback) {
                    callback( ret );
                  }
                }, 'json' );
            }

            image.src = event.target.result;

        }
        if(img){
            reader.readAsDataURL(img);
        }
    }
}