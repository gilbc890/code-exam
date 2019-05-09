$(document).ready(function() {
    // color change - red
    $('#redBox').click(function(){
     $('.colorBox').each(function(){
            $(this).css('background-color', 'red');
        });
    });
    // color change - blue
    $('#blueBox').click(function(){
     $('.colorBox').each(function(){
            $(this).css('background-color', 'blue');
        });
    });
    // color change - green
    $('#greenBox').click(function(){
     $('.colorBox').each(function(){
            $(this).css('background-color', 'green');
        });
    });

    // color reset
    $('#reset').click(function(){
        $('.red').css('background-color', 'red');               $('.blue').css('background-color', 'blue');             $('.green').css('background-color', 'green');
    });
});