//Undirected Graph - Adjacency-List.
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertices(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertices(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertices(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->"+[...this.adjacencyList[vertex]]);
        }
    }
    haveEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1));
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }
        for(let adjvertices of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjvertices);
        }
        delete this.adjacencyList[vertex];
    }
    findCycle(start){
        let visited = new Set();

        let dfs = (node,parent = null)=>{
            visited.add(node);
            for(let neigh in this.adjacencyList[node]){
                if(!visited.has(neigh)){
                    if(dfs(neigh,node))return true;
                }else if(neigh!==parent){
                    return true;
                }
            }
            return false;
        }
        return dfs(start);
    }
}
const graph = new Graph();
graph.addVertices("A");
graph.addVertices("B");
graph.addVertices("C");
graph.addEdges("A","B");
graph.addEdges("B","C");
graph.display();
console.log(graph.haveEdge("A","B"));
console.log(graph.haveEdge("A","C"));