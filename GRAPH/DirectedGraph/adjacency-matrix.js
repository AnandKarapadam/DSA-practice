//Directed Graph Adjacency Matrix
class Graph{
    constructor(vertices){
        this.vertices = vertices;
        this.matrix = Array.from({length:vertices},()=>Array(vertices).fill(0));
    }
    addEdge(v1,v2){
        this.matrix[v1][v2] = 1;
    }
    removeEdge(v1,v2){
        this.matrix[v1][v2] = 0;
    }
    hasEdge(v1,v2){
        return this.matrix[v1][v2]===1;
    }
    display(){
        for(let row of this.matrix){
            console.log(row.join(" "));
        }
    }
}
let  g = new Graph(3);
g.addEdge(0,1);
g.addEdge(1,0);
g.addEdge(1,2);
g.addEdge(2,1);
g.display();
console.log(g.hasEdge(1,0));

