class Graph{
    constructor(){
        this.vertices = [];
        this.adjacentMatrix = [];
    }
    addVertice(vertex){
        if(this.vertices.includes(vertex))return;
        this.vertices.push(vertex);
        for(let row of this.adjacentMatrix){
            row.push(0);
        }
        let newRow = new Array(this.vertices.length).fill(0);
        this.adjacentMatrix.push(newRow);
    }
    addEdges(v1,v2){
        let i = this.vertices.indexOf(v1);
        let j = this.vertices.indexOf(v2);

        if(i==-1||j==-1){
            console.log("Vertecis not found");
            return;
        }
        this.adjacentMatrix[i][j] = 1;
        this.adjacentMatrix[j][i] = 1;
    }
    removeEdge(v1,v2){
        let i = this.vertices.indexOf(v1);
        let j = this.vertices.indexOf(v2);

        if(j==-1||i==-1){
            console.log("Vertex not found");
            return;
        }

        this.adjacentMatrix[i][j] = 0;
        this.adjacentMatrix[j][i] = 0;
    }
    removeVertex(vertex){
        let index = this.vertices.indexOf(vertex);

        if(index==-1){
            console.log("Vertex not found");
            return;
        }

        this.vertices.splice(index,1);
        this.adjacentMatrix.splice(index,1);

        for(let row of this.adjacentMatrix){
            row.splice(index,1);
        }
    }
    display(){
        console.log(this.vertices.join(" "));
        for(let i = 0;i<this.vertices.length;i++){
            console.log(this.vertices[i]+"  "+this.adjacentMatrix[i].join(" "));
        }
    }
    bfs(start){
        let queue = [];
        let visited = new Set();
        let i = this.vertices.indexOf(start);
        if(i===-1)return;

        queue.push(i);
        visited.add(i);

        while(queue.length>0){
            let curr = queue.shift();
            console.log(this.vertices[curr]);

            for(let j=0;j<this.adjacentMatrix[curr].length;j++){
                if(this.adjacentMatrix[curr][j]===1&&!visited.has(j)){
                    visited.add(j);
                    queue.push(j);
                }
            }
        }
    }
    dfs(start){
        let visited = new Set();
        let i = this.vertices.indexOf(start);
        if(i===-1)return false;

        let traversal = (curr)=>{
            visited.add(curr);
            console.log(this.vertices[curr]);
            
            for(let j=0;j<this.adjacentMatrix[curr].length;j++){
                if(this.adjacentMatrix[curr][j]===1&&!visited.has(j)){
                    traversal(j);
                }
            }
        }
        traversal(i);
    }
}

let g = new Graph();
g.addVertice("A");
g.addVertice("B");
g.addVertice("C");
g.addEdges("A","B");
g.addEdges("B","C");
g.display();
// g.removeEdge("A","B");
g.removeVertex("A");    

g.display();


// let noOfVertex = 4;
// let edges = [
//     [0,1],
//     [0,2],
//     [2,3]];

// function convertAM(noOfVertex,edges){
//     let adjMat = new Array(noOfVertex);
//     for(let row = 0;row<adjMat.length;row++){
//         adjMat[row] = new Array(noOfVertex).fill(0);
//     }
    
//     for(let edge of edges){
//         let startVertex = edge[0];
//         let endVertex = edge[1];
        
//         adjMat[startVertex][endVertex] = 1;
//         adjMat[endVertex][startVertex] = 1; 
//     }
    
//     return adjMat;
// }

// console.log(convertAM(noOfVertex,edges));