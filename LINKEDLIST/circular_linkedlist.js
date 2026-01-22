class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class CLL{
    constructor(){
        this.head = null;
    }
    add(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            newNode.next = this.head;
            return;
        }
        let current = this.head;
        while(current.next!==this.head){
            current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
    }
    print(){
        if(!this.head)return;
        let current = this.head;
        do{
            console.log(current.value);
            current = current.next;
        }while(current!==this.head);
    }
}
let cll = new CLL();
cll.add(1);
cll.add(2);
cll.add(3);
cll.print();