
//Some Valid methods to declare variables
let a = 5;
let b = 6;
let c = a+b;
console.log(c) 

let _fruit = 'banana';
console.log(_fruit)

let $deviceName = "Laptop";
console.log($deviceName)

//multiple variables at multiline style 
let user = 'John',
  age = 25,
  message = 'Hello';

  console.log(`${message} ${user} you are still looking very young just like ${age}` )

// Some invalid methods to declare variables 

let 123fruitName = 'apple';
console.log(123fruitName)


let my-device = 'headphone';
console.log(my-device)


//some reserved variables or say keywords which we cannot use as variables

let return = 'cardboard';
console.log(return)


let function = 1;
let class = 2;

console.log(function + class)


//Var - In this re-declaration & updation is possible & have global scope

var isName = "aakash"; 
var isName = "ravi";

console.log(isName);


//const - re-declaration & updation both are not possible after declaring the costant variable...have block level scope

const myName = "aakash";
const myName = "vinay"; // this is not possible when we are declaring a variable constant

console.log(myName);

