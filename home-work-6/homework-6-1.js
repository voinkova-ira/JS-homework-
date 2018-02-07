var b = +prompt("n = ", 5);
var a = +prompt("m = ", 5);

B = new Array(a);

for(i = 0; i < B.length; i++){
    B[i] = new Array(b);
}
console.log(array(a,b,B));

function array(m,n, arr){
    for( var i = 0; i < arr.length; i++){
        for( var j = 0; j < arr[i].length; j++){
            arr[i][j] = Math.floor(Math.random()*10);
            // document.write(arr[i][j] + " ");
        }
        // document.write("<br/>");
    }
    return arr;


}
