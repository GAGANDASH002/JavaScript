// let name = '    Gagan   '

// console.log(name.truelength)

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

// prototype is injected to all objects i.e array,string,object etc.
Object.prototype.Gagan = function(){
    console.log('Gagan is present in all objects')
}

// prototype is injected into arrays and not all objects
Array.prototype.heyGagan = function(){
    console.log('Hey its Gagan')
}

// heroPower.Gagan()
// myHeros.Gagan()

myHeros.heyGagan()
// heroPower.heyGagan()

// *******Inheritance*******


const User = {
    name: "abc",
    email: "abc@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // can access all properties of TeachingSupport
    __proto__: TeachingSupport
}

// Teacher can access all properties of User
Teacher.__proto__ = User


// modern syntax

// TeachingSupport can access all properties of Teacher
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "Ronaldo     "

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"SIUUUUU  ".trueLength()