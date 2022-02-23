//Всплытие и погружение
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');

/*Всплытие
Когда на элементе происходит событие, обработчик сначала срабатывает на нём,
потом на его родителе, затем выше и так далее, вверх по цепочке предков.
*/
//Погружение. Для того что обьект всплыл, он должен сначала погрузится.
block.addEventListener("click", function (event) {
    console.log('CLick on block');
    //console.log(event.target);
});
blockInner.addEventListener("click", function (event) {
    console.log('CLick on second block');
}, {"capture": true});
blockInnerInner.addEventListener("click", function (event) {
    console.log('CLick on third block');
    //event.stopPropagation(); Остановка всплытия
});