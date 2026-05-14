class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedList{//us   ed for brower backtracking, undo/redo operations,operating systems,cpu scheduling
    constructor(){
        this.head = null;
    }
    add(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    delete(value){//1,2,3,4
        let current = this.head;
        if(this.head.value==value){
            this.head = this.head.next;
            return 
        }
        while(current.next&&current.next.value!==value){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
        }
    }
    deleteDup(){//1,2,2,3,4;
        let current = this.head;
        
        while(current){
            let temp = current;
            while(temp.next){
                if(current.value===temp.next.value){
                    temp.next = temp.next.next;
                }else{
                    temp = temp.next;
                }
            }
            current = current.next;
        }
    }
    sort(){
        let current = this.head;
        while(current){
            let j = current.next;
            while(j){
                if(current.value>j.value){
                let temp = current.value;
                current.value = j.value;
                j.value = temp;
                } 
                j = j.next;
            }
            current = current.next;
        }
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}
let l = new linkedList();
l.add(10);
l.add(4);
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.delete(4);

l.deleteDup()
l.sort();
l.print();