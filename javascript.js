//Constructor Function//
function Person(name,age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log(`I am ${this.name}, I am ${this.age} years old`);
    }
}
let p = new Person("Anand",25);
p.greet()
//Factory Function(no new keyword)//
function personOne(place,distrit){
    return {
        place:place,
        distrit:distrit,
        greet:function(){
            console.log(`Place:${place},${distrit}`);
        }
    }
}
let p1 = personOne("Bathery","Wayanad");
p1.greet();

//Generator Function//

function* generator(){
    yield 1;
    yield 2;
}
let gen = generator()
console.log(gen.next());
console.log(gen.next());

//Call, apply , bind//

let obj1={
    name:"Big daddy"
}
let obj2={
    name:"Small daddy"
}
function greet(city,state){
    console.log(`${this.name} is in ${city},${state}}`);
}
greet.call(obj1,"bathery","kerala");
greet.apply(obj2,["Mysore","Karnataka"]);
let display = greet.bind(obj1,"kochi","Kochi");
display();

    //set interval//
    // let a = 10;
    // let inter = setInterval(() => {
    //     a-=2;
    //     console.log(a);
    //     if(a<=0){
    //         clearInterval(inter)
    //     }
    // }, 1000);

    //set timeout//

    // function timeout(start){
    //     let v = start;

    //      setTimeout(() => {
    //         console.log(v)
    //     }, 1000);
    // }
    // timeout(10)

    //Currying//
    function sum(a){
        return function(b){
            return function (c){
                return a+b+c;
            }
        }
    }
    console.log("currying"+sum(1)(2)(3));

    //Nullish Coelescing//
    let name = null;
    let userName = name??"Anand";
    console.log(userName);

    //Optional Chaining//
    let user = {};
    console.log(user?.details);

    //Json parse//
    let User = '{"name":"Anand","age":25}';
    let jsparsed = JSON.parse(User);
    console.log(jsparsed)

    //JSON Stringify//
    let customer =  {name: "AnandKV",age: 23};
    let converted = JSON.stringify(customer);
    console.log(converted);

    //EVENT EMITTER(publish new events)//
    let EventEmitter= require("events");
const { Router } = require("express");
    let emitter = new EventEmitter();
    emitter.on("greet",(name)=>{
        console.log(`Hello ${name}`);;
    })

    emitter.emit('greet','Anand');

    //FS//
    let fs = require("fs");
    fs.writeFile("text.txt","HELLO WORLD",(err)=>{
        if(err){
            throw err;
        }
        console.log("File written successfully");
    });
    fs.readFile("text.txt",'utf8',(err,data)=>{
        console.log(data);
    })
    fs.unlink('text.txt',(err)=>{
        if(err){
            throw err;
        }
        console.log("File removed")
    })

    //Server Creation//

    // const http = require("http");
    // http.createServer((req,res)=>{
    //     res.write("hello javascript");
    //     res.end();
    // }).listen(1000,(err)=>{
    //     if(err){
    //         throw err;
    //     }
    //     console.log("Server running..!")
    // })

    //Closures//
    function createCounter(){
        let count = 0;
        return function(){
            count++;
            console.log(count);
        }
    }
    const counter = createCounter();
    counter();
    counter();

    //Callback Function//

    function taskOne(a){
        console.log("Task Started");
        a();
    }
    function taskTwo(){
        console.log("Task ended");
    }
    taskOne(taskTwo);
    
//Promise All(waits for all done)//

   const pOne = Promise.reject("Data 1");
   const p2 = Promise.resolve("Data 2");
   const p3 = Promise.resolve("Data 3");

   Promise.all([pOne,p2,p3]).then((results)=>console.log(results)).catch((error)=>console.error(error));

//Promise Any(first resolved one)//

   const pro1 = Promise.resolve("Data 1");
   const pro2 = Promise.resolve("Data 2");
   const pro3 = Promise.resolve("Data 3");

   Promise.any([pro1,pro2,pro3]).then((results)=>console.log(results)).catch((error)=>console.log(error));


//Promise Race(first setteled one)//

  const prom1 = Promise.resolve("Data 1");;
  const prom2 = Promise.resolve("Data 2");
  const prom3 = Promise.resolve("Data 3");

  Promise.race([prom1,prom2,prom3]).then((results)=>console.log(results)).catch((error)=>console.log(error));

  let arr = [4,3,4,3,3,4,5,1,2,3,0];
  let dup = [];
  let seen = {}
  for(let num of arr){
    if(!seen[num]){
        dup.push(num);
        seen[num] = true;
    }
  }
  console.log(dup);

  let persoN = {
    'full name':"Anand KV",
    age:25,
    place:"Wayanad",
    greet:function(){
        console.log(`My name is ${this["full name"]}`);
    }
  }
  persoN.greet();
  console.log(Object.keys(persoN));//return array of keys//
  console.log(Object.entries(persoN));
  console.log(Object.values(persoN));

  //Array of objects//

let arrays = [{
    name : "a",
    age : 20,
    salary : 5000
},
{
    name : "b",
    age : 22,
    salary : 9000
},
{
    name : "c",
    age : 23,
    salary : 15000
}] 

let total = 0;

for(let obj of arrays){
    total+=obj.salary;
}

let avg = total/arr.length;
console.log("Average: ",avg.toFixed(2));

//Array Problem//

let ar = [15,45,6,7,12,43,90,23,45,61,23];
let largest = ar[0];
let secondLargest = ar[0];

for(let i=0;i<ar.length;i++){
    if(ar[i]>largest){
        secondLargest = largest;
        largest = ar[i];
    }else if(ar[i]>secondLargest&&ar[i]!==largest){
        secondLargest = ar[i]
    }
}
console.log(largest+" "+secondLargest);
            //or//
let large = Math.max(...ar);
let secLarge = Math.max(...ar.filter(ele=>ele!==large));
console.log(large+" "+secLarge);
           //or//

for(let i=0;i<ar.length;i++){
    for(let j=0;j<ar.length;j++){
        if(ar[j]>ar[j+1]){
            [ar[j],ar[j+1]] = [ar[j+1],ar[j]];
        }
    }
}   
let largestNum = ar[ar.length-1];
let secLargeNum = ar[ar.length-2];        
console.log(largestNum+" "+secLargeNum);
 
//Smallest & Second Smallest//

let numbers = [23,3,22,56,5,34,87,101,455];
let small = numbers[0];
let secSmall = numbers[0];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]<small){
        secSmall = small;
        small = numbers[i];
    }else if(numbers[i]<secSmall&&numbers[i]!==small){
        secSmall = numbers[i];
    }
}
console.log(small+" "+secSmall);

//Reverse array//

let arraytoreverse = [1,2,3,4,3,5,6,7,8,9];
function reverseArray(){
    let left = 0;
    let right = arraytoreverse.length-1;
    while(left<right){

        let temp = arraytoreverse[left];
        arraytoreverse[left] = arraytoreverse[right];
        arraytoreverse[right] = temp;

        left++;
        right--;
    }
}   
console.log(arraytoreverse);
reverseArray();
console.log(arraytoreverse);

//Reverse String//
let str = "my name is anand";
function reverseString(str){
    let revStr = "";
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i];
    }
    return revStr;
}
console.log(reverseString(str));

function modifyStri(str){
    
    let splited = str.split(" ");
    let result = splited.map(word=>word.split("").reverse().join("")).join(' ');
    return result;
}
console.log(modifyStri(str));

//Capitalize string//;
let surname = "anand";
let capitalised = surname[0].toUpperCase()+surname.slice(1,surname.length);
console.log("Capitalised:"+capitalised);

let sentence = "my name is anand";
let capitalisedSent = sentence.split(" ").map(word=>word[0].toUpperCase()+word.slice(1,word.length)).join(" ");
console.log(capitalisedSent);

//Duplicates and Uniques//
let numberArray = [1,2,3,3,4,5,5,6,6,7,8];
let uni = [];
let dupli = [];

for(let i=0;i<numberArray.length;i++){
    if(!uni.includes(numberArray[i])){
        uni.push(numberArray[i]);
    }else{
        dupli.push(numberArray[i]);
        if(uni.includes(numberArray[i])){
            for(let j=0;j<uni.length;j++){
                if(uni[j]===numberArray[i]){
                    uni.splice(j,1);
                }
            }
        }
    }
}
console.log("Unique:"+uni);
console.log("Duplicate:"+dupli);

//Remove Smallest//

let numArray= [ 1,2,3,4,5,-5,5,7,8,0,99,6,5 ];
let min = numArray[0];
let index = 0;
for(let i=0;i<numArray.length;i++){
    if(min>numArray[i]){
        min = numArray[i];
        index = i;
    }
}
numArray.splice(index,1);
console.log(numArray);

//Occurance of Characters//

let word = "Anand";
let freq = {};

for(let ch of word.toLowerCase()){
    freq[ch] = (freq[ch]||0)+1;
}

console.log(freq);

//Removing Vowels//

let newString = "malayalam";
let result = "";
for(let i=0;i<newString.length;i++){
    if(!'aeiouAEIOU'.includes(newString[i])){
        if(!result.includes(newString[i])){
            result+=newString[i];
        }
    }
}
console.log(result);

// Middlewares (Node.js)//

//Application Level//
app.use((req,res,next)=>{//runs for every request//
    console.log("Request Recieved");
    next();
})

//Router-Level Middleware//
function logger(req, res, next) {
  console.log('Request URL:', req.url);
  next(); // move to the next middleware or route
}

app.get('/hello', logger, (req, res) => {
  res.send('Hello World');
});

//Built-In Middleware//

app.use(express.json());//parse json body
app.use(express.urlencoded({extended:true}));//parse form data
app.use(express.static("public"));//Serve Static files.

//Third Party Middleware-morgan,cors//

//Error-Handling Middleware//

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send("Something went wrong");
})

//Custom Middleware//

function isLoggedIn(req,res,next){
    if(req.session.user){
        next();
    }else{
        res.redirect("/login");
    }
}



//Promises-then catch vs async await//

//Promises with then-catch//(represents eventual completion or failure of a asynchronous operation)

function add(a,b){
    return new Promise((resolve,reject)=>{
        resolve(a+b);
    })
}

add(2,4).then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})

//Async Await//

function add(a,b){
    return new Promise((resolve,reject)=>{
        resolve(a+b);
    })
}

async function calculate(){
    try {
        const result = await add(2,4);
    } catch (error) {
        console.log(error);
    }
}
let shift = (s,n)=>{
   let result =  [...s].map(c=>String.fromCharCode(c.charCodeAt(0)+n)).join("");
    return result;
}
console.log(shift("abc",2));


//MONGODB ACID//

//A transaction makes sure multiple database changes happen together or not at all.A transaction is a group of operations, and ACID are the rules that make those operations safe.//
//ACID are rules that a transaction must follow.//

//A – Atomicity- transaction must be fully completed or fully cancelled. if any falils it fully cancelled.
//C - Consistancy - The database must move from one valid state to another valid state.if rules break transaction fails.eg:Balance cannot go below 0,Age cannot be negative.
//I - Isolation - Multiple transactions running at the same time must not affect each other.
//D - Durability - Once a transaction is committed, the data will not be lost.


//Object - flatten object //
const users = {
  name: "Anand",
  address: {
    city: "Wayanad",
    state: "Kerala",
    pin: {
      area: "Kalpetta",
      code: 673121
    }
  },
  skills: {
    backend: "Node.js",
    database: "MongoDB"
  }
};

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

