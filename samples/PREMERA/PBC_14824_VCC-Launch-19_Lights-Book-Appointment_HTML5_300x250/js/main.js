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

    tt.timeScale(1.4);

    var light1 = "M60.13,128.8v-1.57l0.88,0.39L60.13,128.8z";
    var light2 = "M83.1,128.35l0.43-0.18l0.35,0.63L83.1,128.35z";

    var path1_1 = "M56.13,128.8L-63.11-130.13l119.49-19.44L56.13,128.8z";
    var path2_1 = "M150-145.28l88.84,29.32L86.89,128.8L150-145.28z";

    var path1_2 = "M60.13,128.8l118.13-232.06l73.78,32.74L60.13,128.8z";
    var path2_2 = "M-111.55-59.27l69.41-38.5L83.89,128.8L-111.55-59.27z";

    var path1_3 = "M59.76,129.19L-166.42,0.15l36.21-72.14L59.76,129.19z";
    var path2_3 = "M618.97,105.33v58.63L83.89,128.8L618.97,105.33z";

    var pathMask_1 = "M-520.17,25.9l-10.1-20.35v-24.21l12.9-14.66h28.34L87.59,129.64l-3.7-0.84l3.7-0.16L-520.17,25.9z";
    var pathMask_2 = "M-489.04-34.32l696.61-319.59l631.27-48.86l21.5,450.49l-17.59,50.81L87.59,129.64l-3.7-0.84l3.7-0.16L-489.04-34.32z";

    // MorphSVGPlugin.convertToPath("line");

    tt
    	.set('#light_left', {transformOrigin: '50% 50%'})
    	.set('#light_right', {transformOrigin: '50% 50%'})

    	.to('#light1', 1, {morphSVG: path1_1, ease: Power1.easeInOut})
    	.to('#light2', 1, {morphSVG: path2_1, ease: Power1.easeInOut}, "-=1")

    	.to('#light_left', 1, {rotation: 60, ease: Power1.easeInOut}, "-=0.5")
    	.to('#light_right', 1, {rotation: -60, ease: Power1.easeInOut}, "-=1")

    	.to('#light1', 1, {morphSVG: path1_2, ease: Power1.easeInOut}, "-=1")
    	.to('#light2', 1, {morphSVG: path2_2, ease: Power1.easeInOut}, "-=1")

    	.to('#light_left', 2, {rotation: -20, ease: Power1.easeInOut})
    	.to('#light_right', 2, {rotation: 50, ease: Power1.easeInOut}, "-=2")
    	.to('#light1', 2, {morphSVG: {shape: path1_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
    	.to('#light2', 2, {morphSVG: {shape: path2_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
    	.to('#text1_mask', 2, {morphSVG: {shape: pathMask_2, shapeIndex: 0}, ease: Power0.easeNone}, "-=2.1")

    	.to('#light1', 2, {morphSVG: {shape: path1_2, shapeIndex: 3}, ease: Power1.easeInOut})
    	.to('#light_left', 2, {rotation: 60, ease: Power1.easeInOut}, "-=2")
    	
    	.to('#light2', 2, {morphSVG: {shape: path2_2, shapeIndex: 3}, ease: Power1.easeInOut}, "-=1.5")
    	.to('#light_right', 2, {rotation: -60, ease: Power1.easeInOut}, "-=2")

    	.to('#light_left', 2, {rotation: -20, ease: Power1.easeInOut})
    	.to('#light_right', 2, {rotation: 50, ease: Power1.easeInOut}, "-=2")
    	.to('#light1', 2, {morphSVG: {shape: path1_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
    	.to('#light2', 2, {morphSVG: {shape: path2_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")

		.to('#light1', 2, {morphSVG: {shape: path1_2, shapeIndex: 3}, ease: Power1.easeInOut})
    	.to('#light_left', 2, {rotation: 60, ease: Power1.easeInOut}, "-=2")
    	.to('#light2', 2, {morphSVG: {shape: path2_2, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
    	.to('#light_right', 2, {rotation: -60, ease: Power1.easeInOut}, "-=2")
    	.to('#text1_mask', 1.8, {morphSVG: {shape: pathMask_1, shapeIndex: 0}, ease: Power0.easeNone}, "-=1.8")

    	// .to('#light1', 1, {morphSVG: light1, ease: Power1.easeInOut}, "-=0.3")
    	// .to('#light2', 1, {morphSVG: light2, ease: Power1.easeInOut}, "-=1")

    	// .to('#light_left', 1, {rotation: 0, ease: Power1.easeInOut}, "-=0.5")
    	// .to('#light_right', 1, {rotation: 0, ease: Power1.easeInOut}, "-=1")

    	.to(['#bg','#mask','#lights','#light_left','#light_right'], 1, {opacity: 0, ease: Power1.easeInOut}, "-=0.5")
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