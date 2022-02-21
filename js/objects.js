//Обьекты

//Создание обьетка
/*
let userInfo = new Object();//конструктор обьекта
let userInfo = {};//литерал обьекта
*/

//Свойства обьектов. ключ + значение
let id = Symbol("id"); //Создаём символ id с описание (именем)"id"
let firstPart = "likes"; //Вычисляемое либо передаваемое имя
let userInfo = {
    name: "Illia", //свойство обьекта. ключ = name, значение = "Illia"
    age: 26, //Последняя запятая
    [firstPart + " javascript"]: true, // Имя из двух или больше слов
    [id]: "Some Symbol",
    address: { //Вложеность
        city: "Cherkasy",
        street: "Paliohy",
    }
}
//Основные применения символов:
//1.Скрытые свойства обьектов, символьное свойство не повиться в переборе for in
//2.Использование системных символов Symbol.iterator, Symbol.toPrimitive
console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo["likes javascript"]);
console.log(userInfo.address);
console.log(userInfo.address.city);

//Преемущество квадратных скобок
let key = "name";
console.log(userInfo[key]);

//Свойство из переменной

function makeUserInfo(name, age) {
    return {
        name: name, //name,
        age: age, //age,
        // другие свойства
    };
}
let user = makeUserInfo("Alina", 29);
console.log(user);

//Изменения обьекта

//Добавления свойства
let myInfo = {
    name: "Illia",
}
console.log(myInfo);

myInfo.age = 26;
console.log(myInfo);

myInfo['likes javascript'] = true;
console.log(myInfo);

myInfo.address = {
    city: "Cherkasy",
    street: "Paliochy",
}
console.log(myInfo);

//Удаление свойства из обьекта
delete myInfo.age;
console.log(myInfo);

//Изменить значение свойства
myInfo.age = 18;
console.log(myInfo);

//Копирование обьектов
//При копировании обьекта в другую переменную сам обьект не дублируется, а копируется ссылка на него

let myUser = myInfo;
console.log(myUser);

myUser.age = 26;
console.log(myInfo);

//Дублирование обьектов(Object.assign)
//Object.assign(куда(обьект), что(свойство №1), что(свойство №2), ...);

let myUserCopy = Object.assign({}, myInfo);

myUserCopy.age = 45;
console.log(myInfo);
console.log(myUserCopy);

//Object.assign для добавления свойств
Object.assign(myInfo, {height: 190});
console.log(myInfo);

//Проверка существования свойства

if (myInfo.age) { //true of false
    console.log(myInfo.age);
}

//Опциональная цепочка
console.log(myInfo?.address?.street);

//Оператор in
if ("name" in myInfo) {
    console.log(myInfo.name);
}

//Цикл for..in
/*
Для перебора всех свойст обьекта используется for..in.
for (let ket in object){
    тело цикла выполняется для каждого свойства обьекта
}
*/
for (let key in myInfo) {
    //ключи
    console.log(key);
    //значение ключей
    console.log(myInfo[key]);
}

for (let key in myInfo.address){
    //ключи
    console.log(key);
    //значение ключей
    console.log(myInfo.address[key]);
}

//Методы обьектов
myInfo.showInfo = function (){
    console.log(`${myInfo.name}, ${myInfo.age} лет. Адрес: г.${myInfo.address.city}, ул.${myInfo.address.street}`)
}
myInfo.showInfo();

//Использование this
myInfo.showMyInfo = function (){
    console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`)
} //У стрелочной функции нет своего this
myInfo.showMyInfo();

//Функция конструктор
/*
Функции - конструкторы являются обычными функциями, но есть два правила.
1. Имя функции конструктора должно начинаться с большой буквы.
2. Функция конструктор должна вызываться при помощи оператора "new"
*/

function UserInfo(name) {
    //this = {}; Создает пустой обьект (неявно)
    this.name = name;
    this.age = 29
    //return this; Возвращается обьект (неявно)
}

console.log(new UserInfo('Alina'));
console.log(new UserInfo('Polina'));