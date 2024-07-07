const User = {
    _email : 'abc@gmail.com',
    _password : '123',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
 
// using Factory function
const user = Object.create(User)
console.log(user.email) 