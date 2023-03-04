console.warn('Методы словарей')

//Все ключи значение и пары(ключ значение) с помощю keys values entries
let object = {
    name: 'Jon',
    age: 29
}
console.log(Object.keys(object))
console.log(Object.values(object))
console.log(Object.entries(object))
//Вывод значения ключа
let object_key = {
    name: 'Jon',
    age: 29
}
console.log(object_key['name'])