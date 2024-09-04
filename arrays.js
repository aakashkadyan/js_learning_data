//array is a collection of items

let marksArray = [98,67,78,89,87,56];
console.log(marksArray);



//we can change the value of an array elements
marksArray[2] = 66;
console.log(marksArray);


//to iterate over all items 

for (let idx = 0; idx < marksArray.length; idx++){

    console.log(marksArray[idx]);
}

//using for-of loops

for (let element of marksArray){

    console.log(element);
}


//average of marks
let sum =0;
let arrLen = marksArray.length;

for (let el of marksArray){

    sum = sum + el;
    
}
console.log(`Average of Marks is : ${sum/arrLen}`);


//Array methods


let friendsName = ["ravi", "vinay", "vishal","ram","deepak"];

friendsName.push("sonu"); //push method 
let deletedName = friendsName.pop(); // pop method will remove the name from end
console.log(friendsName); //pop method will delete last element from the array

friendsName.shift(); //it will remove the name from starting
console.log(friendsName);
console.log(deletedName);


friendsName.splice(2,2,"shyaam","name");// it will remove the elements from given index value and can add new element at place
console.log(friendsName);


