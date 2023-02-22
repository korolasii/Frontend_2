$('#btn_open_homework1').click(function (e) { 
    e.preventDefault();
    let homeWork1 = $('#addHtmlt')
    $(homeWork1).html('<h1> New Element </h1>');
});

$('#btn_open_homework2').click(function (e) { 
    e.preventDefault();
    let homeWork2 = $('#hiden')
    $(homeWork2).css('visibility', 'hidden');
});

$('#btn_open_homework3').click(function (e) { 
    e.preventDefault();
    let homeWork3 = $('section')
    $(homeWork3).css('display', 'none');
});

$('#btn_open_homework4').click(function (e) { 
    e.preventDefault();
    let homeWork4 = $('#new div')
    $(homeWork4).text('Lumos Maxima');
    $(homeWork4).addClass('addClass');
});

$('#return').click(function (e) { 
    e.preventDefault();
    location.reload();
});