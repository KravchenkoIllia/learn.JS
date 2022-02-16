//Обьявление функции (function Declaration)

function имя(параметры) {
    //тело (код) функции
}

//Имя функции и ее предназначение

/*
Как правило, в имени используются определенные префиксы, обозначающие действие
после которых следует обьект действия.
"snow...показывает что то"(snowMassage)
"get...возвращает значение"(getOption)
"calc...что то вычисляют"(calSum)
"create...что то создают"
"check...что то проверяют"
*/

//Запуск функции
function snowMassage() {
    console.log('Hello World');
}

snowMassage();

//Вложеность и видимость функции
/*
function getSum() {
    let numOne, numTwo;

    function getNumOne(){
        numOne = 1;
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();

    let numSumm = numOne + numTwo;
    console.log(numSumm);
}

getSum();
*/

//Локальные и внешние переменные
function snowMassageOne() {
    //Локальная переменная
    let message = 'Hello Illia';
    console.log(message);
}

//Внешне не работает с локальными переменными
//console.log(message);

//Внешняя переменная
let message;

function snowMassageTwo() {
    //Используется внешняя переменная
    message = "Hello Alina";
}

snowMassageTwo();
console.log(message);

//Глобальные переменные
let globalVar = "Глобальная переменная";

function getSum() {
    let numOne, numTwo;

    function getNumOne(){
        numOne = 1;
        console.log(globalVar);
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();

    let numSumm = numOne + numTwo;
    console.log(globalVar);
}
console.log(globalVar);
getSum();

//Параметры (аргументы)

function calcSum(numOne, numTwo) {
    console.log(`Var numOne: ${numOne}`);
    console.log(`Var numTwo: ${numTwo}`);

    let numSumm = numOne + numTwo;

    console.log(`Summ: ${numSumm}`);
}

calcSum(1, 3);

//Функции колбэк

function calculate(numOne, numTwo, more, less) {
    let numSumm = numOne + numTwo;

    if (numSumm > 3){
        more();
    } else {
        less();
    }
}

function snowMoreMassege() {
    console.log('More then 3');
}
function snowLessMassege() {
    console.log('Less then 3');
}
calculate(1, 5, snowMoreMassege, snowLessMassege);

//Возврат результата

function calculateSumm(numOne, numTwo) {
    let numSumm = numOne + numTwo;
    //Возврат
    return numSumm;
    //Дальше код не выполняется
}
let funcResult = calculateSumm(1, 6);

console.log(`Summ: ${funcResult}`);

//Рекурсия

function getSum (numOne, numTwo) {
    let numSumm = calcSum(numOne, numTwo);
    console.log(numSumm);
}
function calcSum(numOne, numTwo) {
    return numOne + numTwo;
}

getSum(5, 5);