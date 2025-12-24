//What is Array?//
//It is a Linear Datastructure. It is used to store multiple values in one variables.//

//Array Traversal//
let arr = [1,2,3,4,5];

//For Loop//

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//For Of//

for(let nums of arr){
    console.log(nums);
}

//For Each//

arr.forEach((ele)=>{
    console.log(ele);
})

//Array Methods//
arr.push();
arr.pop();
arr.shift();//remove
arr.unshift();
arr.indludes();
arr.indexOf();

//Advanced Array Methods//

arr.map()//Transforms all items to array
arr.filter()//Filter specific elements
arr.reduce()//Combine to a single result
arr.find(callback)//Finds the first match
arr.some()//True or false, when matches aleast one.
arr.every(callback)//Retrun true if all match.
arr.sort()
arr.reverse()
arr.slice()
arr.splice(index,"delete count",insert)
arr.contact(arr2);
arr.join()
arr.split()
