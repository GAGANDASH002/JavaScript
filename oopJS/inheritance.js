class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`)
    }
}

const teacher = new Teacher('Rakesh','abcd@google.com')
teacher.addCourse()
const user = new User('Mark')
user.logMe()