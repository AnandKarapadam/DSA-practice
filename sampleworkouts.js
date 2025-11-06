class MinHeap{
    constructor(){
        this.heap = [];
    }

    build(arr){
        this.heap = arr;
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.heapifyDown(i);
        }
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1);
    }
    heapifyUp(index){
        let parent = Math.floor((index-1)/2);
        while(index>0&&this.heap[index]<this.heap[parent]){
            [this.heap[index],this.heap[parent]] = [this.heap[parent],this.heap[index]];

            index = parent;
            parent = Math.floor((index-1)/2);
        }
    }
    remove(){
        if(this.heap.length===0)return null;
        if(this.heap.length===1)return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }
    heapifyDown(index){
        let smallest = index;
        let left = 2*index+1;
        let right = 2*index+2;

        if(left<this.heap.length&&this.heap[left]<this.heap[smallest])smallest = left;
        if(right<this.heap.length&&this.heap[right]<this.heap[smallest])smallest = right;

        if(smallest!==index){
            [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]];
            this.heapifyDown(smallest);
        }
    }
}

