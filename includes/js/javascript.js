/**
 * Created by swisa on 14/10/2015.
 */
$(document).ready(function(){ // ready event occurs on document ready // onload event occurs when after all the content of the page is loaded (images, ..)

    $( '#button_id' ).click( function() {
        console.log('Itay is gay');
        var w = $(document).width(); // what for?? no use
        var h = $(document).height(); // what for?? no use
        $('#div_id').css('width','1000px');
        $('#div_id').css('height','1000px');
    });

});