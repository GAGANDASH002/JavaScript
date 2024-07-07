// getters and setters are used if we don't want to give access of
// properties to everyone or want to perform action like encryption,
// restricting access or displaying some message when the property is accessed.

class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    
    set email(value){
        this._email = value
    }

    get  password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const hello = new User('abc@gmail.com','abc')
console.log(hello.password)
console.log(hello.email)

// if a getter is defined then a setter also must be defined
// if a value is set in the constructor as well as constructor function then,
// a RangeError: Maximum call stack size exceeded is thrown , hence we need to
// change name of variables.