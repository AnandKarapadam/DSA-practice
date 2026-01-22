class Stack{
    constructor(){
        this.q = [];
    }
    push(value){
        this.q.push(value);
        for(let i=0;i<this.q.length;i++){
            this.q.push(this.q.shift());
        }
    }
    pop(){
        return this.q.shift();
    }
    peek(){
        return this.q[0];
    }
    isEmpty(){
        return this.q.length===0;
    }
}