//Основы события мыши

//Типы событий мыши
/*
Мы можем разделить события мыши на две категории: Простые, комплексные.

Простые события
Самые часто используемые простые события:
mousedown/mouseup - Кнопка мыши нажата/отпущена над элементом.
mouseover/mouseout - Курсор мыши появляется над элементом и уходит с него.
mousemove - Каждое движение мыши над элементом генерирует это событие.
contextmenu - Вызывается при попытке открытия контекстного меню, как правило, нажатием правой кнопки мыши.
                Но заметим это не совсем событие мыши, оно может вызываться и специальной клавишей.

Комплексные события
click - Вызиваеться при mousedown, а затем mouseup над одним и тем же элементом, если используется
    основная кнопка мыши.
dblclick - Вызивается двойным кликом на элементе.
Комплексные события состоят из простых.
*/

// const button = document.querySelector('.button');

// button.addEventListener("mousedown", function(event) {
//     console.log(`Your click ${event.which}`);
// });
// button.addEventListener("click", function(event) {
//     console.log('Main click');
// });
// button.addEventListener("contextmenu", function(event) {
//     console.log('Call context menu');
// });

/*
event.which = 1 Нажата основная кнопка мыши
event.which = 2 Нажата средняя кнопка мыши(колесо)
event.which = 3 Нажата не основная кнопка(меню)
*/

//Кординаты: clientX/Y, pageX/Y

const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mousemove", function(event) {
    blockForMouse.innerHTML = 
    `clientX = ${event.clientX} <br> clientY = ${event.clientY}`;
});

