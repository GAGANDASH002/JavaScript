// Object literal

const user = {
    username: "Gagan",
    loginCount : 7,
    signedIn : true,

    getUserDetails(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`);
        console.log(this) // points to current context i.e current object
    }
}
  
// console.log(user.username)
// console.log(this); 
console.log(user.getUserDetails())

// *********Constructor Function***********

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.hello = function(){
        console.log(`Hello , ${this.username}`)
    }

    return this
}

// if new keyword is not used then separate context are not created
// and data gets overriden

const userOne =  new User("hitesh", 12, true)
const userTwo =  new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor)
console.log(userOne instanceof User)