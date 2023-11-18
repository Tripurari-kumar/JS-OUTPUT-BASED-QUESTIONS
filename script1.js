// JS OUTPUT BASES QUESTIONS

console.log('Q_1');

function showData() {
  console.log('variabale name is', name);
  console.log('variable age is', age);
  var name = 'Noren red';
  let age = 999;
}

//----------> showData();

//Output_Q_1 :- Hoisting moving the delaration on top of the function
// variabale name is undefined
// script.js:8 Uncaught ReferenceError: Cannot access 'age' before initialization
//     at showData (script.js:8:34)
//     at script.js:13:1

console.log('Q_2');

for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5);
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5);
}

//var declaration moves on top of the function whereas
//let variable will be redeclare every time of the loop interation

// 4  4  ( 4 times 4 ) for var loop
// 0
// 1
// 2
// 3

console.log('Q_3');

const income = {
  skills: 108,
  monthly() {
    return this.skills * 108;
  },
  yearly: () => 888 * this.skills,
};

console.log(income.monthly());
console.log(income.yearly());

// monthly normal func, this will point to parent object;
// yeraly arrow func, this will point to parent  function global object here

// 11664
//  NaN

console.log('Q_4');

console.log(+true);
console.log(!'javascript');

// 1
// false

console.log('Q_5');

const code = {
  type: 'web',
};

const reactJS = {
  name: 'js',
  web: 'true',
};

console.log(reactJS[code.type], reactJS[reactJS['type']], code.type.web);

// 'true' undefined undefined

console.log('Q_6');

let a = { greeting: 'hi' };
let z = a;

z.greeting = 'bye';

console.log(a.greeting);

//bye
//as object is of reference type if we directly copy object it's reference is copied!
// to avoid this use {...a} if object is not nested, otherwise use object.assign(a)  and structuredClone(a);

console.log('Q_7');

let k = 108;
let b = new Number(108);
let c = 108;

console.log(k == b);
console.log(k === c);
console.log(k === b, typeof b);
console.log(b === c);

// true
// true
// false 'object'
// false

// as == checks on primitive values not type and typeof b is object as new Number(108)

console.log('Q_8');

class Lizard {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'orange' } = {}) {
    this.newColor = newColor;
  }
}

const tommy = new Lizard({ newColor: 'orange' });

//-----------> console.log(tommy.colorChange('blue'));

// script.js:125 Uncaught ReferenceError: newColor is not defined
//     at new Lizard (script.js:125:21)
//     at script.js:129:15

// as colorChange method is static in class ,
//static methods are not available on the class instances only avilable on class
//need to call Lizard.colorChange('blue') directly on class to make it workable

console.log('Q_9');

// 'use strict'; need to add in top to prevent

let message;

massage = { data: [24] }; // missSpell

console.log(massage);

// {
//     "data": [
//         24
//     ]
// }

// all undeclared variable will be declared by itself as it's JS and add it in window scope
// to Avoid this add "use strict"
// after adding 'use strict'

// script.js:145 Uncaught ReferenceError: massage is not defined
//     at script.js:145:9

console.log('Q_9');

function showModal() {
  console.log(showModal.timeout);
}

showModal(); // ?

showModal.timeout = 200;

showModal.timeout = 100;

showModal(); // ?

// undefined
// 100

// IN  JS function will behave as a object
// in first we haven't set any key to showModal function which will act as object in javascript
// in second we have set key to the showModal function

console.log('Q_10');

// what are three phases of event propogation in js

// ans: Capturing > targetting> bubbling

console.log('Q_11');

function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Human('Tripurari', 'kumar');

// Human.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

// script.js:204 Uncaught TypeError: member.getFullName is not a function
//     at script.js:204:20

//as Human function is just like an object and we hae just added a key in object
//and getFullName is not accessable in member variable

// TO_FIX
//need to add getFullName through prototype

Human.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

//Tripurari kumar

console.log('Q_12');

function Man(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}

const MrX = new Man('Mr.', 'X');
const Rock = Man('The', 'Rock');

console.log(MrX);
console.log(Rock);

// {
//     "firstName": "Mr.",
//     "lastName": "X"
// }
//undefined

// whenever we call a function with new keyword then its called a constructor call
// And that function will always return a object
//as Rock function is not returning anything

console.log('Q_13');

function sum(a, b) {
  return a + b;
}

console.log(10, '10');

//1010 as a string

console.log('Q_14');

// Tagged template litral concept

function getSummary(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const fname = 'Tripurari';
const age = 878;

getSummary`${fname} age is ${age}`;

// ['', ' age is ', '']
// Tripurari
// 878

//called in a special way
// first argument is {one} is the array of strings without using the varibales
// second variable is the first varible in the template literal
//thirs varible is the second varibale in the template literal

console.log('Q_15');

function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult');
  } else if (data == { age: 18 }) {
    console.log('you are still an adult');
  } else {
    console.log('hmmm, no age');
  }
}

checkAge({ age: 18 });

//hmmm, no age

// first one will fail as javascript compares object by reference
// second will aslo fail as value of reference will be different even if type is same object

console.log('Q_16');

function getType(...args) {
  console.log(typeof args);
}

getType(18);

//object

// 18= ...args
// [18]= [..args]
// [18]= args
// typeof [18]= typeof args
// object
// to check it is array or not we can use  inbuilt method Array.isArray()

console.log('Q_17');

function recieveAge() {
  //  ----> 'use strict';
  salary = 134;
  console.log(salary);
}

recieveAge();

// script.js:320 Uncaught ReferenceError: salary is not defined
//     at recieveAge (script.js:320:10)
//     at script.js:324:1

// As use Strict  enforces that we don't use ay undeclare variables
// use to show accidental errors

console.log('Q_18');

var numsame = 18;
var numsame = 24;

console.log(numsame);

// if we are using var keyword then the last var value is stored in the global object not for let and const

console.log('Q_19');

const obj1 = { 1: 'a', 2: 'b', 3: '7', 9: '0' };
const set = new Set([1, 2, 3, 4, 5]);

console.log(obj1.hasOwnProperty('1'));
//true
//as object keys are always stored as string even if we pass numbers

console.log(obj1.hasOwnProperty(1));
//true
// as js will check by  == double equal here for key to that's why true

console.log(set.has('1'));
//false
// there is no concept of keys here
// values are checked direct  and there are no string in set and here === is used as no keys

console.log(set.has(1));
//true
// 1 is there in set 1===1

console.log('Q_20');

const obj2 = { a: '1', b: '2', a: '5' };

console.log(obj2);

// {
//     "a": "5",
//     "b": "2"
// }

//last value of a is taken

console.log('Q_21');

String.prototype.youAreAmazing = () => {
  return "you're  amazing";
};

const who = 'Tripurari';

console.log(who.youAreAmazing());

// you're  amazing

//here are attaching a method on String class (object) through prototype
//this youAreAmazing will be avilable in every instance of string

console.log('Q_22');

const x = {};
const y = { key: 'b' };
const zz = { key: 'c' };

x[y] = 222; // [object Object]
x[zz] = 999;

console.log(x[y]);

//999

//in javascript objects keys are always converted into strings
// here object y and zz will be converted to sting as [object Object]
// and as both are same string x[zz] will be overridden

console.log('Q_23');

const lang = { name: 'ReactJS' };

function getLib(ver) {
  return `${this.name} version ${ver}`;
}

console.log(getLib.call(lang, 18));
console.log(getLib.bind(lang, 18));

// ReactJS version 18
// ƒ getLib(ver) {
//   return `${this.name} version ${ver}`;
// }

//first one is calling that why function is getting called
//second one is binding hence function defination is returned with the contect of lang
//which can be called in future

console.log('Q_24');

function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());

//number as its an IIFE (IMMETIDIATELY invoked function expression)

console.log('Q_25');

console.log(typeof typeof 1);

//string

//right to left execution

console.log('Q_26');

const numbers = [1, 2, 3];

numbers[10] = 10;
console.log(numbers);

// [
//     1,
//     2,
//     3,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     10
// ]

// in console
//  [1, 2, 3, empty × 7, 10]

// as JS is friednly language in C++ or java app crash

console.log('Q_27');

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

// 1
// undefined
// 2

//try has error thrown catch will execute in catch box we are refering the inner x that's why it is 1 and assiged to 1
// whereas at 483 line x it is outer x which is not defined yet
// y was outer y and was reassigned as 2 therefore its value changed to y, no inner y was referenced that's why!

console.log('Q_28');

console.log(20 + 30 + '10');

//5010

//left to right asscoiativity for addition therefore 20+30 first then + '10' concat

console.log('Q_29');

function getMessage() {
  throw 'Hello world!';
}

function sayHello() {
  try {
    const data = getMessage();
    console.log('worked!', data);
  } catch (e) {
    console.log('an Error!', e);
  }
}

sayHello();

// 'an error:' 'Hello World'

//as we are throwing a message as error it will got to catch

console.log('Q_30');

console.log(parseInt('10+2'));
console.log(parseInt('7FM'));
console.log(parseInt('FM'));

//10
//7
//NAN

// if we pass any invalid string to parseInt it will check if there is antthing in valid in invalid string
// so that it can convert it into integer
//integer must be in starting,  not in middle not at end
