class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
        this.count = 0;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode;
    }
    insert(word){
       let node = this.root;
       for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;
       }
       node.isEndOfWord = true;
    }
    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char])return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
    startsWith(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.children[ch])return false;
            node = node.children[ch];
        }
        return true;
    }
    countPrefix(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.children[ch])return false;
            node = node.children[ch];
        }
        return node.count;
    }

    listAll(){
        const result = [];

        function dfs(node,path){
            if(node.isEndOfWord)result.push(path);

            for(let ch in node.children){
                dfs(node.children[ch],path+ch);
            }
        }

        dfs(this.root,"");
        return result;
    }

    autoComplete(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.children[ch])return [];
            node = node.children[ch];
        }
        let result = [];
        function dfs(node,path){
            if(node.isEndOfWord)result.push(prefix+path);
            for(let ch in node.children){
                dfs(node.children[ch],path+ch);
            }
        }
        dfs(node,"");
        return result;
    }
    searchPrefix(word){
        let node = this.root;
        let prefix = "";
        for(let ch of word.toLowerCase()){
            if(!node.children[ch])return null;
            prefix+=ch;
            node = node.children[ch];
            if(node.isEndOfWord)return prefix;
        }
        return null;
    }
    longestCommonPrefix(){
        let node = this.root;
        let prefix = ""
        while(node){
            if(Object.keys(node.children).length!==1||node.isEndOfWord)break;
            let char = Object.keys(node.children)[0];
            prefix+=char;
            node = node.children[char];
        }
        return prefix;
    }
    
}       

    function replaceWords(dictonary,sentence){
        const trie = new TrieNode();
        for(const word of dictonary){
            trie.insert(word);
        }
        return sentence.split(" ").map(word=>trie.searchPrefix(word)||word).join(" ");
    }

// function longestCommonPrefix(arr){
//     if(arr.length===0)return "";
//     let prefix = arr[0];
    
//     for(let i=1;i<arr.length;i++){
//         while(arr[i].indexOf(prefix)!==0){
//             prefix = prefix.slice(0,-1);
//             if(prefix==="")return "";
//         }
//     }
//     return prefix;
// }
// console.log(longestCommonPrefix(["flower","flight", "flow" ]));//fl
    
let t = new Trie();
t.insert("cat");
t.insert("cap");
console.log(t.search("cap"));
console.log(t.search("cad"));
console.log(t.startsWith("c"));
console.log(t.startsWith("k"));
console.log(t.countPrefix("ca"));
console.log(t.listAll());
console.log(t.autoComplete("ca"));