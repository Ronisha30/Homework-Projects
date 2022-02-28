document.write('Learning Promises');


new Promise((resolve,reject) =>{
    setTimeout (()=> resolve('What is next'), 5000);
})
    .then(message => document.write(message));


