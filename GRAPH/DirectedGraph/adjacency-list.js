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
}