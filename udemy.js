"use strict";

// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);  //Прямых констант в JS не бывает

// {
//     let result = 50;
// }

// console.log(result);

// _______________________________________________________________________

// ТИПЫ ДАННЫХ

// let number = 4.6;
// console.log(4/0);
// console.log('string'*9);

// const person = "Alex";

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);


// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name);

//  const arr = ['belarus.jpg', 5, {}, []];

//  ____________________________________________________________________

// ОБЦЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);


// const answers = [];

// // answers[0] = prompt("Как ваше имя?", "");
// // answers[1] = prompt("Как ваша фамилия?", "");
// // answers[2] = prompt("Сколько вам лет?", "");

// console.log(typeof(answers));
// console.log(typeof(null));
// ____________________________________________________________________

// ИНТЕРПОЛЯЦИЯ

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);
// ____________________________________________________________________

// ОПЕРАТОРЫ JS

// console.log(4 + +'5');

//  let incr = 10;
//  let decr = 10;

//  ++incr;
//  --decr;

//  console.log(++incr);
//  console.log(--decr);

// Остаток от деления
//  const remainder = 150 % 12;
//  console.log(remainder);

//  &&(и) и ||(или)
//  const isChecked = false;
//  const isClose = false;
 
//  console.log(isChecked || isClose);

//  !(отрицание)

// const isChecked = false;
// const isClose = false;
 
// console.log(isChecked || !isClose);

// console.log(2 + 2 * 2 == '6');
 
// УСЛОВИЯ

// if (4==9) {
//  console.log('Ok');
// } else {
//     console.log('error');
// }

// if (num < 49){
//     console.log('errror');
// } else if (num > 100){
//     console.log('много');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('errror');

// const num = '50';

// switch (num) {
//     case '49':
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '51':
//         console.log('в точку');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// const test = true;

// // if(test != true) {
// //     console.log('Верно');
// // } else {
// //     console.log('Неверно');
// // }

// (test != true) ? console.log('Верно') : console.log('Неверно');

// let a = 1;
// let b = 5;
// if(a > 2 && a < 11 || b >= 6 && b < 14){
//     console.log('Верно');
// }else {
//     console.log('Неверно');
// }


// let num = 1;

// switch(num) {
//     case 1:
//     console.log('зима');
//     break;
//     case 2:
//     console.log('весна');
//     break;
//     case 3:
//     console.log('лето');
//     break;
//     case 4:
//     console.log('осень');
//     break;
// }

// let str = 'abcde';
// if(str[2] == 'a'){
//     console.log('Yes');
// }else{
//     console.log('No');
// }

// let str = '123123';

// if(str[0] + str[1] + str[2] == str[3] + str[4] + str[5]){
//     console.log('yes');
// }else{
//     console.log('no');
// }


// ЦИКЛЫ

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 10; i++) {
//     if (i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
    
// }