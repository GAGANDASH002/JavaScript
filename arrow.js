const user=
{
    name : "Gagan",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.name},welcome to websitee`);
    }
}


user.welcomeMessage()
user.name = "Sam"
user.welcomeMessage()//this keyword points to current context 

function hello(){
    let username = "Gagan"
    console.log(this.username)
}

hello()// undefined , this gives current context in object reference and not within a function or => function


// *************Arrow Function***************

//const addTwo = (num1,num2) =>{
 //   return num1+num2
//}

//Implicit return

const addTwo= (num1,num2) => (num1 + num2)

console.log(addTwo(2,3))


