class Graph{
    constructor(vertices,isWeighted=false,isDirected=false){
        this.vertices = vertices;
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
        
        this.matrix = Array.from({length:vertices},()=>Array(vertices).fill(0))
    }
    addEdge(v1,v2,weight=1){
        if(this.isWeighted){
            this.matrix[v1][v2] = weight;
            if(!this.isDirected){
                this.matrix[v2][v1] = weight;
            }
        }else{
            this.matrix[v1][v2] = 1;
            if(!this.isDirected){
                this.matrix[v2][v1] = 1;
            }
        }
    }
    removeEdge(v1,v2){
        this.matrix[v1][v2]=0;
        if(!this.isDirected){
            this.matrix[v2][v1];
        }
    }
    hasEdge(v1,v2){
        return this.matrix[v1][v2]!==0
    }
    display(){
        console.log("Adjacency matrix:");
        this.matrix.forEach(row=>{
            console.log(row.join(" "));
        })
    }
}
const g = new Graph(4, true, false);
g.addEdge(0, 1, 5);
g.addEdge(0, 2, 3);
g.addEdge(1, 3, 2);
g.display();