//Цикл while

//Синтаксис
/*
while(условие) {
    //тело цикла
    //тут будет выполняться код
}
*/

let num = 0;
while (num < 5) {
    console.log(num);
    num++
}

//Цикл DO ... WHILE

let numOne = 5;
do {
    console.log(numOne);
    numOne--;
} while (0 < numOne);

//Цикл FOR
/*
for(Нвчало; Условие; Шаг) {
    //тело цикла
    //тут будет выполняться код 
}
*/

for (let num = 0; num < 5; num++){
    console.log(num);
}

//Директива break
let num = 0;
for (; num < 5; num++){
    console.log(num);
    if (num == 2) break;
}
console.log(`Over, num =${num}`);

for (;num < 5; num++) {
    if (num == 2) continue;
    console.log(num);
}

//Метки
firstFor: for (let num = 0; num < 2; num++){
    for (let size = 0; size < 3; size++) {
        if (size == 2){
            break firstFor;
        }
        console.log(size);
    }
}

firstFor: for (let num = 0; num < 2; num++){
    for (let size = 0; size < 3; size++) {
        if (size == 2){
            continue firstFor;
        }
        console.log(size);
    }
}

//Итоги
/*
1. while - Проверяет условие перед каждой итерацией
2. do..while - Проверяет условие после каждой итерации
3. for(;;) - Проверяет условие перед каждой итерацией, есть возможность задать настройки.
*/