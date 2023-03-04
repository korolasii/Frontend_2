let btn_1 = document.getElementById('btn_1'),
btn_HomeWorkOne = document.getElementById('HomeWorkOne'),
btn_HomeWorkTwo = document.getElementById('HomeWorkTwo'),
formOne = document.getElementById('form_1'),
formTwo = document.getElementById('form_2'),
smen = document.getElementById('input'),
btn_2 = document.getElementById('btn_2'),
popup = document.getElementById('mypopup'),
output = document.getElementById('outpup'),
closePopup = document.getElementById('close');

btn_HomeWorkOne.addEventListener('click', (e) => {
    e.preventDefault();
    formTwo.style.display = 'none';
    formOne.style.display = 'flex';
})

btn_HomeWorkTwo.addEventListener('click', (e) => {
    e.preventDefault();
    formOne.style.display = 'none';
    formTwo.style.display = 'flex';
})

btn_1.addEventListener('click', (e) => {
    e.preventDefault();
    smen.value = getSlov();
})

btn_2.addEventListener('click', (e) => {
    e.preventDefault();
    const pop = document.getElementById('alert').value;
    popup.style.display = 'block';
    output.innerHTML = pop;
});

closePopup.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'none';
})

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function getSlov(){
    let abc = "abcdefghijklmnopqrstuvwxyz1234567890",
    rs = "",
    per = getRandom(0, 10);
    while (rs.length < per) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    return rs
}