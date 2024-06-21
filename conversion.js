
let isLoggedIn = "Gagan"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber= 44
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//      ********Operations*********

 console.log("1" + 2);//12
 console.log(1 + "2");//1
 console.log("1" + 2 + 2);//122
 console.log(1 + 2 + "2");//32


console.log(+true);//1
console.log(+"");//0



// ********************************************

// Stack(primitive) , Heap(non-primitive)

let name="Maverick"// goes into stack as a copy

let anothername = name;
anothername="Pete"// top of stack is now pointed onto anothername
console.log(anothername)
console.log(name)


// Heap (no copy received but a reference is received)
let userOne={
    email: "user@gmail.com",
    password: 12345
}

let userTwo = userOne

userTwo.email = "abcd@gmail.com"


// same output as a reference is received and content has been changed in both
console.log(userOne.email)
console.log(userTwo.email)
