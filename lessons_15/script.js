let id = 1;

$('#btnForm').click( function() { 
    let FormName = document.getElementById('name').value,
    FormAge = document.getElementById('age').value,
    TableContactBody = $('#tableContactBody');

    document.cookie = `name=${FormName}`;
    document.cookie = `age=${FormAge}`;

    if (FormName !== ''){
        if(FormAge !== ''){
            if(Number(FormAge) > 0){
                addTableRow(TableContactBody)
                $('#name').val('');
                $('#age').val('');
                id++
            }else{
                alert("Невірний ввід віку, введіть число")
            }
        }else{
            alert("Введіть вік")
        }
    }else{
        alert("Введіть ім'я")
    }
});

//Удаление определеной строки
function deleterow(idbtn) {
    $(`.${idbtn}`).remove();
}


//Получение значения поля name из cookie с помощью регулярного выражения
function asincname(){
    return document.cookie.match(/name=(.+?)(;|$)/)[1] 
}

//Получение значения поля age из cookie с помощью регулярного выражения
function asincnage(){
    return document.cookie.match(/age=(.+?)(;|$)/)[1]
}

function addTableRow(TableContactBody){
    return $(TableContactBody).append(`<tr class=${id}><th>${asincname()}</th><th>${asincnage()}</th><th><button class='btn' id=${id} style='margin:10px' onclick="deleterow(${id})">Видалити</button></th></tr>`);
}