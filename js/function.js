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

// function recursCalcSumm(numOne, numTwo) {
//     let result = 1;
//     //умножаем result на numOne numTwo раз в цикле
//     for (let i = 0; i < numTwo; i++){
//         result *= numOne;
//     }
//     return result;
// }

// console.log(recursCalcSumm(2, 3));

function recursCalcSumm(numOne, numTwo) {
    if (numTwo === 1){
        return numOne;
    } else {
        return numOne * recursCalcSumm(numOne, numTwo - 1);
    }
}
console.log(recursCalcSumm(2, 3));

//Функциональное выражение (Function Expresion)

let showMessage = function() {
    console.log('Hello');
};

showMessage();

//Функции стрелки (arrow function)
/*
let имя переменной = function (параметры...){
    return выражение;
};

let имя переменной = (параметры...) => выражение
*/

//Однострочная стрелочная функция

let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Hello', 'World'));

//Многострочная стрелочная функция

let getMessageOne = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;
};

console.log(getMessageOne('Hello', 'world'));

//Планирование setTimeout, setInterval
/*
Что бы реализовать планирование существует два метода;
1.setTimeout позволяет вызвать функцию один раз через определенный интервал времени
2.setInterval позволяет вызывать функцию регулярно, повторяя вызов через определенный интервал.

setTimeout(функция или код, задержка, параметры...)
setInterval(функция или код, задержка, параметры...)
*/

function showMyMessage(text, name) {
    console.log(`${text}, ${name}!`);
}
setTimeout(showMyMessage, 3000, 'Illia', 'Zdarova');
// setInterval(showMyMessage, 500, 'Illia', 'Zdarova');

//Рекурсивный setTimeout

function showNumber(num) {
    console.log(num);
    if (num < 5) {
        setTimeout(showNumber, 1000, ++num);
    }
    
}

// setTimeout(showNumber, 1000, 1)

function showMyNumber(num){
    console.log(num);
    let timeId = setTimeout(showMyNumber, 1000, ++num);
    if (num === 6) {
        clearTimeout(timeId);
    }
}
// setTimeout(showMyNumber, 1000, 1);

//Рекурсивный setInterval

let result = 0;
function showNumberOne(num) {
    result += num;
    console.log(result);
    if (result === 5) {
        clearInterval(timeId);
    }
}

let timeId = setInterval(showNumberOne, 1000, 1);

//Приминение функций 
//Функция соеденения строк
function createMessage(text, name) {
    return `${text}, ${name}`;
}
//Функция вывода в косоль
function consoleMessage(message) {
    console.log(message)
}
//Обьеденяющая функция,вызывает обе функции
function initMessage(text, name) {
    consoleMessage(createMessage(text, name));
}

initMessage('Privet', 'Alina');
