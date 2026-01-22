class HashTable{
    constructor(size=10){
        this.table = new Array(size);
    }
    hash(key){
        let h = 0;
        for(let ch of key){
            h+=ch.charCodeAt(0);
        }
        return h%this.table.length;
    }
    insert(key,value){
        let index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        for(let pair of this.table[index]){
            if(pair[0]===key){
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key,value]);
    }
    get(key){
        let index = this.hash(key);
        for(let pair of this.table[index]){
            if(pair[0]===key){
                return pair[1];
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket.splice(i,1);
                return true;
            }
        }
        return false;
    }
    keys(){
        let result = [];
        for(let bucket of this.table){
            if(bucket){
                for(let [key] of bucket){//or we can use pair and result.push(pair[0]) instead of [key]//
                    result.push(key);
                }
            }
        }
        return result;
    }
}
let h = new HashTable();
h.insert('name','Anand');
h.insert("age",25);
console.log(h.get('name'));
console.log(h.get("age"));
console.log(h.keys());