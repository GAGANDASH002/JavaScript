const userEmail = []

if (userEmail) {// assumed it is a true value
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// *****************Falsy values********************
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// *****************Truthy values*******************
// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): checks for null & undefined

let val1;
 
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 20
val1 = null ?? 10 ?? 20 // in this case , it assigns the first value received
console.log(val1) 

// Ternary Operator

const price = 100

price <80 ? console.log("less than 80"):console.log("greater than 80")