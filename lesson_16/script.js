//Add class where I work with Local Storage
class workWithLocalStorage{

    static creat(TableContactBody){

        workWithLocalStorage.getElement()

        $.each(workWithLocalStorage.getElement(), function (i, val) { 

            workWithTable.addAllRow(TableContactBody, val)

        });
    }

    //Function where I make Local storage
    static addLocalStorage(dataInput){

        let item = {'name': `${dataInput[0]}`,
        'age': `${dataInput[1]}`,
        'emeil':`${dataInput[2]}`},//I announce the variable item where stored object with key name and age and value input with id name and input with id age and input with id emeil
        
        list = workWithLocalStorage.getElement();
        
        list.push(item)

        localStorage.setItem('lists', JSON.stringify(list))//Make Local storage with value array list

    }

    static removeElement(id){

        console.log(id)

        let list = workWithLocalStorage.getElement()

        list.forEach((element, i) => {

             if (element.emeil === id){

                list.splice(i, 1)

             }

         });

        localStorage.setItem('lists', JSON.stringify(list));

    }

    static getElement(){

    let list;

      if (localStorage.getItem('lists') === null) {

         list = []

      } else {

         list = JSON.parse(localStorage.getItem('lists'));

      }

      return list;

    }

}

//Add class where I work with Form
class workWithForm{

    //Function where I take value in input with id name and input with id age and input with id emeil
    static getInputData(FormName, FormAge, FormEmeil){

        FormName = document.getElementById(FormName).value,//Writen in varible value input with id name

        FormAge = document.getElementById(FormAge).value;//Writen in varible value input with id age

        FormEmeil = document.getElementById(FormEmeil).value;//Writen in varible value input with id emeil

        return [FormName, FormAge, FormEmeil]//Return array with value  input with id name and input with id age and input with id emeil

    }

    //Function where I clean input
    static clear(){

        $('#name').val('');//Clear input with id name 
        
        $('#age').val('');//Clear input with id age

        $('#emeil').val('');//Clear input with id emeil

    }

    static formValidate(FormName, FormAge, FormEmeil){

        let error = 0

        FormName = document.getElementById(FormName).value,//Writen in varible value input with id name

        FormAge = document.getElementById(FormAge).value;//Writen in varible value input with id age

        FormEmeil = document.getElementById(FormEmeil).value;//Writen in varible value input with id emeil


        if(FormName === ''){

            $('#name').addClass('_error');

            error++

        }else{

            $('#name').removeClass('_error');

        }

        if(FormAge !== '' && Number(FormAge) > 0){

            $('#age').removeClass('_error');
            
        }else{

            $('#age').addClass('_error');

            error++

        }

        if(workWithForm.emeilTest(FormEmeil) && FormEmeil !== ''){

            $('#emeil').removeClass('_error');

        }else{

            $('#emeil').addClass('_error');

            error++
            
        }

        return error

    }

    static emeilTest(email){

        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        
        return re.test(String(email).toLowerCase());
    }

    static popupGet(){

        let myPopup = document.getElementsByClassName('mypopup'),
        popupContent = document.getElementsByClassName('contentPopup'),
        spisok = [myPopup, popupContent];

        return spisok

    }

    static _error() {

        let spisok = document.getElementsByClassName('_error'),
        str = ``

        $.each(spisok, function (i, item) { 

            if (item.id === 'name'){
                str += '<p style="margin-bottom:10px">Не коректний ввід у полі Ім`я</p>'
            }
            if (item.id === 'age'){
                str += '<p style="margin-bottom:10px">Не коректний ввід у полі Рік</p>'
            }
            if (item.id === 'emeil'){
                str += '<p style="margin-bottom:10px">Не коректний ввід у полі Пошта</p>'
            }

        });

        str += '<div class="btn_conteiner"><button class="btn_close btn">Закрити</button></div>'

        let popupContent = workWithForm.popupGet()[1],
        myPopup = workWithForm.popupGet()[0];

        $(popupContent).append(str);
        
        $(myPopup).css('display', 'block');

    }

    static _errorClear(){

        let popupContent = workWithForm.popupGet()[1];

        $(popupContent).html('');

    }
    
}

//Add class where I work with Table
class workWithTable{
    
    //Add row to table
    static addRow(TableContactBody){

        let objectLocalStorage = JSON.parse(localStorage.getItem('lists'))

        $(TableContactBody).append(`<tr><th>${objectLocalStorage[objectLocalStorage.length-1]['name']}</th><th>${objectLocalStorage[objectLocalStorage.length-1]['age']}</th><th>${objectLocalStorage[objectLocalStorage.length-1]['emeil']}</th><th><button class='btn delete' style='margin:10px')">Видалити</button></th></tr>`);
        
    }

    static addAllRow(TableContactBody, item){

        $(TableContactBody).append(`<tr><th>${item['name']}</th><th>${item['age']}</th><th>${item['emeil']}</th><th><button class='btn delete' style='margin:10px')">Видалити</button></th></tr>`);

    }

    static removeRow(element){

        if (element.classList.contains('delete')) {

            element.parentElement.parentElement.remove();

         }

    }

}

//Event start when click in btnForm
$('#btnForm').click(function () {

    if(workWithForm.formValidate('name', 'age', 'emeil') === 0){

        let dataInput = workWithForm.getInputData('name', 'age', 'emeil'),//Writen in varible dataInput value a function getInputData in class workWithForm
        TableContactBody = $('#tableContactBody');//Writen in varible TableContactBody element tbody by selector

        workWithLocalStorage.addLocalStorage(dataInput)//Call a function addLocalStorage in class workWithLocalStorage

        workWithForm.clear()////Call a function clear in class workWithForm

        workWithTable.addRow(TableContactBody)

    }else{

        workWithForm._error()

    }


});

$('#tableContactBody').click(function (e) { 

    e.preventDefault();

    workWithTable.removeRow(e.target)

    workWithLocalStorage.removeElement(e.target.parentElement.previousElementSibling.textContent);

});

$(document).on("click", ".btn_close", function() {

    let popup = workWithForm.popupGet()[0]

    $(popup).css('display', 'none');

    workWithForm._errorClear()
    
});

document.addEventListener('DOMContentLoaded', workWithLocalStorage.creat($('#tableContactBody')));