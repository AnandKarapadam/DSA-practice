class Queue{//task scheduling / api request handling    
    constructor(){
        this.q = [];
    }
    enqueue(value){
        this.q.push(value);
    }
    dequeue(){
        return this.q.shift();  
    }
    isEmpty(){
        return this.q.length===0;
    }
    peek(){
        return this.q[0];
    }
}