//Functions are the main “building blocks” of the program. 
//They allow the code to be called many times without repetition.



function fruitName (name, car){

console.log(name, car)

}

fruitName("apple","maruti")



function messageTest(name){

    let message = `Hello ${name} how are you?`
    console.log(message)
}

messageTest("aakash")


//let number = prompt("Enter number");
function checkNum(number){

    let x = `Your Number is :  ${number}`;
    console.log(x)

}


checkNum(89)


function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

  checkAge(19)


//Arrow functions

const addNum = (a,b) => {

  z = a+b;
  console.log(z)

}  

addNum(4,5)


//Foreach Loop works for arrays only...

arr = ['mumbai','pune','delhi','kanpur'];
arr.forEach((element,idx,arr) => {
  console.log(element.toUpperCase(),idx,arr);

});

//square a number using foreach loop
array = [1,2,3,4]
array.forEach((ele) =>{
  console.log(ele*ele);
});
