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