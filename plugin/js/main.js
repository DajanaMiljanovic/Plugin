$(document).ready(function() {
    (function($){
    $.fn.slideShow = function() {
        $('.wrapper img:last-child').prependTo('.wrapper');

        $('a').on('click', function(){
        	var clicked = $(this).data('direction');
        	slider(clicked);
        });

        function slider(direction){
	        if (direction == 'next') {
		        $('.wrapper img:first-child').appendTo('.wrapper');
	            $('.wrapper').css('left', '+=200px').animate({'left': '-=200px'});
	        } else {
	            $('.wrapper img:last-child').prependTo('.wrapper');
	            $('.wrapper').css('left', '-=200px').animate({'left': '+=200px'});
	        }
        };

    };
    })(jQuery);

});
