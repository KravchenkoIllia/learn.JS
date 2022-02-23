//Стили и классы

//Управление классами
//Свойства className, classList

//Получаем элемент
const element = document.querySelector('.leasson__item-list_red');

//Получаем имена классов
const elementClassName = element.className;
console.log(elementClassName);

//Управление классами
//classList

//Добавить класс
element.classList.add('active');
//Удалить класс
element.classList.remove('active');
//Добавить класс, если его нет, а если есть удалить
element.classList.toggle('active');
//Проверка наличия класса, возвращает true/false
element.classList.contains('active');

//classList является перебираемым, поэтому можно перечислить все классы при помощи for..of

for (let className of element.classList){
    console.log(className);
}

//Управление стилями
//element.style

//Задаем стиль
element.style.color = "red";

//Сброс стиля
element.style.color = "";

//Множество css стилей
element.style.cssText = `
    margin-bottom: 30px;
    color: red;
`;

//Получение значения свойства
console.log(element.style.fontSize);

//getComputedStyle Только для чтения!
//Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

//Стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);


