// console.log("one");
// console.log("two");
// console.log("three");

// function hello (){

//     console.log("hello");

// }

// setTimeout(hello,5000);


//callback

// function sum(a,b) {

//     console.log(a+b);

// }

// function addition (a, b, sumCallback) {


//     sumCallback(a,b);
// }

// addition(1,2, sum)




// const hello_2 = () =>{

//     console.log("hello i am here!!");

// }

// setTimeout(hello_2, 4000)



//callback hell----
function getData(dataId, getNewData) {

    setTimeout (() =>{
        console.log("Data", dataId);
        if (getNewData){
            getNewData();
        }
    }, 3000);
}
//callback hell or nested callbacks...when a function as an argument to another function
getData(1, ()=>{

    getData(2, ()=>{

        getData(3, ()=>{

            getData(4);
        });
    });
});



//promises...


let promise = new Promise((resolve, reject) =>{
    console.log("I am in Promise!!");
    resolve("success!");
});

//then and catch...