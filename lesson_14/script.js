function start_squard_size() {
    $('#squard').css('width', 100);
    $('#squard').css('height', 100);
}

function toogle_squard_small() { 
    $('#squard').animate({
        width: 100,
        height: 100, 
        opacity: 0
    }, speed_slow);
}

function toogle_squard_big() {
    $('#squard').animate({
        width: 400,
        height: 400,
        opacity: 1
    }, speed_slow);
}


function button_disable() {
    $('#squard_btn').attr('disabled', true);
    $('#triangle_btn').attr('disabled', true);
    $('#toogle_btn').attr('disabled', true);
}

function button_enable() {
    $('#squard_btn').attr('disabled', false);
    $('#triangle_btn').attr('disabled', false);
    $('#toogle_btn').attr('disabled', false);
}


$('#squard').fadeOut(0);
let speed_slow = 1000;
click = 1;

$('#squard_btn').click(function () { 
    start_squard_size()
    $('.conteiner_squard').css('justify-content', 'left');
    button_disable()
    $('#squard').fadeIn();
    $('#squard').animate({
        left: 400
    }, speed_slow);
    $('#squard').animate({
        top: 400
    }, speed_slow);
    $('#squard').animate({
        left: 0
    }, speed_slow);
    $('#squard').animate({
        top: 0
    }, speed_slow);
    $('#squard').fadeOut();
    button_enable()
});



$('#triangle_btn').click(function () {
    start_squard_size()
    $('.conteiner_squard').css('justify-content', 'center');
    $('#squard').fadeIn();
    $('#squard').animate({
        top: 346,
        left: -200
    }, speed_slow);
    $('#squard').animate({
        left: 200
    }, speed_slow);
    $('#squard').animate({
        top: 0,
        left: 0
    }, speed_slow);
    $('#squard').fadeOut();
});

$('#toogle_btn').click(function () { 
    $('.conteiner_squard').css('justify-content', 'center');
    $('#squard').fadeIn();
    if (click%2 === 1){
        toogle_squard_big()
        click = 2
    } else{
        toogle_squard_small()
        click = 1
    }
});


