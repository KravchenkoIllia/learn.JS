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

