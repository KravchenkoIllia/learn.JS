//Делегирование событий

//Всплытие и перехват событий позволяет реализовать один из самых важных
//приёмов разработки - делегирование.

const button = document.querySelectorAll('.button');

function showConsole() {
    console.log('Yeah');
}
// button.forEach(buttonItem => {
//     buttonItem.addEventListener("click", showConsole);
// })

const lesson = document.querySelector('.lesson');

lesson.addEventListener("click", function(event) {
    if (event.target.closest('.button')){
        showConsole();
    }
})

const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
    if(event.target.closest('.menu__button')) {
        menuBody.classList.toggle('_active');
    }
    if (!event.target.closest('.menu')) {
        menuBody.classList.remove('_active');
    }
}

//Действия браузера по умолчанию
/*
Многие события автоматически влекут за собой действия браузера.
Например:
    - Клик по ссылке инициирует переход на новый URL.
    - Нажатие на кнопку отправить в форме - отсылку её на сервер.
    - Зажатие кнопки мыши над текстом и её движение в таком состоянии
     инициирует его выделение.
Если мы обрабатываем событие в JS то зачастую такое действие браузера нам не нужно.
*/

const link = document.querySelector('.link');

link.addEventListener("click", function(event) {
    console.log('What we do');
    event.preventDefault(); //отменить действие браузера (переход по ссылке)
});

link.onclick = function () {
    console.log('What we do');
    return false; //отменить действие браузера (переход по ссылке)
}