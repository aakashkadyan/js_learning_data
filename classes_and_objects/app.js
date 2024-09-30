//prototype 
const employee = {

    calTax () {
        console.log("tax is 30 %");
    }


};

const name = {

    'salary': 10000
};

name.__proto__ = employee 


//classes and objects 

class MyCar {

    color (){ //function
        console.log("Blue");
    }

    milage (){ // fucntion
        console.log("Milage is 30Km/L");
    }

    setBrand (brand){
        this.brand = brand;
    }
};

let alto = new MyCar (); //creating objects or constructor 
alto.setBrand("Maruti Suzuki");
let swift = new MyCar ();
swift.setBrand("Honda");


// inheritance - means use properties of parent class

class Person {

    eat (){
        console.log("Eat");
    }
    sleep (){
        console.log("Sleep");
    }
};

class Engineer extends Person{

    work (){
        console.log("work!! ");
    }
};

let perObj = new Engineer ();