<<<<<<< HEAD
=======
console.warn('Методы строк')

>>>>>>> dbd43e81a29cc014a3c98547a5354da533b5dd61
// Соеденение строк '+'
let str_hellow = 'Hello';
let str_none = ' ';
let str_world = 'World';
let str_2 = str_hellow + str_none + str_world
console.log(str_2);

// Многомтросная переменая ``
let str_mnog = `Guest:
Lion
Danya
Spike
`;
console.log(str_mnog);

// Перенос сторик с помощью спец симовлов '\n'
let str_spec = 'Guest:\nLion\nDanya\nSpike'
console.log(str_spec)

// Опостров " \' "
let str_postov = 'I\'m Timofei';
console.log(str_postov)

// Длина строки 'length' спец символ '\n' и другие считаеться как один елемент
let str_len = 'I\'m\nTimofei'
console.log(str_len.length)

// Получение символа в строке с помощю индекса
let str_index = 'Hello';
console.log(str_index[0]);
console.log(str_index[str_index.length - 1]);

// Получение символа в строке с помощю 'at(x)'
let str_at = 'Hello';
console.log(str_index.at(0));
console.log(str_index.at(-1));

// Все символі строки в верхний регистр с помощю "toUpperCase"
let str_apper = 'hello';
console.log(str_apper.toUpperCase());
console.log(str_apper[0].toUpperCase());

// Все символі строки в нижний регистр с помощю "toLowerCase"
let str_lower = 'HELLO';
console.log(str_apper.toLowerCase());
console.log(str_apper[0].toLowerCase());

// Нахождение подстроки или символа в строке с определеного индекса с помощю "indexOf('substr', index)" возвращает индекс подстроки или сивола -1 означает что подстрока или символ не найден
let str_indexOf = 'Hellow world';
console.log(str_indexOf.indexOf('H', 0));
console.log(str_indexOf.indexOf('world'));
console.log(str_indexOf.indexOf('H', 1));
console.log(str_indexOf.indexOf('h'));

// Нахождение подстроки или символа в строке с определеного индекса с помощю 'includes("substr", index)' возвращает либо true если есть подстрока или символ и false если ничего не найдено
let str_includes = 'Hellow world';
console.log(str_includes.includes('H', 0));
console.log(str_includes.includes('world'));
console.log(str_includes.includes('H', 1));
console.log(str_includes.includes('h'));

// Проверка начинаеться ли строка с определеных символов или ет с помощю 'startsWith("simvol")' возвращает true если начинаеться или false если не начинаеться
let str_start = 'Hellow world'
console.log(str_start.startsWith('H'))
console.log(str_start.startsWith('h'))
console.log(str_start.startsWith('Hell'))
console.log(str_start.startsWith('world'))

// Проверка заканчиваеться ли строка с определеных символов или нет с помощю 'endsWith("simvol")' возвращает true если заканчиваеться или false если не заканчиваеться
let str_end = 'Hellow world'
console.log(str_start.endsWith('world'))
console.log(str_start.endsWith('World'))
console.log(str_start.endsWith('Hell'))
console.log(str_start.endsWith('d'))

//Получение под строки с помощю 'slice(star, end)' end не включительно 
// substring === slice
let str_slice = 'Hello World'
console.log(str_slice.slice(0,str_slice.at[-1]))
console.log(str_slice.slice(1))
console.log(str_slice.slice(2,5))

//Получение под строки с помощю 'substr(star, length)' от старт до длины  length
let str_substr = 'Hello World'
console.log(str_substr.substr(0,11))
console.log(str_substr.substr(1))
console.log(str_substr.substr(-2 , 5))

<<<<<<< HEAD


=======
// eval выполняет все матиматические уровнения записанные в строке
let str_mat = '2+2*2', str_mat_2 = '(2+2)*2';
console.log(eval(str_mat))
console.log(eval(str_mat_2))
>>>>>>> dbd43e81a29cc014a3c98547a5354da533b5dd61
