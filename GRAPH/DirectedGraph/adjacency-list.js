//Directional Graph Adjacency List.
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(v1,v2){
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList[v1].add(v2);
    }
    hasEdge(v1,v2){
        return this.adjacencyList[v1]?.has(v2)||false;
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1]?.delete(v2);
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex])return;
        delete this.adjacencyList[vertex];
        for(let vert in this.adjacencyList){
            this.adjacencyList[vert]?.delete(vertex);
        }
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->"+[...this.adjacencyList[vertex]]);
        }
    }
    bfs(start){
        if(!this.adjacencyList[start])return;
        let visited = new Set();
        let queue = [start];
        visited.add(start);

        console.log("BFS:");
        while(queue.length>0){
            let node = queue.shift();
            console.log(node);

            for(let neighbour of this.adjacencyList[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }

    }
    dfs(start){
        if(!this.adjacencyList[start])return;
        let visited = new Set();

        console.log("DFS:");
        const traversal = (node)=>{
            visited.add(node);
            console.log(node);

            for(let neighbor of this.adjacencyList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    traversal(neighbor);
                }
            }

        }
        traversal(start);
    }
    shortestPath(start,end){
        let queue = [start];
        let visited = new Set([start]);
        let parent = {};
        parent[start] = null;
        while(queue.length>0){
            let node = queue.shift();
            if(node==end) break;
            for(let neighbor of this.adjacencyList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                    parent[neighbor] = node;
                }
            }
        }
        let path = [];
        let current = end;
        while(current!==null){
            path.push(current);
            current = parent[current];
        }
        path.reverse();
        return path;
    }
}
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A","B");
g.addEdge("B","C");
console.log(g.hasEdge('A',"B"));
g.display();
g.bfs("A");
g.dfs("A");
console.log(g.shortestPath("A","C"));