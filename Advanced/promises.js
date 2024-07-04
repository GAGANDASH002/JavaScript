// Promise Creation

const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls , cryptography
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

// Promise Consumption

promiseOne.then(function(){// .then is connected to resolve()
    console.log("promise consumed")
})

// Alternate Syntax
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : 'Mav' , email : 'abc@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)// parameter passed in resolve() are directly accesible here
})
