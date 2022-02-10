//DOM

//Поиск произвольного элемента

//elem.querySelectorAll(css)
/*
Самый универсальный метод поиска он возвращает все элементы внутри elem
удволетворяющие данному css-селектору. Можно использовать любой селектор.
*/

//Поиск по електору класса
const elemesOne = document.querySelectorAll('.leasson__list')
console.log(elemesOne);

//Поиск по селектору тега
const elemesTwo = document.querySelectorAll('li')
console.log(elemesTwo);

//Поиск по смешаному селектору тега и класса
const elemesTree = document.querySelectorAll('li.leasson__item-list')
console.log(elemesTree);

//Поиск по тегу первого уровня вложенности
const elemesFour = document.querySelectorAll('.leasson__list>li')
console.log(elemesFour);

//Поиск по нескольким класам
const elemesFive = document.querySelectorAll('.leasson__list, leasson__text');
console.log(elemesFive);

//Поиск по вложенным класам
const elemesSix = document.querySelectorAll('.leasson__list, .leasson__text')
console.log(elemesSix);

//Поиск по ID
const elemesSeven = document.querySelectorAll('#listitem')
console.log(elemesSeven);

//Поиск по атрибуту
const elemesEight = document.querySelectorAll('[data-item]')
console.log(elemesEight);

//Поиск по атрибуту со значением
const elemesNine = document.querySelectorAll('[data-item="85"]')
console.log(elemesNine);

//Получить конкретного элемента коллекции
const elems = document.querySelectorAll('li')
console.log(elems[2]);

//Перебор колекции
for (let item of elems){
    console.log(item);
}

elems.forEach(item => {
    console.log(item);
});

//Поиск в переменных
const subList = document.querySelectorAll('.leasson__sub-list');
const subItem = subList[0].querySelectorAll('li');
console.log(subItem);

//Поиск произвольного элемента
//Возвращает первый элемент, соответствующий данному css-селектору
const leassonList = document.querySelector('.leasson__list');
console.log(leassonList);

//Поиск элемента по ID
const elemId = document.getElementById('listitem');
console.log(elemId);

//Поиск элемента по тегу
const elemTag = document.getElementsByTagName('li');
console.log(elemTag);

//Поиск элемента по классу
const elemClass = document.getElementsByClassName('leasson__item-list');
console.log(elemClass);

//Поиск элемента по классу
const elemName = document.getElementsByName('list');
console.log(elemName);

//Метод closest ищет ближайшего предка который соответсвует css селектору. 
//Сам элемент также включается в поиск. Предки элемента это родитель, родитель родителя
//Вместе они образуют цепочку иерархии от элемента до вершины

const closestElem = document.querySelector('.leasson__item-sub-list');
const parentList = closestElem.closest('.leasson__list');
console.log(parentList);

