$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href');
    if(dest !== undefined && dest !== '') {
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top
        }, 500
        );
    }
    return false;
});
