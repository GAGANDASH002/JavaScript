// ES6

class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User('Gagan','abc@gmail.com','1234')

console.log(user.encryptPassword());
console.log(user.changeUsername());

// behind the scenes

function newUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

newUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

newUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const newuser = new newUser("Tanmay", "xyz@gmail.com", "123")

console.log(newuser.encryptPassword());
console.log(newuser.changeUsername());