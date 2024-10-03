//there is an object which having non premitive datatype..and it contains values in key value pairs


let employee ={

    'name': 'shivam',
    'salary': 10000,
    'company':'abc',
    'email':'abc@email.com'
};
console.log(employee['name']);

employee.name = 'ravi'; // update name with ravi
console.log(employee['name']);
console.log(employee.salary); 
employee.salary = 12000; // updated salary
console.log(employee.salary);
employee.phone = '888888888'; // pushed a new key with value
delete employee.phone; // delete an object
delete employee.email;



for (const key in employee){ // for in loop
    //console.log(key); // only keys
    console.log(`${key}: ${employee[key]}`); // print key with values using for in loop
}



// referencing of objects and variables..

let user_1 = {'name':'abhinav'};
let admin = user_1
console.log(user_1.name);
console.log(admin.name);


//cloning of objects


let user_2 ={'name':'ravi','age':25};
let clone ={}
for (let key in user_2){

    clone[key] = user_2[key];
}
console.log(clone.name);