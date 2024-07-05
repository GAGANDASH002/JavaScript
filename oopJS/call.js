function setUsername(username){
    this.username = username
}

function createUser(username,email,password){
    // call() is used to keep holding the reference of the specified function
    // this is used within call to give the context of the function createUser() that is calling setUsername()
    setUsername.call(this , username)

    this.email = email
    this.password = password
}

const obj = new createUser('Gagan','abc@gmail.com','1234')
console.log(obj)