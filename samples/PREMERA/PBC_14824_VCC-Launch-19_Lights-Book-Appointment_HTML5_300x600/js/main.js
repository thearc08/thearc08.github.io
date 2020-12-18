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

    var light1 = "M67.3,451.7L67.3,451.7L67.3,451.7L67.3,451.7z";
    var light2 = "M102.5,455.4L102.5,455.4L102.5,455.4L102.5,455.4z";

    var path1_1 = "M67.3,451.7l-182.5-641.3l178.9-15.2L67.3,451.7z";
    var path2_1 = "M186-174.2h146.6L102.5,455.4L186-174.2z";

    var path1_2 = "M72.1,450.8L501.4,36.6l88.7,71.7L72.1,450.8z";
    var path2_2 = "M-268.6,38.5l105.3-57.7l265.2,471L-268.6,38.5z";

    var path1_3 = "M72.1,450.8L-269.3-53.8l103.8-39.4L72.1,450.8z";
    var path2_3 = "M529.8-25.1l83,61.8l-511,415.2L529.8-25.1z";

    var pathMask_1 = "M-172.7,55.2l-10.1-20.4V10.7L-169.9-4l36-13L67.6,451.6l-3.7-0.8l3.7-0.2L-172.7,55.2z";
    var pathMask_2 = "M-172.7,55.2l-10.1-20.4V10.7L-169.9-4L637-17L67.6,451.6l-3.7-0.8l3.7-0.2L-172.7,55.2z";

    // MorphSVGPlugin.convertToPath("line");

    tt
    	.set('#light_left', {transformOrigin: '50% 50%'})
    	.set('#light_right', {transformOrigin: '50% 50%'})

    	.to('#light1', 1, {morphSVG: path1_1, ease: Power1.easeInOut})
    	.to('#light2', 1, {morphSVG: path2_1, ease: Power1.easeInOut}, "-=1")

    	.to('#light_left', 1, {rotation: 60, ease: Power1.easeInOut}, "-=0.5")
    	.to('#light_right', 1, {rotation: -60, ease: Power1.easeInOut}, "-=1")

    	.to('#light1', 1, {morphSVG: path1_2, ease: Power1.easeInOut}, "-=0.8")
    	.to('#light2', 1, {morphSVG: path2_2, ease: Power1.easeInOut}, "-=1")

    	.to('#light_left', 2, {rotation: 0, ease: Power1.easeInOut})
    	.to('#light_right', 2, {rotation: 20, ease: Power1.easeInOut}, "-=2")
    	.to('#light1', 2, {morphSVG: {shape: path1_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
    	.to('#light2', 2, {morphSVG: {shape: path2_3, shapeIndex: 3}, ease: Power1.easeInOut}, "-=2")
    	.to('#text1_mask', 1.2, {morphSVG: {shape: pathMask_2, shapeIndex: 0}, ease: Power0.easeNone}, "-=1.5")

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
    	.to('#text1_mask', 1.4, {morphSVG: {shape: pathMask_1, shapeIndex: 0}, ease: Power0.easeNone}, "-=1.8")

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