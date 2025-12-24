// class MinHeap{
//     constructor(){
//         this.heap = [];
//     }
//     build(arr){
//         this.heap = arr.slice();
//         for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
//             this.heapifyDown(i);
//         }
//     }
//     insert(value){
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length-1);
//     }
//     remove(){
//         if(this.heap.length===0)return null;
//         if(this.heap.length===1)return this.heap.pop();

//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return root;
//     }
//     heapifyUp(index){
//         let parent = Math.floor((index-1)/2);
//         while(index>0 && this.heap[index]<this.heap[parent]){
//             [this.heap[index],this.heap[parent]] = [this.heap[parent],this.heap[index]];
//             index = parent;
//             parent  = Math.floor((index-1)/2);
//         }
//     }
//     heapifyDown(index){
//         let smallest = index;
//         const left = 2*index+1;
//         const right = 2*index+2;

//         if(left<this.heap.length && this.heap[left]<this.heap[smallest] )smallest = left;
//         if(right<this.heap.length && this.heap[right]<this.heap[smallest])smallest = right;

//         if(smallest !== index){
//             [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]];
//             this.heapifyDown(smallest);
//         }
//     }
//     display(){
//         console.log(this.heap);
//     }
// }

// function heapSort(arr){
//     let heap = new MinHeap();
//     heap.build(arr);
//     let sorted = [];
//     while(heap.heap.length>0){
//         sorted.unshift(heap.remove());
//     }
//     return sorted;
// }
// let min = new MinHeap()
// let arr = [3,5,6,7,2,3,4];
// console.log(heapSort(arr));
// min.insert(10);
// min.insert(20);
// min.insert(4);
// min.insert(3);
// min.insert(5);
// min.display();
//function kthLargest(arr,k){
    // let heap = new MinHeap();
    // for(let num of arr){
    //     heap.insert(num);
    //     if(k<heap.heap.length){
    //         heap.remove();
    //     }
    // }
    // return heap.heap[0];
//}


//Max-tree//
// class MaxTree{
//     constructor(){
//         this.heap = [];
//     }
//     build(arr){
//         this.heap = arr.slice();
//         for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
//             this.heapifyDown(i);
//         }
//     }
//     insert(value){
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length-1);
//     }

//     heapifyUp(index){
//         let parent = Math.floor((index-1)/2);
//         while(index>0&&this.heap[index]>this.heap[parent]){
//             [this.heap[index],this.heap[parent]] = [this.heap[parent],this.heap[index]];
//             index = parent;
//             parent = Math.floor((index-1)/2);
//         }
//     }
//     remove(){
//         if(this.heap.length===0)return null;
//         if(this.heap.length===1)return this.heap.pop();

//         let root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return root;
//     }
//     heapifyDown(index){
//         let largest = index;
//         let left = 2*index+1;
//         let right = 2*index+2;

//         if(left<this.heap.length&&this.heap[left]>this.heap[largest])largest = left;
//         if(right<this.heap.length&&this.heap[right]>this.heap[largest])largest = right;

//         if(largest!==index){
//             [this.heap[index],this.heap[largest]] = [this.heap[largest],this.heap[index]];
//             this.heapifyDown(largest);
//         }
//     }
// }
// function heapSort(arr){
//     let heap = new MaxTree();
//     heap.build(arr);
//     let sorted = [];
//     while(heap.heap.length>0){
//         sorted.unshift(heap.remove())
//     }
//     return sorted;
// }
// function kthLargset(arr,k){
//     let heap = new MaxTree();
//     heap.build(arr);
//     for(let i=1;i<k;i++){
//         heap.remove();
//     }
//     return heap.heap[0];
// }
// let arr = [2,3,4,5,6,7];
// console.log(heapSort(arr));
// console.log(kthLargset(arr,2));




//Heap sort
// function heapSort(arr){
//     let n = arr.length;

//     for(let i=Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i);
//     }
//     for(let i=n-1;i>0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]];
//         heapify(arr,i,0);
//     }
//     return arr;
// }
// function heapify(arr,n,i){
//     let largest = i;
//     let left = 2*i+1;
//     let right = 2*i+2;

//     if(left<n&&arr[left]>arr[largest])largest = left;
//     if(right<n&&arr[right]>arr[largest])largest = right;
//     if(largest!==i){
//         [arr[largest],arr[i]] = [arr[i],arr[largest]];
//         heapify(arr,n,largest);
//     }
// }

// let arr = [2,6,7,8,9,1,2,3];
// console.log(heapSort(arr));


// // Find k th largest element//
// function kthlargest(arr,k){
//     let n = arr.length;
//     for(let i=Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i);
//     }
//     for(let i=n-1;i>=n-k+1;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]];
//         heapify(arr,i,0);
//     }
//     return arr[0];
// }
// function heapify(arr,n,i){
//     let largest = n;
//     let left = 2*i+1;
//     let right = 2*i+2;
//     if(left<n&&arr[left]>arr[largest])largest = left;
//     if(right<n&&arr[right]>arr[largest])largest = right;
//     if(largest!==i){
//         [arr[largest],arr[i]]=[arr[i],arr[largest]];
//         heapify(arr,n,largest);
//     }
// }
// let arr = [1,2,3,4,5,6,7];
// let k = 3;
// console.log(kthlargest(arr,k));