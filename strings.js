let string = "Hello";

let string2 = 'Hello I\'have keen interest in sports';//use backslash as escape sequence

let hello='Hello!';
let welcome="\"Welcome to Js\"";

let outputMsg=hello+welcome;
console.log(outputMsg);//string concatenation

let num="123";
console.log(Number(num));//converts string to number

let num1= 245;
console.log(num1.toString());//converts to string

//Template Literals
console.log(`${hello + welcome} your score is ${num1}`);

const newString = "Hello-MyName-IsGagan-Iam-LearningJS"

console.log(newString.replace('Hello','Hey'))

console.log(newString.includes('Boss'))

console.log(newString.split('-'));

anotherString = newString.slice(4,-2)
console.log(anotherString)