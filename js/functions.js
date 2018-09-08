
    
    /* --------------------------------------------------------
	Components
    -----------------------------------------------------------*/
    (function(){
        /* Textarea */
	if($('.auto-size')[0]) {
	    $('.auto-size').autosize();
	}

        //Select
	if($('.select')[0]) {
	    $('.select').selectpicker();
	}
        
        //Sortable
        if($('.sortable')[0]) {
	    $('.sortable').sortable();
	}
	
        //Tag Select
	if($('.tag-select')[0]) {
	    $('.tag-select').chosen();
	}
        
        /* Tab */
	if($('.tab')[0]) {
	    $('.tab a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	    });
	}
        

        //Popover
    	if($('.pover')[0]) {
    	    $('.pover').popover();
    	} 
    })();

jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
   });
});

jQuery(document).ready(function(){
	
    $("#TudoAndroid").hover(function(){
        $('#fh5co-header').css("background-color", "#D9EBBE");
        }, function(){
        $('#fh5co-header').css("background-color", "#fff");
    });
		
    $("#TudoWindows").hover(function(){
        $('#fh5co-header').css("background-color", "#C4E2FF");
        }, function(){
        $('#fh5co-header').css("background-color", "#fff");
    });
		
    $("#TudoApple").hover(function(){
        $('#fh5co-header').css("background-color", "#F0EFEF");
        }, function(){
        $('#fh5co-header').css("background-color", "#fff");
    });
		
    $("#TudoPlanos").hover(function(){
        $('#fh5co-header').css("background-color", "#F9DFB8");
        }, function(){
        $('#fh5co-header').css("background-color", "#fff");
    });
	
	
});

