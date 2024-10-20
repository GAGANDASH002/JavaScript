for(var i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i)
    },100)
}
//var has function scope or global scope (if not inside a function), not block scope (like inside loops or conditionals).

for(let i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i)
    },100)
}
//let has block scope, meaning a new i is created for each iteration of the loop.