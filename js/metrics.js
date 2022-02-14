//Метрики элементов на страницу

//Получаем обьект
const block = document.querySelector('.lesson__block');

//Позиция обьекта
//Свойства offsetParent, offsetLeft, offsetTop

//Получаем родительский элемент
//Относительно которого позицирнирован наш обьект
const elementOffsetParent = block.offsetParent;

/*
Это будет ближайший предок который удовлетворяет следущим условиям
1. Является css позиционированным(position =(absolute, relative, fixed, sticky))
2. теги <td></td> <th></th> <table></table>
3. <body></body>
*/
console.log(elementOffsetParent);

/*
Ситуации в которых offsetParent равно null
1.Для скрытых элементов display: none или когда нету в документе
2.Для элементов <body></body> <html></html>
3.Для элементов с position: fixed
*/

//Получаем позицию обьекта относительно предка(offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);

//Получаем размеры обьекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);

//Отступы внутренней части элемента от внешней(clientTop, clientLeft) 
const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);

//Размеры обьекта без рамок и полосы прокрутки(clientWidth, clientHeight)
const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

//Размеры обьекта включая в себя полосы прокрутки(scrollWidth, scrollHeight)
const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);

//Размеры прокрученной области(scrollLeft, scrollTop)

block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);

//Методы управления прокруткой(scrollBy, scrollTo, scrollIntoView)

function setElementScrollBy(){
    block.scrollBy({
        top: 20,
        left: 0,
        behavior: "smooth"
    });
}