// airthmatic operators +,-, %, * etc.

let a = 5;
let b = 5;

console.log(" a + b = ", a + b);
console.log(" a - b = ", a - b);
console.log(" a / b = ", a / b);
console.log(" a * b = ", a * b);
console.log(" a % b = ", a % b);

//urinary operators like ++, -- 

a++; // means a = a+1;
console.log('After a++ a is now  : ', a);
console.log('After --a a is now  : ', --a);


//asignment operators
let c = 4;
c += 1; // here C is increasing by one
c -= 1;
c *= 2;
console.log(c);


//comparision operator
console.log("a == b : ", a == b);

let d = 5;
let e = "5";

console.log("d === e : ", d === e); //it matches type also when comparing two values and return boolena value

console.log(d > e); //greater sign 



//Logical operators 


let f = 5;
let g = 6;

let condtion1 = g<f;
let condtion2 = g === 6;

console.log("Condtion 1 && Condition 2 is : ", condtion1 && condtion2); // In Logical AND, we get True only if both conditions are true
console.log("Condtion 1 || Condition 2 is : ", condtion1 || condtion2); // In Logical if only one condition is True then it will give true
console.log("Condtion 1 ! Condition 2 is : ", !(condtion2)); // gives always opposite result "not off" 

//Ternary operators ?



let age = 25;

let result = age > 18 ? "He is adult" : "He is not an adult";


console.log(result);