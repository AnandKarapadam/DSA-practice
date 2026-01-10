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

    //instead of three nodes we can use one method
    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }
        const queue = [this.root];
        while(queue.length>0){
            const current = queue.shift();

            if(!current.left){
                current.left = newNode;
                break;
            }else{
                queue.push(current.left);
            }

            if(!current.right){
                current.right = newNode;
                break;
            }else{
                queue.push(current.right);
            }

        }
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
    isBalanced(node){
        if(!node)return true;
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        if(Math.abs(leftHeight-rightHeight)>1)return false;

        return this.isBalanced(node.left)&&this.isBalanced(node.right);
    }
    minDepth(node){
        if(!node)return 0;
        if(!node.left)return 1+this.minDepth(node.right);
        if(!node.right)return 1+this.minDepth(node.left);

        return 1+Math.min(this.minDepth(node.left),this.minDepth(node.right));
    }
    minValue(node){
        if(!node)return Infinity;
        return Math.min(node.value,this.minValue(node.left),this.minValue(node.right));
    }
    maxValue(node){
        if(!node)return -Infinity;
        return Math.max(node.value,this.maxValue(node.left),this.maxValue(node.right));
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
    
    collectCounts(){
        let queue = [this.root];
        let counts = {};
        while(queue.length>0){
            let current = queue.shift();
            counts[current.value] = (counts[current.value]||0)+1;
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
        return counts;
    }
    deleteDuplicates(){
        let counts = this.collectCounts();
        for(let value in counts){
            if(counts[value]>1){
                for(let i=0;i<counts[value];i++){
                this.delete(Number(value));
            }
            }
        }
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
                
                queue.push(current.left);
                parentOfLast = current;
            }
            if(current.right){
                
                queue.push(current.right);
                parentOfLast = current;
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

    findClosestUpper(target){
        let node = this.root;
        let upper = null;
        while(node){
            if(target<=node.value){
                upper = node.value;
                node = node.left;
            }else{
                node = node.right;
            }
        }
        return upper;
    }
    kthSmallest(k){
        let queue = [this.root];
        let result = [];

        while(queue.length>0){
            let current = queue.shift();
            result.push(current.value);
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right);
        }
        result.sort((a,b)=>a.localeCompare(b))//if it is string
        //result.sort((a,b)=>a-b);
        return result[k-1];
    }
    invertTree(node=this.root){
        if(!node)return null;
        [node.left,node.right] = [node.right,node.left];

        this.invertTree(node.left);
        this.invertTree(node.right);
        return node;
    }
    isFullBinaryTree(node=this.root){
        if(!node)return true;
        if(!node.left&&!node.right)return true;

        if(node.left&&node.right){
            return this.isFullBinaryTree(node.left)&&this.isFullBinaryTree(node.right);
        }
        return false;
    }
    isCompleteTree(){
        if(!node)return true;
        let queue = [this.root];
        let seenNull = false;

        while(queue.length>0){
            let node = queue.shift();

            if(node===null){
                seenNull = true;
            }else{
                if(seenNull)return false;
                queue.push(current.left);
                queue.push(current.right);
            }
        }
        return true;   
    }
    isPerfectBT(){
        let h = this.height(this.root);
        let count = this.countNodes(this.root);
        return count===Math.pow(2,h)-1;
    }
    isSkewed(node){
        if(!node)return true;
        if(node.right&&node.left)return false;

        if(node.left)return this.isSkewed(node.left);
        if(node.right)return this.isSkewed(node.right);
        return true;
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






    //     A
    //    / \
    //   B   C
    //  / \   \
    // D   E   F
