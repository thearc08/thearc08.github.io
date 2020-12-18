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
        "text1_3.png",
        "text1_4.png",
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
        .set('#badge', {rotation: 25, x: -150, y: -250, transformOrigin: '50% -50%'})

        .to('#badge', 1.5, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut})
    	.staggerTo(['#text1_1','#text1_2','#text1_3','#text1_4'], 1, {opacity: 1, x: 200, ease: Power1.easeInOut}, 0.4, "-=1")

        .to('#badge', 0.6, {rotation: 2, x: 0, y: 0, ease: Power1.easeInOut}, "-=1.2")
        .to('#badge', 0.6, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut}, "-=0.6")

    	.to(['#bg','#badge','#text1_1','#text1_2','#text1_3','#text1_4'], 1, {opacity: 0, ease: Power1.easeInOut}, "+=2")
    	.to('#bg2', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")
    	.to('#text2', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")
    	.to('#logo', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")

        .to('#text2', 1, {opacity: 0, ease: Power1.easeInOut}, "+=2.5")
        .to('#text3', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")
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