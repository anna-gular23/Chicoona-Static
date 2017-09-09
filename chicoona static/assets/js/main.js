Parallax Effect
$(function(){
    
    //Cache the window object
    var $window = $(window);
    
    
    //Parallax Background effekt
    $('main[data-type="background"]').each(function() {
    
        var $bgobj= $(this); //assigning the object
    
        $(window).scroll(function(){
   
            //scroll the background at var speed
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
    
            //Put together the final position
            var coords = '50% ' + yPos + 'px';
   
            //Move the background
            $bgobj.css({backgroundPosition: "coords"});
        });
      });
    
});

