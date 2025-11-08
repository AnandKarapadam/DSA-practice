class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        this.root = this.insertRec(this.root,value)
    }
    insertRec(node,value){
        if(node ===null){
            return new Node(value);
        }
        if(value<node.value){
            node.left = this.insertRec(node.left,value);
        }else if(value>node.value){
            node.right = this.insertRec(node.right,value);
        }

        return node;
    }

    preOrder(node){
        if(!node){
            return ;
        }

        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    inOrder(node){
        if(!node)return;

        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }
    postOrder(node){
        if(!node)return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);        
    }

    levelOrder(){
        if(!this.root)return;

        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            console.log(current.value);
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right);
        }
    }
    contains(node,value){
        if(node===null)return false;
        if(node.value===value)return true;

        if(value<node.value){
           return this.contains(node.left,value);
        }else {
            return this.contains(node.right,value);
        }
    }
    height(node){
        if(!node)return 0;

        return 1+Math.max(this.height(node.left),this.height(node.right));
    }
    delete(value){
        this.root = this.deleteRec(this.root,value);
    }
    deleteRec(node,value){
       if(!node)return null;

       if(value<node.value)node.left = this.deleteRec(node.left,value);
       else if(value>node.value)node.right = this.deleteRec(node.right,value);
       else{
        if(!node.left)return node.right;
        if(!node.right)return node.left;

        node.value = this.minValue(node.right).value;
        node.right = this.deleteRec(node.right,node.value);

       }
       return node;
    }
    minValue(node){
        let current = node;

        while(current.left){
            current = current.left;
        }
        return current;
    }
    display(){
        console.log(JSON.stringify(this.root,null,2));
    }

    findClosestValue(value){
        return this.findClosest(this.root,value);
    }
    findClosest(node,target,closest = Infinity){
        if(!node)return closest;

        if(Math.abs(target-node.value)<Math.abs(target-closest)){
            closest = node.value;
        }

        if(target<node.value){
           return this.findClosest(node.left,target,closest);
        }else if(target>node.value){
           return this.findClosest(node.right,target,closest);
        }else{
            return node.value;
        }
    }
    isBST(node = this.root,min = -Infinity,max=Infinity){
        if(!node)return true;

        if(node.value<=min||node.value>=max)return false;

        return (this.isBST(node.left,min,node.value)&&this.isBST(node.right,node.value,max));
    }
}


let bst = new BST();
bst.insert(50);
bst.insert(40);
bst.insert(70);
bst.insert(30);
bst.insert(60);
bst.insert(90);
bst.display()

