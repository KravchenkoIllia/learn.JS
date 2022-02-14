//Размеры окна браузера
//clientWidth, clientHeight

//Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

//Ширина и высота документа включаяя прокрутку
let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
console.log(scrollWidth);
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollHeight);

//Получить количество пикселей. Только для чтения
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

//Управление прокруткой страницы
//Метод scrollBy(x, y) прокручивает страницу относительно текущего положения

function setScrollBy(){
    window.scrollBy(0, 50);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

//Метод scrollTo прокручивает страницу на абсолюные координаты
//Тоже самое что и window.scroll()

function setScrollTo() {
    window.scrollTo(0, 50);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

function setScrollToOptions() {
    window.scrollTo({
        top: 500,
        left: 0,
        //smooth, instant, auto
        behavior: "smooth"
    });
}

/*
Вызов elem.scrollIntoView(top) прокручивает страницу чтобы elem 
оказался вверху. У него есть один аргумент.
- если top = true(по умолчанию) то страница будет прокручена, чтобы
elem появился в верхней части окна
Верхний край элемента совмещен с верхней частью окна.
- если top = false то странца будет прокручена чтобы elem появился
внизу. Нижний край элемента будет совмещен с нижним краем окна.
*/

function setScrollIntoView(top) {
    const lessonSelected = document.querySelector('.lesson__selected');
    lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
    const lessonSelected = document.querySelector('.lesson__selected');
    lessonSelected.scrollIntoView({
        //start, (center), end, nearest
        block: "center",
        //start, center, end, (nearest)
        inline: "nearest",
        //(auto), smooth
        behavior: "smooth"
    });
}

//Запрет прокрутки

function setEnableDisableScroll() {
    //document.body.style.overflow = "hidden";
    document.body.classList.toggle('scroll-lock');
}

/*
Для прокрутки страницы из JS ее DOM должен быть полность построен
Например, если мы попытаемся прокрутить страницу из скрипта в <head>.Это не сработает
*/

