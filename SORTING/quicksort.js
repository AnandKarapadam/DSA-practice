let arr = [4,1,5,4,3,2,1,2,3];
function quicksort(arr){
    if(arr.length<1)return arr;
    
    let pivot = arr[arr.length-1];
    let middle = arr.filter(e=>e===pivot);
    let left = arr.filter(e=>e<pivot);
    let right = arr.filter(e=>e>pivot);

    return [...quicksort(left),...middle,...quicksort(right)];
}
console.log(quicksort(arr));
