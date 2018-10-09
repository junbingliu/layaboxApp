export function getOriginUrl(url){
  url = url.replace( /_[0-9]+(X|x)[0-9]+/, "" );
  return url;
}

export function openImages(images){
  images = images.map( (image) => getOriginUrl( image ) )
  if(typeof WeixinJSBridge !='undefined'){
    WeixinJSBridge.invoke( "imagePreview", {
      "urls": images,
      "current": images[0]
    } );
  }


}