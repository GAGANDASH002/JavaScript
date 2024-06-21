// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // returns Object

//let myCreatedDate = new Date(2023, 0, 23,5,3,30)
//let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleDateString());

let  myTimeStamp = Date.now();

console.log( myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) // converts to seconds

let newDate = new Date()
console.log(newDate);// returns current date
console.log(newDate.getMonth() + 1);// gets current month
console.log(newDate.getDay());// gets day of the week

// can customize the LocaleString 
newDate.toLocaleString('default', {
    weekday: "long",
})

