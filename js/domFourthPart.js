//Атрибуты и свойства

const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');

console.log(link);
console.log(input);

//Получить список доступных свойств
console.dir(link);

const lessonText = document.querySelector('.lesson__text');

//Проверяем наличие атрибута
lessonText.hasAttribute('name');
//Получаем значение атрибута
lessonText.getAttribute('name');
//Устанавливаем значение атрибута
lessonText.setAttribute('name', 'value');
//Удаляем атрибут
lessonText.removeAttribute('name');

//Синхронизация между атрибутами и свойствами

input.setAttribute('id', '123');
console.log(input.id);

input.id = "321";
console.log(input.getAttribute('id'));

//Не работает с value

input.setAttribute('value', 'Hello world');
console.log(input.value);

input.value = "How are you";
console.log(input.getAttribute('value'));

//Нестандартные артрибуты dataset

//Получаем атрибут
console.log(lessonText.dataset.size);

//Перезаписываем атрибут
lessonText.dataset.size = "5810";
console.log(lessonText.dataset.size);

//Полезные свойства

//Получить тег элемента
console.log(link.tagName);

//Скрыть/показать элемент
link.hidden = true;