
jQuery(document).ready(function() {
	//code for sort and filter
	jQuery('.yf-accordion-section-title').on('click', function(e){
			e.preventDefault();
			var currentAttrValue = jQuery(this).attr('href');
	 
			if(jQuery(this).is('.yf-active')) {
				yf_close_accordion_section();
			}
			else {
				yf_close_accordion_section();
				jQuery(this).addClass('yf-active');
				jQuery(currentAttrValue).slideDown(300).addClass('yf-open');
			}
	});

  // just for test
  $("button").click(function(){
      $("").hide();
  });

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'a', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

});

function yf_close_accordion_section() {
	jQuery('.yf-accordion .yf-accordion-section-title').removeClass('yf-active');
	jQuery('.yf-accordion .yf-accordion-section-content').slideUp(300).removeClass('yf-open');
}


//code for isotope
	// external js: isotope.pkgd.js




// code for counter up master 

jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});








