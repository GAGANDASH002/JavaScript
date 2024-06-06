//for loop
for(let i=0;i<10;i++){
    console.log("Namaste World");
}

//while loop
let i=0;
while(i<10){
    console.log("Namaste World");
    i++;
}

//do while loop
var j=0;
do{
    console.log("Namaste World")
    j++;
}while(j<10);

//for in loop(objects)
let animal={
    name : "Zebra",
    leg  : 4
};

for(let key in animal()){
    console.log(key,animal[key]);
}

//for....in loop(arrays)
let numbers= [1,2,3,4,5];

for(let index in numbers){
    console.log(numbers[index]);
}

//for....of loop
for(let num of numbers){
    console.log(num);
}