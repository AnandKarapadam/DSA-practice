class Queue{
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }
    enqueue(value){
        this.s1.push(value);
    }
    dequeue(){
        if(!this.s2.length===0){
            while(this.s1.length>0){
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }
    peek(){
        if(!this.s2.length===0){
            while(this.s1.length>0){
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2[this.s2.length-1];
    }
    isEmpty(){
        return !this.s1.length&&!this.s2.length;
    }
}