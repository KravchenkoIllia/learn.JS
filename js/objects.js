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

