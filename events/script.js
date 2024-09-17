//In this file i have tried to add few frequntly used events and EventListener
let btn1 = document.querySelector("#btn");
let myBtn = document.querySelector("#mode");
let currentMode = 'light';

myBtn.addEventListener('click',() => {
    //console.log("you are trying to change mode....!!")

    if (currentMode === 'light'){

        currentMode = 'dark';
        document.querySelector('body').style.backgroundColor = "black"; 
    }
    else {

        currentMode = 'light';
        document.querySelector('body').style.backgroundColor = "white";
    }
    console.log(currentMode);

});


btn1.onclick = () =>{

    console.log("this button was clicked!!!!")
};


let div = document.querySelector('div');

div.onmouseover =() =>{

    console.log("you are on Div!!!!!")
};

eventListener

btn1.addEventListener("click", (evt) => {
    console.log("button was clicked!!!");
    console.log(evt.type);

});