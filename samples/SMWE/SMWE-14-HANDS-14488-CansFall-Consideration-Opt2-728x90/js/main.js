var _btnExit = document.getElementById('btn-exit'),
    _loadedImages=0,tt,
    _imageArray=[
        "can.png",
        "cta.png",
        "grass.jpg",
        "legal.png",
        "text1.png",
        "text2.png",
        "text3.png"
    ];

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = 'img/'+_imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;             
    if(_loadedImages == _imageArray.length){ initEB();} 
}

function initEB() {
    (!EB.isInitialized()) ? EB.addEventListener(EBG.EventName.EB_INITIALIZED, init) : init();
}

function init(){ 
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "css/style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);

    initAnimations();

    _btnExit.addEventListener('click',function(){
        EB.clickthrough();
    });
}

function initAnimations(){
    tt = new TimelineMax();

    tt
         .staggerTo(['.text1','.text2','.text3'],1,{opacity:1, ease: Power1.easeInOut}, 0.2)
        .from('#cta',0.7, {opacity:0, scale:0.5,transformOrigin: "45% 50%", ease: Back.easeOut.config(1.7),  onComplete:actionsButton}, "-=0.2");

}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){
       
        TweenMax.to('#cta',.5,{scale:1.04, transformOrigin: "45% 50%", ease: Elastic.easeOut.config(1.2, 0.4)});
    });
    _btnExit.addEventListener('mouseout', function(){
       
        TweenMax.to('#cta',.5,{scale:1, transformOrigin: "45% 50%", ease: Elastic.easeOut.config(1.2, 0.4)});
    });
    
   
    
}