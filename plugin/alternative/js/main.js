$( document ).ready( function ( e ) {
	yh_layer_changer('.work','.yh');
} ) ;
function yh_layer_changer(layerArea='.yh-layer-area', buttonClass='.yh-layer-button'){
	$( buttonClass ).click(function(e){
		var currentAttrValue = $(this).attr('href');
		if (!$( currentAttrValue ).is( ".active" )) {
			$(currentAttrValue).animate({'z-index': '1',top: '-45px',left: '30%',width: '70%'}, 'slow');
			$(layerArea+" .active").animate({'z-index': '-1',top: '0',left: '0',width: '30%'}, 'slow');
			$(layerArea+" div").removeClass("active");
			$(currentAttrValue).addClass("active");
		}
	} ) ;
}