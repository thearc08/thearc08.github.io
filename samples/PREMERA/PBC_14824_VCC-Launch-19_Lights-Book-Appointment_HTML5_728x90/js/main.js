var _btnExit = document.getElementById('btn-exit'),
    _loadedImages=0,tt,
    _imageArray=[
		"bg.png",
		"bg2.png",
		"cta.png",
		"dots.png",
		"light_left.png",
		"light_right.png",
		"logo.png",
		"text1.png",
		"text2.png"
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

    tt.timeScale(1.5);

    var light1 = "M506.1,58.6L506.1,58.6L506.1,58.6L506.1,58.6z";
    var light2 = "M538.35,45L538.35,45L538.35,45L538.35,45z";

    var path1_1 = "M506.1,58.6L-128.59-61.35l2.72-139.78L506.1,58.6z";
    var path2_1 = "M704.77-457.12l139.2,25.65L538.35,45L704.77-457.12z";

    var path1_2 = "M506.1,58.6L384.44-350.85l63.03-15.39L506.1,58.6z";
    var path2_2 = "M244.22-281.53l63.26-25.35L538.35,45L244.22-281.53z";

    var path1_3 = "M506.1,58.6l-719.71,258.23l-28.58-92.35L506.1,58.6z";
    var path2_3 = "M704.77-457.12l139.2,25.65L538.35,45L704.77-457.12z";

    var pathMask_1 = "M514.16,52.98l-725.57,158.31l63.76-23.58L514.16,52.98z";
    var pathMask_2 = "M514.16,52.98l-725.57,158.31L-61.9-270.23L514.16,52.98z";

    // MorphSVGPlugin.convertToPath("line");

    tt
        .set('#light_left', {transformOrigin: '50% 50%', rotation: -50})
        .set('#light_right', {transformOrigin: '50% 50%'})

        .to('#light1', 1, {morphSVG: path1_1, ease: Power1.easeInOut})
        .to('#light2', 1, {morphSVG: path2_1, ease: Power1.easeInOut}, "-=1")

        .to('#light_left', 1, {rotation: 20, ease: Power1.easeInOut}, "-=0.5")
        .to('#light_right', 1, {rotation: -60, ease: Power1.easeInOut}, "-=1")

        .to('#light1', 1, {morphSVG: path1_2, ease: Power1.easeInOut}, "-=1")
        .to('#light2', 1, {morphSVG: path2_2, ease: Power1.easeInOut}, "-=1")

        .to('#light_left', 1.5, {rotation: -90, ease: Power1.easeInOut})
        .to('#light_right', 1.5, {rotation: 10, ease: Power1.easeInOut}, "-=1.5")
        .to('#light1', 1.5, {morphSVG: {shape: path1_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=1.5")
        .to('#light2', 1.5, {morphSVG: {shape: path2_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=1.5")

        .to('#light1', 1, {morphSVG: {shape: path1_2, shapeIndex: 3}, ease: Power1.easeInOut})
        .to('#light2', 1, {morphSVG: {shape: path2_2, shapeIndex: 3}, ease: Power1.easeInOut}, "-=1")
        .to('#light_left', 1, {rotation: 0, ease: Power1.easeInOut}, "-=1")
        .to('#light_right', 1, {rotation: -60, ease: Power1.easeInOut}, "-=1")

        .to('#text1_mask', 0.8, {morphSVG: {shape: pathMask_2, shapeIndex: 0}, ease: Power0.easeNone}, "-=0.8")

        .to('#light1', 2, {morphSVG: {shape: path1_2, shapeIndex: 3}, ease: Power1.easeInOut})
        .to('#light_left', 2, {rotation: 20, ease: Power1.easeInOut}, "-=2")
        
        .to('#light2', 2, {morphSVG: {shape: path2_2, shapeIndex: 3}, ease: Power1.easeInOut}, "-=1.5")
        .to('#light_right', 2, {rotation: -60, ease: Power1.easeInOut}, "-=2")

        .to('#light_left', 2, {rotation: -90, ease: Power1.easeInOut}, "-=1.5")
        .to('#light_right', 2, {rotation: 10, ease: Power1.easeInOut}, "-=2")
        .to('#light1', 2, {morphSVG: {shape: path1_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
        .to('#light2', 2, {morphSVG: {shape: path2_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")

        .to('#light1', 2, {morphSVG: {shape: path1_2, shapeIndex: 3}, ease: Power1.easeInOut})
        .to('#light_left', 2, {rotation: 20, ease: Power1.easeInOut}, "-=2")
        .to('#light2', 2, {morphSVG: {shape: path2_2, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
        .to('#light_right', 2, {rotation: -60, ease: Power1.easeInOut}, "-=2")
        
        .to('#light_left', 2, {rotation: -90, ease: Power1.easeInOut}, "-=.5")
        .to('#light_right', 2, {rotation: 10, ease: Power1.easeInOut}, "-=2")
        .to('#light1', 2, {morphSVG: {shape: path1_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
        .to('#light2', 2, {morphSVG: {shape: path2_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
        .to('#text1_mask', 1.2, {morphSVG: {shape: pathMask_1, shapeIndex: 0}, ease: Power0.easeNone}, "-=1.8")

        .to('#light1', 2, {morphSVG: {shape: path1_2, shapeIndex: 3}, ease: Power1.easeInOut})
        .to('#light_left', 2, {rotation: 20, ease: Power1.easeInOut}, "-=2")
        .to('#light2', 2, {morphSVG: {shape: path2_2, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
        .to('#light_right', 2, {rotation: -60, ease: Power1.easeInOut}, "-=2")

        // .to('#light1', 1, {morphSVG: light1, ease: Power1.easeInOut}, "-=0.3")
        // .to('#light2', 1, {morphSVG: light2, ease: Power1.easeInOut}, "-=1")

        .to(['#bg','#mask','#lights','#light_left','#light_right'], 1, {opacity: 0, ease: Power1.easeInOut}, "-=1")
        .to('#bg2', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")
        .to('#text2', 1, {opacity: 1, ease: Power1.easeInOut}, "-=0.5")
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