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

//Методы вставки

//Вставляем новый элемент
//перед обьектом textElement.before(newElement);
//после обьекта textElement.after(newElement);
//внутрь и в начало обьекта textElement.prepend(newElement);
//внутрь и в конец обьекта textElement.append(newElement);

/*      before
<div>
        prepend
    <p></p>
        append
</div>
        after
*/

//insertAdjacentHTML/text/element

//Вставляем текст, HTML, элемент

//Вставляем текст
textElement.insertAdjacentHTML(
    'afterend',
    `<p>The world is mine</p>`
);

/*  beforbegin вставляет HTML непосредственно перед обьектом
    afterbegin вставляет HTML в начало обьекта
    beforeend вставляет HTML в конец обьекта
    afterend вставляет HTML непосредственно после обьекта
*/

//Наполняем элемент
newElement.innerHTML = `Never to late`;

//Вставляем элемент
textElement.insertAdjacentElement(
    'beforeend',
    newElement
)

/*      beforebegin
<div>
        afterbegin
    <p></p>
        beforeend
</div>
        afterend
*/


//Перенос элемента

const leassonBlock = document.querySelector('.leasson');
const title = document.querySelector('h1');

//Переносим title в конец блока leassonBlock
leassonBlock.append(title);

//Клонирование узлов cloneNode

const cloneTextElement = textElement.cloneNode(true);
const cloneLessonBlock = document.querySelector('.leasson');
cloneLessonBlock.append(cloneTextElement);

//Удаление узлов

textElement.remove();

