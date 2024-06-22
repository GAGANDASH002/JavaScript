const num=new Array(1,2,3,4,5,6,7,8,9)

//Push
num.push(10)//appends to end of array

//Unshift
num.unshift(0)//adds to start of array
console.log(num[num.length-1])
console.log(num[0])

//Pop
console.log(num.pop())//removes last element

//Shift
num.shift()//removes first element

num[0]="hey i am an array"//changing value at specified index

const names=["Gagan","Maverick","Jai","Maverick","Abdul"]
console.log(names.indexOf("Maverick"))//returns first occurence
console.log(names.indexOf("Maverick",2))//returns occurence after specified index

console.log(names.lastIndexOf("Maverick"))//returns last occurence

//includes() works only on primitive datatypes
console.log(names.includes("Jai"))//returns if the element exists or not

//find() method
let channels=[{
    name:"DDE",
    subscribers:10000
},{
    name:"SSBWings",
    subscribers:105400
},{
    name:"JugaduFauji",
    subscribers:205000
}]

console.log(channels.find(function(element){
    return element.subscribers == 10000;
}))

//arrow function
console.log(channels.find((element) => {
    return element.name == "DDE"
}))

//concat() and slice()

let names1=["Gagan","Pete","Ram","Maverick","Harman"]
let names2=names.concat(names1)
console.log(names2.slice(2,5))

//spread operator

let names3=[...names1,...names]
console.log(names3)

//For Loop
for (let i=0;i<names.length;i++){
    console.log(names[i])
}

//forEach()
names.forEach(function(name,index){
    console.log(name,index)
})

//Join()

let student=['s','h','i','v','a']
console.log(student.join(''))//joins comma-separated value

//Split()
console.log(student.split('/'));

//Flat()
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

