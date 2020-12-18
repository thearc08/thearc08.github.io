var _btnExit = document.getElementById('btn-exit'),
    _loadedImages=0,tt,
    _imageArray=[
        "badge.png",
        "bg.png",
        "bg2.png",
        "cta.png",
        "logo.png",
        "text1_1.png",
        "text1_2.png",
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
	if (!EB.isInitialized()) {
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, init);
	} else {
		init();
	}
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

    tt.timeScale(1.4);

    // MorphSVGPlugin.convertToPath("line");

    tt
        .set('#badge', {x: -150, y: -150, transformOrigin: '50% -50%'})
        .set('#tag', {x: 100, y: -110})

        .to('#tag', 1, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut})
        .staggerTo('#text1_1', 1, {opacity: 1, y: 100, ease: Power1.easeInOut}, 0.2, "-=1")
        .staggerTo('#text1_2', 1, {opacity: 1, y: -100, ease: Power1.easeInOut}, 0.2, "-=1")

        .to(['#tag','#text1_1','#text1_2'], 1, {opacity: 0, ease: Power1.easeInOut}, "+=2.25")

        .to('#badge', 1.5, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut})

        .to('#badge', 0.6, {rotation: -1, x: 0, y: 0, ease: Power1.easeInOut}, "-=0.1")
        .to('#badge', 0.6, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut}, "-=0.1")

        .to('#text2', 1, {opacity: 1, ease: Power1.easeInOut}, "-=1.5")

        .to(['#bg','#badge','#text2'], 1, {opacity: 0, ease: Power1.easeInOut}, "+=2.25")
    	
        .to('#bg2', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")
    	.to('#text3', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")
    	.to('#logo', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")
    	.to('#cta', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")
    ;
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){
        TweenMax.to(['#cta','#glow'],.5,{scale:1.04, transformOrigin: "80% 80%", ease: Elastic.easeOut.config(1.2, 0.4)});
        TweenMax.to('#glow', .3, {opacity: 0.8, ease: Power1.easeInOut})
    });
    _btnExit.addEventListener('mouseout', function(){
        TweenMax.to(['#cta','#glow'],.5,{scale:1, transformOrigin: "80% 80%", ease: Elastic.easeOut.config(1.2, 0.4)});
        TweenMax.to('#glow', .3, {opacity: 0, ease: Power1.easeInOut})
    });
}