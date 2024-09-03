//string length
let str = "aakash is leanring javascript";
console.log(str.length);


//template literals we use backticks for string and a dollar sign to enter any variable data...

let obj = {

    "name": "aakash",
    "rollNo": 29
};

console.log(`The name of student is ${obj.name} & roll no is ${obj.rollNo}`);

// also we can add expressions to template literals...
//it will calcutlate the values in curly brcaces and then convert it into to string

console.log(`the calculation : ${1+23+34}`);


//escape characters in strings like next line, tabs etc

console.log("I am learning javascript\nit's very interesting programming language!!");


//string methods, these methods will return a new string they will not change the original string

let string = "I am Going To Delhi";
let newStr = "                 I am Going To Mumbai               ";
let newstr2 = "hello ";

let res = newstr2.concat(string); // this method will concatinate the strings..

console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(newStr.trim()); // it will remove white spaces from starting and at the end
console.log(string); // this string will not changed as these are immutable
console.log(newstr2.slice(1,4)); //slicing method will slice the string on index basis
console.log(res);
console.log(newstr2.replace("h", "m")); // this is a replace method this will not change original string but we can replace any value


//enter username from user and add a @ with string and also it's length ex: @aakash6 

let str3 = prompt("enter the name:")
console.log(`the user name is: @${str3+str3.length}`);

