let id = 1;
$('#btnForm').click( function() { 
    let FormName = document.getElementById('name').value,
    FormAge = document.getElementById('age').value,
    TableContactBody = $('#tableContactBody');

    cookieAddName(FormName)
    cookieAddAge(FormAge)

    ifinput(FormName, FormAge, TableContactBody)
    
});

function ifinput(FormName, FormAge, TableContactBody){
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
}

//Создаю фаил cookie name
function cookieAddName(FormName) {
    document.cookie = `name=${FormName}`;
}

//Создаю фаил cookie age
function cookieAddAge(FormAge) {
    document.cookie = `age=${FormAge}`;
}

//Удаление строки при нажатии на кнопку
$(document).on("click", ".btn", function(){
  $(this).closest("tr").remove();
});


//Получение значения поля name из cookie с помощью регулярного выражения
function asincname(){
    return document.cookie.match(/name=(.+?)(;|$)/)[1] 
}

//Получение значения поля age из cookie с помощью регулярного выражения
function asincnage(){
    return document.cookie.match(/age=(.+?)(;|$)/)[1]
}

//Создаю и добавляю колонку в таблицу 
function addTableRow(TableContactBody){
    let newRow = $("<tr>"),
    newCell1 = $("<td>"),
    newCell2 = $("<td>"),
    newCell3 = $("<td>"),
    deleteBtn = $("<button>").addClass("btn").text("Удалить").css('margin', 10);
    

    newCell1.append(asincname());
    console.log(newCell1.html())
    newRow.append(newCell1);
    newCell2.append(asincnage());
    newRow.append(newCell2);
    newCell3.append(deleteBtn);
    newRow.append(newCell3);

    $(TableContactBody).append(newRow);
}