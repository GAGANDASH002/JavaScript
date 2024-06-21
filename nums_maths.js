const score = 400
console.log(score)

const bal = new Number(100.25)
console.log(bal)

console.log(bal.toString().length)
console.log(bal.toFixed(1))

const anotheBal = 123.9392

console.log(anotheBal.toPrecision(4))

const hundreds = 100000000

console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 console.log(Math);
 console.log(Math.abs(-4));
 console.log(Math.round(4.6));
 console.log(Math.ceil(4.2));
 console.log(Math.floor(4.9));
 console.log(Math.min(4, 3, 6, 8));
 console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);// to ensure that minimum value starts from 1
console.log(Math.floor(Math.random()*10) + 1);


// formula for getting a random value above a minimum value
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 