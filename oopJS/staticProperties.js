class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    // static keyword doesn't allow access of static method to any object
    static createId(){
        return `123`
    }
}


const newUser = new User("Pete")
console.log(newUser.createId())

class Teacher extends User{
    constructor(email,username){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("Rohit","wxyz@gmail.com")
console.log(teacher.createId())

// Static properties cannot be directly accessed on instances of the class. 
// Instead, they're accessed on the class itself.