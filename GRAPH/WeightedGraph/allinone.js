//weighted,unweighted - directed,undirected is in one graph class
class Graph{
    constructor(isWeighted=false,isDirected=false){
        this.adjacencyList = {};
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1,v2,weight =1){
        this.addVertex(v1);
        this.addVertex(v2);

        if(this.isWeighted){
            this.adjacencyList[v1].push({node:v2,weight});//{ node: "B", weight: 4 }
            if(!this.isDirected){
                this.adjacencyList[v2].push({node:v1,weight});
            }
        }else{
            this.adjacencyList[v1].push(v2);
            if(!this.isDirected){
                this.adjacencyList[v2].push(v1);
            }
        }
    }
    removeEdge(v1,v2){
        if(this.isWeighted){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v.node!==v2);
            if(!this.isDirected){
                this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v.node!==v1);
            }
        }else{
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v!==v2);
            if(!this.isDirected){
                this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v!==v1);
            }
        }
    }
    removeVertex(vertex){
        delete this.adjacencyList[vertex];
        for(let v in this.adjacencyList){
            if(this.isWeighted){
                this.adjacencyList[v] = this.adjacencyList[v].filter(v=>v.node!==vertex);
            }else{
                this.adjacencyList[v] = this.adjacencyList[v].filter(v=>v!==vertex);
            }
        }
    }
    display(){
        for(let v in this.adjacencyList){
            if(this.isWeighted){
                const edges = this.adjacencyList[v].map(e=>`${e.node}(${e.weight})`).join(", ");
                console.log(`${v}->${edges}`)
            }else{
                console.log(`${v}->${this.adjacencyList[v].join(", ")}`);
            }
        }
    }
    bfs(start){
        let visited = new Set();
        let queue = [start];

        while(queue.length>0){
            let vertex = queue.shift();
            console.log(vertex);

            let neighbours = this.isWeighted?this.adjacencyList[vertex].map(n=>n.node):this.adjacencyList[vertex];

            for(let neighbour of neighbours){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }

        }
    }
    dfs(start){
        let visited = new Set();
        console.log("DFS traversal")
        const dfsRec=(vertex)=>{
            if(!vertex)return;
            visited.add(vertex);
            console.log(vertex);
            
            let neighbours = this.isWeighted?this.adjacencyList[vertex].map(v=>v.node):this.adjacencyList[vertex];

            for(let neighbour of neighbours){
                if(!visited.has(neighbour)){
                    dfsRec(neighbour);
                }
            }
        }
        
        dfsRec(start);
    }
}
let g = new Graph(false,true);
g.addEdge("A","B",4);
g.addEdge("B","C",6);
g.display();
g.bfs("A");
g.dfs("A");