
var A = ['svnj', 'hello', 'cvpoq'];
key = prompt('','hello');

function  inArray(k, arr){
    for ( var i = 0; i < arr.length ; i++){
        if (k == arr[i]) {
        return true;
       } 
    }
    return false;
}
console.log("key = "+key);
console.log(inArray(key, A));