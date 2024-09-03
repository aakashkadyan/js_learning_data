//FOR loop..

for (i=0; i<7; i++) {
    console.log(i+1);

}
for (let x =1; x<=5;x++){

    console.log("aakash");
}

//sum of 1st 10 numbers 

let sum = 0;
for (let i =0; i<=10;i++){

    sum = sum+i;
}
console.log("sum = ", sum);


//while loop......

let i =0;
while(i<=5){

    console.log(i);
    i++;

}


// do while loop..
let i = 0;
do {
    console.log("i = ",i);
    i++;
} while(i<=5);


//for-of-loop
let str = "i am learning javascript";

for(let val of str){

    console.log("value is =" ,val);
}


//for-in loop

let student = {"name":'aakash', "age":26, "roll no":23, "pass": true};

for (let key in student){

    console.log("keys are : ", key, "-", student[key])
}


//guess the correct number using prompt 

let gameNum = 25;
let guessNum = prompt("Enter the number: ");

while(guessNum != gameNum){
    guessNum = prompt("You entered the wrong number, Guess again :");

}

console.log("Hey Congratulation you guess the correct Number!!!!!!!");