// let firstPart = "likes";

// let userInfo = {
//     name: 'Illia',
//     age: 26,
//     address: {
//         city: 'Czerkasy',
//         street: 'Paliohy',
//     },
//     "58": 'Znaczenije',
//     showInfo(){
//         console.log(`${this.name}`);
//     }
// };

// console.log(userInfo[58]);

// let user = userInfo;
// userInfo = null;
// user.showInfo();
// console.log(userInfo[58]);

// let key = 'name';
// console.log(userInfo[key]);

// function makeUserInfo(name, age){
//     return {
//         name: name,
//         age: age,
//     };
// }

// let user = makeUserInfo('Illia', 26);
// console.log(user);

// let userInfo = {
//     name: 'Illia',
//     age: '26',
//     address: {
//         city: 'Cherkasy',
//         street: 'Paliohy',
//     },
//     showInfo() {
//         console.log(`${this.name}, ${this.age} лет. Адресс: г.${this.address.city}, Улица: ${this.address.street}`);
//     }
// };
// userInfo.showInfo();

// for (let key in userInfo){
//     // console.log(key);
//     console.log(userInfo[key]);
// }

// let user =Object.assign({}, userInfo);

// user.name = "Alina";
// user.age = 29;

// console.log(user);
// console.log(userInfo);
//  console.log(userInfo);

//  userInfo.age = 26;

//  console.log(userInfo);

//  userInfo.address = {
//      city: 'Cherkasy',
//      street: 'Paliohy',
//  };

//  console.log(userInfo.address);

//  delete userInfo.age;

//  console.log(userInfo);

//  userInfo.name = 'Alina';

//  console.log(userInfo);

// let user = userInfo;

// user.age = 29;
// delete user.address;

// console.log(user);
// console.log(userInfo);

 
// function UserInfo(name){
//     this.name = name;
//     this.age = 27;
// }

// console.log(new UserInfo('Illia'));
// console.log(new UserInfo('Alina'));

let userInfo = {

};
userInfo.name = 'Illia';
userInfo.age = 26;
userInfo.name = 'Alina';
delete userInfo.name;
console.log(userInfo);