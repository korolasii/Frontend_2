let btn = document.querySelector('#btn'),
popupOpen =document.querySelector('#popupopen'),
popupClose = document.querySelector('.close'),
popup = document.querySelector('.popup');

popupopen.addEventListener('click', (e) => {
    popup.style.display = 'block';
})

popupClose.addEventListener('click', (e) => {
    popup.style.display='none';
    banerOpen.style.display='none';
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const pop = document.getElementById('alert').value
    alert(`${pop}`)
});