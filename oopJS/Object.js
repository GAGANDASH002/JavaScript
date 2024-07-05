function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5))

// proves that function is also an object
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)


function createUser(username,score){
    this.username = username;
    this.score = score
}

// adds properties 'increment' and 'printMe' to the prototype of the function createUser()
createUser.prototype.increment = function(){
    this.score++ // increments the score of the current context
}

createUser.prototype.printMe = function(){
    console.log(`Score is : ${this.score}`)
}

const tea = new createUser('chai',25)
const coffee = new createUser('coffee',250)

tea.printMe()
coffee.increment()
console.log(coffee.score)


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/