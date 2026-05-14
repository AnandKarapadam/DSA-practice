let arr = [3,4,5,2,1,2,3];
function mergeSort(arr){
    if(arr.length<=1)return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle,arr.length));
    return merge(left,right);
}
function merge(left,right){
    let result = [];
    while(left.length>0&&right.length>0){
        if(left[0]<right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return result.concat(left,right);
}
console.log(mergeSort(arr));

//efficent mergesort(O(n log n));

let arr = [3,4,5,2,1,2,3];
function mergeSort(arr){
    if(arr.length<=1)return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle,arr.length));
    return merge(left,right);
}
function merge(left,right){
    let result = [];
    let i=0;
    let j = 0;

    while(i<left.length&&j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[i]);
            j++;
        }
    }
    return result.concat(left.slice(i),right.slice(j));
}
console.log(mergeSort(arr));