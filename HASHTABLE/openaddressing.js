class HashTable{
    constructor(size=10){
        this.table = new Array(size);
        this.size = size;
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
        let i = 0;
        while(this.table[(index+i)%this.size]!==undefined){
            if(this.table[(index+i)%this.size].key===key){
                this.table[(index+i)%this.size].value = value;
                return;
            }
            i++;
            if(i>=this.size){
                return;
            }
        }
        this.table[(index+i)%this.size] = {key,value};
    }
    find(key){
        let index = this.hash(key);
        let i = 0;
        while(this.table[(index+i)%this.size]!==undefined){
            if(this.table[(index+i)%this.size].key===key){
                return this.table[(index+i)%this.size].value;
            }
        }
        return undefined;
    }
}