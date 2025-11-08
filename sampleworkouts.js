class TrieNode{
    constructor(){
        this.child = {};
        this.isEnd = false;
        this.count = 0;
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let node = this.root;
        for(let ch of word){
            if(!node.child[ch]){
                node.child[ch] = new TrieNode();
            }
            node = node.child[ch];
            node.count++
        }
        node.isEnd = true;
    }
    search(word){
        let node = this.root;
        for(let ch of word){
            if(!node.child[ch])return false;
            node = node.child[ch];
        }
        return node.isEnd;
    }
    searchPrefix(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.child[ch])return false;
            node = node.child[ch];
        }

        return true;
    }

    autoComplete(prefix){
        let node = this.root;

        for(let ch of prefix){
            if(!node.child[ch])return [];
            node = node.child[ch];
        }
        let result = [];
        function dfs(node,path){
            if(node.isEnd)result.push(prefix+path);
            for(let ch in node.child){
                dfs(node.child[ch],path+ch);
            }
        }

        dfs(node,"");
        return result ;
    }
    listAll(){
        let node = this.root;
        let result = [];

        function dfs(node,path){
            if(node.isEnd)result.push(path);
            for(let ch in node.child){
                dfs(node.child[ch],path+ch);
            }
        }

        dfs(node,"");
        return result;
    }
    countPre(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.child[ch])return 0;
            node = node.child[ch];
        }
        return node.count;
    }
}