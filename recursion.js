function multiply(arr){
    if(arr.length<=0)return 1;
    return arr[arr.length-1]*multiply(arr.slice(0,arr.length-1))
}

// console.log(multiply([1,2,3]));


function flatten(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let nested = flatten(arr[i]);
            for(let j=0;j<nested.length;j++){
                result.push(nested[j]);
            }
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(flatten([1,2,3,[3,4,5],[7,6,5]]));

function factorial(n){
    if(n<=0)return 1;
    return n*factorial(n-1);
}
// console.log(factorial(5));
function sequence(arr,i=0,sum=0,result=[]){

    if(i===arr.length)return result;
    sum+=arr[i];

    result.push(sum);
    return sequence(arr,i+1,sum,result);
}
// console.log(sequence([1,2,3,4,5]));

function summation(arr,i=0,sum=0){
    if(i===arr.length)return sum;
    sum+=arr[i];
    return summation(arr,i+1,sum);
}
// console.log(summation([1,2,3,4]));

function sum(arr,i=0){
    if(i===arr.length)return 0;
    return arr[i]+sum(arr,i+1);
}
// console.log(sum([1,2,3])).

function sumofn(n,sum=0){
    if(n===0)return sum;
    sum+=n;
    return sumofn(n-1,sum);
}
// console.log(sumofn(3));

function reverse(str){
    if(str.length===0)return str;

    return reverse(str.slice(1))+str[0];
}
// console.log(reverse("hello"));

function palindrome(str){
    if(str.length<=1)return true;
    if(str[0]!==str[str.length-1])return false;

    return palindrome(str.slice(1,-1));
}
// console.log(palindrome("racecar"));

function countDigits(num){
    if(num<10)return 1;
    return 1+countDigits(Math.floor(num/10))
}
// console.log(countDigits(1100));
function upToN(n){
    if(n<=0)return
    upToN(n-1);
    console.log(n);
} 
upToN(5);