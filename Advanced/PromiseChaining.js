
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : 'abcd' , password : '1234'})
        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})

// Chaining - if a value is returned inside a then() method
// it can be accesed only upon chaining it with another then() method

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username)
}) 
.catch(function(err){ // checks for any error
    console.log(err)
})
// will always execute irrespective of error or not
.finally(() => console.log('The promise is either resolved or rejected'))