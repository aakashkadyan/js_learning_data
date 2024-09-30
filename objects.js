//there is an object which having non premitive datatype..and it contains values in key value pairs


let employee ={

    'name': 'shivam',
    'salary': 10000,
    'company':'abc',
    'email':'abc@email.com'
};
console.log(employee['name']);

employee.name = 'ravi';
console.log(employee['name']);
console.log(employee.salary);