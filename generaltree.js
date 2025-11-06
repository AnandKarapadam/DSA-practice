
//**----GENERAL TREE----**//

class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

class GeneralTree{
    constructor(){
        this.root = null;
    }
    insertRoot(value){
        this.root = new Node(value);
    }
    insertChild(parent,value){
        const child = new Node(value);
        parent.children.push(child);    
        return child;
    }
    dfs(node){
        if(!node)return;
        console.log(node.value);
        for(let child of node.children){
            this.dfs(child);
        }
    }
    bfs(){
        if(!this.root)return;
        let queue = [this.root];

        while(queue.length>0){
            let current = queue.shift();
            console.log(current.value);
            for(let child of current.children){
                queue.push(child);
            }
        }
    }
}

let gt = new GeneralTree();
gt.insertRoot("A");
let nodeB = gt.insertChild(gt.root,"B");
let nodeC = gt.insertChild(gt.root,"C");
let nodeD = gt.insertChild(gt.root,"D");

gt.insertChild(nodeC,"E");
gt.insertChild(nodeC,"F");
gt.insertChild(nodeD,"G");

gt.dfs(gt.root)
console.log("...");
gt.bfs()
console.log(JSON.stringify(gt,null,2));