//Введение в JS события
/*
Отлавливать возникновение события мы будем с помощью специальных обработчиков
Любому событию можно назначить обработчик, то есть функцию, которая срабатыввает,
как только произойдет нужное нам событие. Именно благодаря этим обработчикам 
JS может реагировать на действи пользователя.
Есть несколько способов назначить событию обработчик. 
*/

//Использование атрибута HTML
//<button onclick="console.log('Клик!')" type="button" class="button">Нажми на меня!</button>

//Использование DOM обьекта

const button = document.querySelector('.button');

// button.onclick = function () {
//     console.log('Click');
// }

// function showConsole() {
//     console.log('CLick');
// }

//button.onclick = showConsole; //Без круглых скобок

//Фундаментальный недостаток описанных выше способов назначение обработчика - невозможность повесить несколько
//обработчиков на одно событие. Каждое новое назначение обработчика перезапишет предедущее

//Обработчик событие addEventListener/removeEventListener
/*
Существует основной способ назначения обработчиков при помощи специальных методов addEventListener/removeEventListener
которые лишены этого недостатка.

element.addEventListener(event, handler[, options]);
*/

button.addEventListener("click", function (e) {
    console.log('Click');
})
button.addEventListener("click", function (e) {
    console.log('Clack');
})

function showConsole() {
    console.log('Click1');
}
//button.removeEventListener("click", showConsole);

//Опции

const options = {
    "captupe": false, //фаза на которой должен сработать обработчик
    "once": false, //если true тогда обработчик будет автоматически удален после выполнения 
    "passive": false // если true то указывает что обработчик никогда не вызовет preventDefault()
}

button.addEventListener("click", showConsole, options);
