console.log("one");
console.log("two");
console.log("three");

function hello (){

    console.log("hello");

}

setTimeout(hello,5000);


callback

function sum(a,b) {

    console.log(a+b);

}

function addition (a, b, sumCallback) {


    sumCallback(a,b);
}

addition(1,2, sum)




const hello_2 = () =>{

    console.log("hello i am here!!");

}

setTimeout(hello_2, 4000)



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

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am in Promise!!");
        resolve("success!");
        //reject("error....");
});
};

let promise = getPromise();

promise.then((res) =>{                            // we use then method once it is resolved...
    console.log("fullfilled  : ", res);
});

promise.catch((err) =>{                          // we use catch method once it is rejected...
    console.log("Error occured not fullfilled : ", err)
});



//aync await 


function getAllData(dataId) {

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("got data", dataId);
            resolve("got data sucessfully");
        }, 2000);
    });
}

async function data(){
    await getAllData(1);
    await getAllData(2);
    await getAllData(3);
}

data();