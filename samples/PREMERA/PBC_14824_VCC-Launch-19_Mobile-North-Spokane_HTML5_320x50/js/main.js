var _btnExit = document.getElementById('btn-exit'),
    _loadedImages=0,tt,
    _imageArray=[
		"bg.png",
		"cta.png",
		"logo.png",
		"text1.png"
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

    tt
        .to('#text1', .7, {opacity: 1, ease: Power1.easeInOut})
        .to('#logo', .7, {opacity: 1, ease: Power1.easeInOut}, "-=.7")
        .to('#text1', .7, {opacity: 0, ease: Power1.easeInOut}, "+=2")
        .to('#cta', .7, {opacity: 1, ease: Power1.easeInOut})

        .to(['#cta','#text1'], .7, {opacity: 0, ease: Power1.easeInOut}, "+=1")

        .to('#text1', .7, {opacity: 1, ease: Power1.easeInOut})
        .to('#logo', .7, {opacity: 1, ease: Power1.easeInOut}, "-=.7")
        .to('#text1', .7, {opacity: 0, ease: Power1.easeInOut}, "+=2")
        .to('#cta', .7, {opacity: 1, ease: Power1.easeInOut})

        .to(['#cta','#text1'], .7, {opacity: 0, ease: Power1.easeInOut}, "+=1")

        .to('#text1', .7, {opacity: 1, ease: Power1.easeInOut})
        .to('#logo', .7, {opacity: 1, ease: Power1.easeInOut}, "-=.7")
        .to('#text1', .7, {opacity: 0, ease: Power1.easeInOut}, "+=2")
        .to('#cta', .7, {opacity: 1, ease: Power1.easeInOut})
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