let arr = [
    'Illia',
    'Alina',
    'Polina',
    {
        city: 'Cherkasy',
        street: 'Paliohy',
    },
    true,
    function(){
        console.log('Hello, world!');
    }
];

console.log(arr);
console.log(arr[3].city);
arr[5]();
console.log(arr.length);

// Изминение значений

let arrNew = arr;
console.log(arrNew);
arr[0] = 'Nikolay';
console.log(arr[0]);
arr[7] = 79;
console.log(arr[7]);

//Добавление, удаление элементов масива(push,pop)(shift, unsfift)

//Splice Позволяет добавлять, удалять и заменять элементы
//arr.splice(index[, deleteCount, elem1, ..., elemN])


//Slice Создаёт новый массив в который копирует часть либо весь масив
//arr.slice([start], [end])
let arrSlice = ['Illia', 'Alina', 'Polina',];
let arrNewSlice = arr.slice(0, 1);
console.log(arrNewSlice);
let arrSliced = arr.slice();
console.log(arrSliced);

//Concat Создаёт новый массив в который копирует данные из других массивов
//и дополнительные значение в конец массива
//arr.concat(arg1, arg2, ...)
let arrTwo = arr.concat('Nikolay');
console.log(arrTwo);

//Поиск в Массиве

let arrIndex = ['Illia', 'Alina', 'Polina',];

//arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает
//индекс на которым был найден элемент
console.log(arrIndex.indexOf('Illia'));

//arr.includes(item, from) ищет item, начиная с индекса from, и возвращает
//true если поиск успешен
let arrIncludes = ['Illia', 'Alina', 'Polina',];
console.log(arrIncludes.includes('Alina'));

//find, findIndex
//Поиск в массиве обьектов с определённым условием
//let result = arr.find(function(item, index, array){
    //если true возвращается текущий элемент и перебор прерывается
    //есои все итерации оказались ложными, возвращается undefined
//})

let arrFind = [
    {name:'Illia', age: 26},
    {name:'Alina', age: 29},
    {name:'Polina', age: 24},
];

let result = arrFind.find(function (item, index, array) {
    return item.age === 29; 
});

console.log(result);

let resultTwo = arrFind.findIndex(item => item.age === 24);
console.log(resultTwo);

//filter
//Метод ищет все элементы на которых функция колбэк вернёт true
//let result = arr.filter(function(item, index, array){
    //если true элемент добавляется к результату и перебор продолжается
    //возвращает пустой массив в случае если ничего не найдено
//})

let filterResult = arrFind.filter(function(item, index, array){
    return item.age >= 29;
});

console.log(filterResult);

//Сортировка массивов

//sort(fn)
//Сортирует массив на месте меняя в нём порядок элементов
let arrSortind = ['Illia', 'Alina', 'Polina',];
console.log(arrSortind.sort());

//Сортировка чисел

let arrOfNumbers = [8, 22, 1];
console.log(arrOfNumbers.sort());

//Функция сортировки
arrOfNumbers.sort((a, b) => a - b);

//Преобразование массивов

//map вызывает функцию для каждого элемента массива и возвращает
//массив результатов выполнения этой функции
//let result = arr.map(function(item, index, array){
    //возвращает новое значение вместо элемента
//})
let mapArr = ['Illia', 'Alina', 'Polina',];

let mapResult = mapArr.map(function(item, index, array){
    return item[0];
});

let resultOne = mapArr.map(item => item[0]);
console.log(result);
console.log(resultOne);
console.log(arr.reverse());


//split, join
//split преобразовывает строку в массив по заданому разделителю
let str = 'Illia,Alina,Polina';

let splitArr = str.split(',');
console.log(splitArr);

//join преобразовывает массив в строку с заданым разделителем
let joinArr = ['Illia', 'Alina', 'Polina',];
let joinStr = joinArr.join(',');
console.log(joinStr);

//Перебор элементов

//FOR
let forArr = ['Illia', 'Alina', 'Polina',];
console.log(forArr.length);
for (let i = 0; i < forArr.length; i++){
    console.log(forArr[i]);
} 

//FOR ... OF
//Можно использовать для вывода значений
for (let arrItem of forArr) {
    console.log(arrItem);
}

//forEach
//Выполняет функцию для каждого элемента массива
//arr.forEach(function(item, index, array){
    // делать что то с item
//})
let eachArr = ['Illia', 'Alina', 'Polina',];

eachArr.forEach(function(item, index,  array){
    console.log(`${item} stand on ${index} of ${array}`);
});

eachArr.forEach((item, index, array) => {
    console.log(`${item} stand on ${index} of ${array}`);
});


//reduce, reduceRight
//Используются для вычисления единого значение на основе всего массива
let reduceArr = [1, 2, 3, 4];

let reduceResult = reduceArr.reduce(function (previousValue, item, index, array){
    return item + previousValue;
}, 0);

console.log(reduceResult);

