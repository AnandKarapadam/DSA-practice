//OBJECTS -- A collection of key value pairs, it stores structured data//

let person = {
    name:'Anand',
    age:25,
}

//Adding//
person.hobbies = ["reading","music"];

//Delete//
delete person.hobbies;

//Looping//
for(let key in person){
    console.log(key,person[key]);
}

//Object Methods//
Object.keys(person)
Object.values(person);
Object.entries(person);//Convert key value pairs like [[key,value]]//
Object.fromEntries();//reverse of Object.entries//

console.log(person.hasOwnProperty("name"))//checks if a key exists in the object//

Object.freeze(person)//Makes the objects unmutable//
Object.seal()//Pervents adding,deleting allow to update//


