// Can we override the value of PI in JS??


// gets the property of pi from Math object
const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

// We can't override the value of PI as its enumerable property can't be set to true

// Object.defineProperty(Math, "PI" ,{
//    writable : true
// })

console.log(descriptor)


const chai = {
    name : 'masala chai',
    price : 200  ,
    isAvailable : true,

    orderChai: function(){
        console.log('chai nahi ban payi')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"))

// can also set our own properties

// Object.defineProperty(chai , 'name', {
//     writable : false,
//     enumerable : false
// })

console.log(Object.getOwnPropertyDescriptor(chai , "name"))

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key}:${value}`)
}
}