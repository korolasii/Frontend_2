console.warn('Методы масивов')

// Получение елемента по индексу
let mas = [1, 2, 3, 'Антон']
console.log(mas[0])
console.log(mas[mas.length-1])
console.log(mas[2])

//Заменя елемента
let mas_zam = [1, 2, 3, 'Антон']
mas_zam[0] = 50
mas_zam[mas_zam.length-1] = 'Артем'
console.log(mas_zam[0])
console.log(mas_zam[mas_zam.length-1] )

//Добавление елемента под определёный индекс
let mas_dob = [1, 2, 3, 'Антон']
mas_dob[mas_dob.length] = 20
mas_dob[mas_dob.length] = 'Вася'
console.log(mas_dob[mas_dob.length-2])
console.log(mas_dob[mas_dob.length-1])

//Удоление последнего елемента и ввывод его с помощю pop
let mas_pop = [1, 2, 3, 'Антон']
console.log(mas_pop.pop())
console.log(mas_pop.pop())
console.log(mas_pop.pop())

//Удоление первого елемента и ввывод его с помощю shift
let mas_shift = [1, 2, 3, 'Антон']
console.log(mas_shift.shift())
console.log(mas_shift.shift())
console.log(mas_shift.shift())

//Добавление елемента в конец списка с помощю push
let mas_push = [1, 2, 3, 'Антон']
mas_push.push('Вероника')
console.log(mas_push)
mas_push.push('21')
console.log(mas_push)
mas_push.push('58')
console.log(mas_push)

//Добавление елемента в начало списка с помощю unshift
let mas_unshift = [1, 2, 3, 'Антон']
mas_unshift.unshift('Вероника')
console.log(mas_unshift)
mas_unshift.unshift('21')
console.log(mas_unshift)
mas_unshift.unshift('58')
console.log(mas_unshift)

//Многострочные масивы
let mas_mas = [[[1,2,3,4], [5,6,7,8]], [[9, 10, 11, 12], [13, 14, 15,16]], [[17, 18, 19, 20], [21, 22, 23, 24]]]
console.log(mas_mas[0][0][0])
console.log(mas_mas[0][1][1])
console.log(mas_mas[1][0][3])
console.log(mas_mas[2][1][2 ])