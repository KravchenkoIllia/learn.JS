//Изминение документа

//Содержимое элемента innerHTML

const textElement = document.querySelector('.leasson__text');

//Получаем содержимое обьекта вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

//Перезаписываем содержимое обьекта
textElement.innerHTML = `I try to learn js`;

//Дописываем содержимое обьекта
textElement.innerHTML = 
    `<p>${textElementContent}</p> <p>I try to learn JS</p>`;
console.log(textElement.innerHTML);

//Содержимое элемента целиком outherHTML
//Получаем содержимое обьекта вместе с HTML а так же сам элемент

const textElementContentOuther = textElement.outerHTML;
console.log(textElementContentOuther);

//Получаем текст элемента
const textContent = textElement.textContent;
console.log(textContent);

//Содержимое текстового узла/коментария 
//data.

const getComment = textElement.nextSibling;
console.log(getComment);
console.log(getComment.data);

//Создание элементов и узлов

//Создание нового элемента(тега)
const newElement = document.createElement('div');
console.log(newElement);

//Наполняем новый элемент
newElement.innerHTML = `I try to be perfect`;
console.log(newElement);

//Создание нового текстового узла
const newText = document.createTextNode('Hello World');
console.log(newText);

