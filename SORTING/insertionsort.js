let arr = [4,3,5,6,1,2,3,4];
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let k= arr[i];
        let j = i-1;    
        while(j>=0&&arr[j]>k){
            arr[j+1] = arr[j];
            j--;
        }       
        arr[j+1] = k; 
    }
    return arr;
}
console.log(insertionSort(arr));