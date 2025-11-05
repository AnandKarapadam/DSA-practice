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
    search(node,value){
        if(node===null)return false;
        if(node.value===value){
            return true;
        }

        return this.search(node.left,value)||this.search(node.right,value);
    }
    height(node){
        if(node===null)return 0;
        let leftH = this.height(node.left);
        let rightH = this.height(node.right);

        return 1 + Math.max(leftH,rightH);
    }
    display(){
        console.log(JSON.stringify(this.root,null,2));
    }
    countNodes(node){
        if(node===null)return 0;
        
        return 1+this.countNodes(node.left)+this.countNodes(node.right);
    }
    countLeaves(node){
        if(node===null)return 0;
        if(node.left===null&&node.right===null)return 1;
        return this.countLeaves(node.left)+this.countLeaves(node.right);
    }

    depth(node,value,level=0){
        if(node==null)return -1;
        if(node.value ===value)return level;
        let leftDepth = this.depth(node.left,value,level+1);
        if(leftDepth!==-1)return leftDepth;

        return this.depth(node.right,value,level+1);
    }

    delete(value){
        if(!this.root)return null;
        
        if(this.root.value === value && !this.root.left && !this.root.right){
            this.root  = null;
            return ;
        }
        
        let queue  = [this.root];
        let nodeToDelete = null;
        let lastNode = null;
        let parentOfLast = null;


        while(queue.length){
            let current = queue.shift();
            if(current.value===value)nodeToDelete = current;

            if(current.left){
                parentOfLast = current;
                queue.push(current.left);
            }
            if(current.right){
                parentOfLast = current;
                queue.push(current.right);
            }
            lastNode = current;
        }

        if(!nodeToDelete){
            console.log("Node not found");
            return;
        }

        nodeToDelete.value = lastNode.value;
        if(parentOfLast.right === lastNode) parentOfLast.right = null;
        else if(parentOfLast.left === lastNode) parentOfLast.left = null;

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

// console.log(JSON.stringify(tree,null,2));

tree.levelOrder();
console.log(tree.height(tree.root));
tree.display();
console.log(tree.countNodes(tree.root));
console.log(tree.search(tree.root,"K"));
console.log(tree.countLeaves(tree.root));
console.log(tree.depth(tree.root,"D"));






