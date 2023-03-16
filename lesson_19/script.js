class workWithLocalStorage{
    static creat(){
        $.each(workWithLocalStorage.getElement(), function (i, val) { 
            workWithTable.addAllRow(val['timeAlarm'])
        });
    }
    static addLocalStorage(timeAlarm){
        let item = {'timeAlarm': `${timeAlarm}`},
        list = workWithLocalStorage.getElement();
        list.push(item)
        localStorage.setItem('lists', JSON.stringify(list))
    }
    static removeElement(id){
        let list = workWithLocalStorage.getElement()
        for (let i = 0; i<list.length; i++){
            if (list[i]['timeAlarm'] === id){
                list.splice(i, 1)
            }
        }
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
class workWithTable{
    static addRow(){
        let objectLocalStorage = JSON.parse(localStorage.getItem('lists'))
        $(alarmTableBody).append(`<tr class=${objectLocalStorage[objectLocalStorage.length-1]['timeAlarm']}><th>${objectLocalStorage[objectLocalStorage.length-1]['timeAlarm']}</th><th><button class='btn delete' style='margin:10px'">Видалити</button></th></tr>`);
    }
    static addAllRow(item){
        $(alarmTableBody).append(`<tr class=${item}><th>${item}</th><th><button class='btn delete' style='margin:10px'">Видалити</button></th></tr>`);
    }
    static removeRow(element){
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }
}
function offSecond() {
    btnSecondOff.classList.add('enabled')
    btnSecondOn.classList.remove('enabled')
    time[2].classList.add('enabled')
    clearInterval(setinterOn)
    setinterOn = null
    timenowForOffSecond()
}
function onSecond() {
    btnSecondOn.classList.add('enabled')
    btnSecondOff.classList.remove('enabled')
    time[2].classList.remove('enabled')
    clearInterval(setinterOff)
    setinterOff = null
    timenowForOnSecond()
}
function timenowForOffSecond(){
    setinterOff = setInterval(timeNowOffSecond, 1000);
}
function timenowForOnSecond(){
    setinterOn = setInterval(timeNowOnSecond, 1000);
}
function timeNowOnSecond(){
    let timeClock = new Date(),
    h = timeClock.getHours(),
    m = timeClock.getMinutes(),
    s = timeClock.getSeconds(),
    list = workWithLocalStorage.getElement()
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    clock.innerText = `${h}:${m}:${s}`;
    if (list.length > 0){
        for (let i = 0; i<list.length; i++){
            if (list[i]['timeAlarm'] === `${h}:${m}:${s}`){
                audio.play()
                audio.loop = true
                popupContent.innerHTML = `<button class='close'>Вимкнути</button>`
                $('#mypopup').css('display', 'block');
            }
        }
    }
}
function timeNowOffSecond(){
    let timeClock = new Date(),
    h = timeClock.getHours(),
    m = timeClock.getMinutes(),
    list = workWithLocalStorage.getElement()
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    clock.innerText = `${h}:${m}`;
    if (list.length > 0){
        for (let i = 0; i<list.length; i++){
            if (list[i]['timeAlarm'].includes(`${h}:${m}`)){
                audio.play()
                audio.loop = true
                popupContent.innerHTML = `<button class='close'>Вимкнути</button>`
                $('#mypopup').css('display', 'block');
            }
        }
    }
}
function addAlarm(){
    if (time[2].classList.contains('enabled')){
        timeAlarm = `${time[0].value}:${time[1].value}`;
        if (timeAlarm.includes("hour") || timeAlarm.includes("minute")){
          return alert('Не вибрані параметри будильника');
        }else{
            workWithLocalStorage.addLocalStorage(timeAlarm)
            workWithTable.addRow()
        }
    }else{
        timeAlarm = `${time[0].value}:${time[1].value}:${time[2].value}`;
        if (timeAlarm.includes("hour") || timeAlarm.includes("minute") || timeAlarm.includes("second")){
          return alert('Не вибрані параметри будильника');
        }else{
            workWithLocalStorage.addLocalStorage(timeAlarm)
            workWithTable.addRow()
        }
    }
}
$(document).on("click", ".close", function(){
    audio.pause()
    audio.loop = false
    $('#mypopup').css('display', 'none');
});
let time = document.querySelectorAll('select'),
btnSecondOff = document.getElementById('secondOff'),
btnSecondOn = document.getElementById('secondOn'),
setinterOn,
setinterOff,
timeAlarm,
atencion = document.getElementById('mypopup'),
popupContent = document.getElementById('popup_content'),
audio = document.getElementById('audio'),
clock = document.querySelector('#clock'),
btnClockStart = document.getElementById('start'),
alarmTableBody = document.getElementById('alarmTableBody');
console.log(popupContent)
for (let i = 24; i >= 0; i--){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    time[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    time[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    time[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
timenowForOnSecond()
btnSecondOff.addEventListener('click', offSecond);
btnSecondOn.addEventListener('click', onSecond);
btnClockStart.addEventListener('click', addAlarm);
document.addEventListener('DOMContentLoaded', workWithLocalStorage.creat());
$(alarmTableBody).click(function (e) {
    e.preventDefault();
    workWithTable.removeRow(e.target)
    workWithLocalStorage.removeElement(e.target.parentElement.previousElementSibling.textContent);
});