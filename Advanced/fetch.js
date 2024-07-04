//async function getAllUsers(){
//    try{
//         // waiting for data to be fetched from the URL
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    // parsing into JSON format and using await is necessary as parsing also takes time
//    // if await is not added the the promise remains pending
//    const data = await response.json()
//    console.log(data)
//    } catch(error){
//        console.log('E:',error)
//    }
//}

//getAllUsers()
 
// Alternate syntax

fetch('https://api.github.com/users/GAGANDASH002')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))