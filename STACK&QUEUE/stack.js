class Stack{
    constructor(){
        this.stack = [];
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    isEmpty(){
        return this.stack.length===0;
    }
}
let s  =  new Stack();
s.push(10);
s.push(20);
s.push(30);
s.pop();