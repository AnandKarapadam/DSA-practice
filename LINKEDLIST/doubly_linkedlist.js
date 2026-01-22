class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
    delete(value){
        if(this.head.value ===value){
            if(this.head === this.tail){
                this.head = null;
                this.tail = null;
            }else{
                this.head = this.head.next;
                this.head.prev = null;
            }
            return;
        }
        let current = this.head;
        while(current.next&&current.next.value!==value){//1,2,3,4;
            current = current.next;
        }
        if(!current.next)return;
        if(current.next===this.tail){
            this.tail = current;
            this.tail.next = null;
            return;
        }
        current.next = current.next.next;
        current.next.prev = current;
    }
}
let dll = new DLL();
dll.add(1);
dll.add(3);
dll.add(0);
dll.delete(0);
dll.print();