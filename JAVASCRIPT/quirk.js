//1.Floating points
console.log(0.1+0.2===0.3)//false:because floating values are not treated as excactly. it can be 0.30000000000004..

//2.Shallow Copy
let obj1 = {
    name:"Anand",
    age:2,
    address:{
        city:"sulthan bathery",
        pin:"673580"
    }
}
let shallow = {...obj1};
shallow.name = "a"//it won't affect the original
shallow.address.city="Kochi"//it will affect the original

//while merging two objects {..obj1,obj2} if both have same keys then the value of obj2 will merge

//2.map

let arr = [1,2,3,4];
console.log(arr.map((item)=>item>4));//[false,false,true,true] //map is meant for an operation (transformation), not a condition.

//3.Reference
console.log([]==[])//false
// console.log([]===[])//false//because it is not values arrays are objects it is referenced so the first [] reference is not the second

//eg:
let a = [];
let b = a;
console.log(a===b)//true, same reference;

//4.Arrow function vs Normal function(difference while creating constructor function)
function Person(){
    console.log("anand");
}
new Person()//possible in arrow function

let Personarrow = ()=>{
    console.log("Andnd");
}
new Personarrow()//not possible

//5. Addition

    console.log(2+"2")//'22';+ converts numbers to string;
    console.log(2-"2")//0;-,*,/,% converts string to numbers (only work for numbers);

//6. Initilisation vs Decleration

let dec1;       // declaration
var dec2;       // declaration
//const dec3;     // ❌ will give error because const must be initialized

let dec = 10;  // declaration + initialization
var dec4 = "Hello";
//const dec5 = true; // must be initialized


//Different Ways To Implement Object//

//Object Litrals//
const obj = {
  name: "Alice",
  age: 25
};
//Object Constructor//
const ob1 = new Object();
ob1.name = "anand";
ob1.age = 24;
//Constructor Function//
function Person(name,age){
    this.name = name,
    this.age = age
}
let ob2 = new Person('anand',25);

//+//   
console.log(1 + 2 + "3")//"33"
console.log("1" + 2 + 3)// "123"
console.log("abc".indexOf("abc"))//0
console.log("abc".indexOf("abcd"))//-1

//DOUBLE BANG//
console.log(!!'hello')//true;this will convert to boolean
console.log(!!0)//false;

