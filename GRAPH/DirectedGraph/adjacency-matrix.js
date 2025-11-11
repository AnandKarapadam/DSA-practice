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
        return this.matrix[v1][v2]===-1;
    }
    display(){
        for(let row of this.matrix){
            console.log(row.join(" "));
        }
    }
}

