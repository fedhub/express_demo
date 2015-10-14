/**
 * Created by swisa on 14/10/2015.
 */
$(document).ready(function(){ // ready event occurs on document ready // onload event occurs when after all the content of the page is loaded (images, ..)
    console.log('hello');
    $( '#button-id' ).click( function() {
        alert('Itay is gay');
        var w = $(document).width(); // what for?? no use
        var h = $(document).height(); // what for?? no use
        var $div_id = $('#div-id');
        $div_id.css({
            'height': '1000px',
            'width':'1000px'
        });
    });

});