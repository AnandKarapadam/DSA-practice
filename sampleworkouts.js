const { json } = require("express");

let obj = {a:1,b:2};
let result = [];
for(let key in obj){
    result.push([key,obj[key]]);
}
console.log(result);
const deep = JSON.parse(JSON.stringify(obj));
console.log(deep);