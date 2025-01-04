const file = require ('fs');

file.writeFile("test.text",'I am writting in to a file', (err) =>{


    if (err)console.log("there is an error!!")
        
    else console.log("file created successfully!!")    
    
});