let lecture=10;
let section=3;
let title="Js";

//object declaration I
/*const course=
{
    lecture:10,
    section:3,
    title:"Js",
    notes:{
       intro:"Welcome to the course"
    },
    enroll(){
        console.log("Yout are successfully enrolled");
    }
};

course.enroll()
console.log(course.title)

course.price=999*///creation of new property in the object

//Factory Function (use CamelCase)

function createCourse(title){
    return{
    title: title,
    notes:{
       intro:"Welcome to the course"
    },
    enroll(){
        console.log("Yout are successfully enrolled");
    }
}

}

const course= createCourse("Js");
course.enroll();
console.log(course)

//Constructor Function (use PascalCase)

function Course(title){
    this.title =title;
    this.enroll=function(){
        console.log("Yout are successfully enrolled");
    }
}

const course1= new Course('Java');//object creation

course.enroll();

//delete keyword
delete course1.title;

course1.checkEnrollement=function(){
    console.log("40 are enrolled");
}//creatng new function of Course object outside declaration

console.log(course1);

const course2= new Course("JavaScirpt");
console.log(course2.constructor);
console.log(course.constructor);//whenever factory function is used then it is of Object class
console.log(Course.constructor);//returns "Function" as it is the constructor function for all constructors

//another way of creating constructor using constructor function(Function)

const Course_1= new Function('title',`this.title =title;
this.enroll=function(){
    console.log("Yout are successfully enrolled");
}
`)

const Course_2= new Course_1("C++");
Course_2.enroll()//This proves that functions are also objects in JS

//Primitive Datatype
let num=10;
//Pass by Value
let num1=num;

num=15;
console.log(num);
console.log(num1);

//Reference Datatypes
let obj={number:10};
//Pass by reference  (use Quokka for understanding output)
let obj2=obj;

obj.number=15;

console.log(obj);
console.log(obj2);

//How to pass by value in reference datatypes??
const newCourse={
    title: "Js",
    notes:{
       intro:"Welcome to the course"
    },
    enroll(){
        console.log("Yout are successfully enrolled");
    }
}

//Part 1

/*const new_course={...newCourse};//Pass by value
newCourse.title="Ruby";
console.log(newCourse);
console.log(new_course);*/

//Part 2

/*const new_course= Object.assign({},newCourse)
newCourse.title="Ruby";
console.log(newCourse);
console.log(new_course);*/


//Part 3

for(let key in newCourse){
    console.log(key,newCourse[key]);
}

const new_course={};//initializing empty object
for(let key of Object.keys(newCourse)){
    new_course[key]=newCourse[key];
}

console.log(new_course)