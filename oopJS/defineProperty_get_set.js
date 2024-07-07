function User (email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const user = new User('abcd@gmail.com','123')
console.log(user.email)