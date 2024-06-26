// for of

//["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)// returns values of the array
}

const string = "Hello World"

for (const str of string) {
    console.log(str)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")// doesn't takr duplicate value

console.log(map);

// iterating a map
for (const [key, value] of map) {
     console.log(key, ':-', value);
}

// iterating an object is using for of loop is not possible
//const myObject = {
    //game1: 'NFS',
    //game2: 'Spiderman'
//}

//for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
//}


// for in

// iterating object can be done using for in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// iterating array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);//returns the index of the array
}


// iterating map is not possible using for in loop

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

