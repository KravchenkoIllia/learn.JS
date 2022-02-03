// let arr = [
//     'Illia',
//     'Alina',
//     'Polina',
//     {
//         city: 'Cherkasy',
//         street: 'Paliohy',
//     },
//     true,
//     function(){
//         console.log('Hello, world!');
//     }
// ];
// console.log(arr);
// console.log(arr[3].city);
// arr[5]();
// console.log(arr.length);

// let arrNew = arr;
// console.log(arrNew);
// arr[0] = 'Nikolay';
// console.log(arr[0]);
// arr[7] = 79;
// console.log(arr[7]);

// let arr = ['Illia', 'Alina', 'Polina',];
// let arrNew = arr.slice(0, 1);
// console.log(arrNew);
// let arrOne = arr.slice();
// console.log(arrOne);
// let arrTwo = arr.concat('Nikolay');
// console.log(arrTwo);
// console.log(arr.indexOf('Illia'));
// console.log(arr.includes('Alina'));

// let arr = [
//     {name:'Illia', age: 26},
//     {name:'Alina', age: 29},
//     {name:'Polina', age: 24},
// ];

// let result = arr.find(function (item, index, array) {
//     return item.age === 29; 
// });

// console.log(result);

// let resultTwo = arr.findIndex(item => item.age === 24);
// console.log(resultTwo);

// let filterResult = arr.filter(function(item, index, array){
//     return item.age >= 29;
// });

// console.log(filterResult);

// let arr = ['Illia', 'Alina', 'Polina',];

// let result = arr.map(function(item, index, array){
//     return item[0];
// });

// let resultOne = arr.map(item => item[0]);
// console.log(result);
// console.log(resultOne);
// console.log(arr.reverse());

// let str = 'Illia,Alina,Polina';

// let arr = str.split(',');
// console.log(arr);

// let arr = ['Illia', 'Alina', 'Polina',];
// let str = arr.join(',');
// console.log(str);


// let arr = ['Illia', 'Alina', 'Polina',];
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// } 

// for (let arrItem of arr) {
//     console.log(arrItem);
// }


// let arr = ['Illia', 'Alina', 'Polina',];

// arr.forEach(function(item, index,  array){
//     console.log(`${item} stand on ${index} of ${array}`);
// });

// arr.forEach((item, index, array) => {
//     console.log(`${item} stand on ${index} of ${array}`);
// });


// let arr = [1, 2, 3, 4];

// let resultOne = arr.reduce(function (previousValue, item, index, array){
//     return item + previousValue;
// }, 0);

// console.log(resultOne);

// let arr = ['Illia', 'Alina', 'Polina',];
// let newArr = arr;
// newArr.push('Nikolay');
// console.log(arr.length);

let arr = ['Vanya', 'Ishtwan'];

arr.push('Olya');
console.log(arr);