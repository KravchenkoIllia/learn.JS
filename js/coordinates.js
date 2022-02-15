//Координаты
/*
Большинство методов Javascript работают в одной из двух системе координат

1. Относительно окна браузера.
    (как position: fixed, отсчет идет от верхнего левого угла окна)
    Принято обозначать clientX/clientY
2. Относительно документа.
    (как position: absolute относительно body отсчет идет от верхнего левого угла документа)
    Принято обозначать pageX/pageY.
Когда страница полностью прокручена в самое начало, то верхний левый угол окна совпаддает
с верхним левым углом документа, при этом обе эти системы координат тоже совпадают.
Но если происходит прокрутка, то координаты элементов в контексте окна меняются,
так как они двигаются но в тоже время их координаты относительно документа остаются такими же.
*/

//Координаты относительно окна браузера
//getBoundingClientRect

//Получает обьект
const item = document.querySelector('.lesson__item');

//Получает координаты относительно окна браузера
const getItemCoords = item.getBoundingClientRect();
console.log(getItemCoords);

//Получаем конкретную координату относительно окна браузера
const getItemLeftCoord = item.getBoundingClientRect().left;
console.log(getItemLeftCoord);

//Получаем конкретную координату относительно окна браузера
const getItemTopCoord = item.getBoundingClientRect().top;
console.log(getItemTopCoord);

//Получаем конкретную координату относительно документа
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;
console.log(getItemTopDocumentCoord);

//Получение обьекта по координатам
//document.elementFromPoint(x, y);
const element = document.elementFromPoint(100, 100);
console.log(element);
