class Stack{//Call stack, undo and redo, expression evaluation.
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

function sortStack(stack) {
    let tempStack = [];
    while(stack.length>0){
        let temp = stack.pop();
        while(tempStack.length>0&&tempStack[tempStack.length-1]>temp){
            stack.push(tempStack.pop());
        }
        tempStack.push(temp);
    }
    return tempStack;
}

// Example
let stack = [3, 1, 4, 2];
console.log(sortStack(stack)); // [1, 2, 3, 4]