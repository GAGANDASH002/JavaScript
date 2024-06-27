// if
const isUserLoggedIn = true
const temperature = 41

if ( temperature < 50){
    console.log("less than 50")
}
else{
    console.log("greater than 50")
}

if (2=="2"){ 
       console.log("executed");
}

// strict equal
if (2==="2"){
    console.log("executed");
}

// <,>,<=,>=,==,!=,===


const score = 100

if(score<200){
    let power = "fly"
    console.log(`User Power: ${power}`);
}

// console.log(`User Power: ${power}`)//error as power doesn't have global scope

// Short hand Notation
const bal = 1000

if (bal>500) console.log("test");


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}