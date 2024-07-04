
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    // awaiting for response from the created promise
    // await keeps waiting for a response even if an error is thrown
    // hence we need to use try catch block for handling the error
    try{
    const response = await promiseFive
    console.log(response)
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()
