let btn = document.getElementById('btn'),
smen = document.getElementById('input'),
spisok = ["Tom", "Bob", "Alice", "Sam", "Tim", "Bill", 1, 2, 3, 4, 5];

btn.addEventListener('click', (e) => {
    e.preventDefault()
    smen.value = spisok[getRandom(0, 10)]
})

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}