//Синтаксис

let message = 'Hello, world';

let first = 5;
let second = 10

if (first === second) {
    //код выполняется только если выражение в скобках вернет true
    console.log(message);
}

if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1){
    console.log(message); 
}

//Блоки ELSE, ELSE IF
let textMessage = 'Hello Illia';
let number = 5;

 if (number > 50){
    console.log("5 > 50");
} else if (number > 30){
    console.log("5 > 30");
} else if (number > 10){
    console.log("5 > 10");
} else if (number > 1){
    console.log("5 > 1");
} else {
    console.log("Not found");
}

//Условный оператор ?

let myMessage = 'Hej';
/*
let messageEnd;

if (5 > 1) {
    messageEnd = ", illia";
} else {
    messageEnd = ", Alina";
}
*/
messageEnd = 5 > 50 ? ", Illia" : 
    5 > 30 ? ", Alina":
        5 > 10 ? ", Polina":
            5 > 1 ? ", Natasha" : ", Petro"

myMessage += messageEnd;
console.log(myMessage);