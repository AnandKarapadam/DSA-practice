//Tree is a non-linear data structure made up of nodes and connected widh edges. Each nodes can have zero or many child nodes.//
//Topics: Types of node, Traversal types, Implementation//


//** BINARY TREE **//

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    insertRoot(value){
        this.root = new Node(value)
    }
    insertLeft(parent,value){
        parent.left = new Node(value);
    }
    insertRight(parent,value){
        parent.right = new Node(value);
    }

    preOrder(node){
        if(node===null)return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    inOrder(node){
        if(node===null)return;
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    postOrder(node){
        if(node===null)return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }

    levelOrder(){
        if(this.root==null)return;
        let queue = [];
        queue.push(this.root);

        while(queue.length>0){
            let current = queue.shift();
            console.log(current.value); 
            if(current.left!==null)queue.push(current.left);
            if(current.right!==null)queue.push(current.right);
        }
    }
}


let tree = new BinaryTree();
tree.insertRoot("A");
tree.insertLeft(tree.root,"B");
tree.insertRight(tree.root,"C");
tree.insertLeft(tree.root.left,"D");
tree.insertRight(tree.root.left,"E");
tree.insertLeft(tree.root.right,"F");
tree.insertRight(tree.root.right,"G")

//** Pre-Order Traversal **//
console.log("Preorder Traversal:");
tree.preOrder(tree.root);
//** In-Order Traversal **//
console.log("Inorder Traversal:");
tree.inOrder(tree.root);
//** Post-Order Traversal **//
console.log("Postorder Traversal:");
tree.postOrder(tree.root);

console.log(JSON.stringify(tree,null,2));

tree.levelOrder();
