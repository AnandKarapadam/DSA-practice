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

function quickSort(arr,low=0,high=arr.length-1){
    if(low<high){
        let pivotIndex = partition(arr,low,high);
        
        quickSort(arr,low,pivotIndex-1);//sort the left part
        quickSort(arr,pivotIndex+1,high);//sort the right part
    }
    return arr;
}
function partition(arr,low,high){//partition places the pivot element in its correct sorted position
    let pivot = arr[high];
    let i = low-1;
    
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
    return i+1;
}
console.log(quickSort([3,4,5,6,7,5,4,3,2]));