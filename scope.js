
// Block Scope

if(true)
    {let a = 10
const b = 20
var c= 30 // doesn't follow block scope
}

//console.log(a)
//console.log(b)
console.log(c)


// Nested Scope

function one(){
    const user = "Gagan"

    function two(){
        const website = "google"
        console.log(user)
    }
    // console.log(website)
    two()
}

one()

if (true){
    const user = "Gagan"
    if(user=="Gagan"){
        const website = "google"
        console.log(user+website)
    }
    //console.log(website)
}

//console.log(user)

// *************************************************** 

console.log(addOne(5))//gives output

function addOne(num){
    return num + 1
}

addTwo(5)//gives error
const addTwo = function(num){
    return num + 2 
}

